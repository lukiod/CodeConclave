// client/src/components/Editor/XTerminal.jsx
import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { FaTerminal, FaTimes, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import { API_URL } from '../../config/constants';

// Import xterm.js CSS
import 'xterm/css/xterm.css';

const XTerminal = ({ isOpen, onClose }) => {
  const terminalRef = useRef(null);
  const containerRef = useRef(null);
  const socketRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen && !xtermRef.current && terminalRef.current) {
      // Initialize xterm.js
      const term = new Terminal({
        cursorBlink: true,
        cursorStyle: 'bar',
        fontFamily: 'Fira Code, monospace',
        fontSize: 14,
        theme: {
          background: '#1E1E1E',
          foreground: '#EEEEEE',
          cursor: '#FFFFFF',
          selection: 'rgba(255, 255, 255, 0.3)',
          black: '#000000',
          red: '#E06C75',
          green: '#98C379',
          yellow: '#E5C07B',
          blue: '#61AFEF',
          magenta: '#C678DD',
          cyan: '#56B6C2',
          white: '#DCDFE4',
          brightBlack: '#7F848E',
          brightRed: '#E06C75',
          brightGreen: '#98C379',
          brightYellow: '#E5C07B',
          brightBlue: '#61AFEF',
          brightMagenta: '#C678DD',
          brightCyan: '#56B6C2',
          brightWhite: '#FFFFFF'
        }
      });

      // Initialize addons
      const fitAddon = new FitAddon();
      const webLinksAddon = new WebLinksAddon();

      term.loadAddon(fitAddon);
      term.loadAddon(webLinksAddon);

      // Open terminal
      term.open(terminalRef.current);
      fitAddon.fit();

      // Connect to socket.io server
      const serverUrl = API_URL.includes('/api') 
        ? API_URL.substring(0, API_URL.indexOf('/api')) 
        : window.location.origin;

      const socket = io(`${serverUrl}/terminals`, {
        path: '/socket.io'
      });

      // Handle connection
      socket.on('connect', () => {
        // Create terminal session
        socket.emit('create', {
          cols: term.cols,
          rows: term.rows
        });

        // Handle terminal data
        socket.on('data', (data) => {
          term.write(data);
        });

        // Handle terminal input
        term.onData((data) => {
          socket.emit('data', data);
        });

        // Handle terminal resize
        term.onResize(({ cols, rows }) => {
          socket.emit('resize', { cols, rows });
        });
      });

      // Handle disconnection
      socket.on('disconnect', () => {
        term.write('\r\n\x1b[1;31mDisconnected from terminal session.\x1b[0m\r\n');
      });

      // Save references
      xtermRef.current = term;
      fitAddonRef.current = fitAddon;
      socketRef.current = socket;

      // Handle terminal resize
      const handleResize = () => {
        if (fitAddonRef.current) {
          fitAddonRef.current.fit();
        }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
        
        if (xtermRef.current) {
          xtermRef.current.dispose();
          xtermRef.current = null;
        }
      };
    }
  }, [isOpen, API_URL]);

  useEffect(() => {
    // Re-fit terminal when fullscreen changes
    if (fitAddonRef.current && isOpen) {
      setTimeout(() => {
        fitAddonRef.current.fit();
      }, 100);
    }
  }, [isFullscreen, isOpen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen) return null;

  return (
    <TerminalContainer 
      ref={containerRef} 
      isFullscreen={isFullscreen}
    >
      <TerminalHeader>
        <TerminalTitle>
          <FaTerminal />
          <span>Terminal</span>
        </TerminalTitle>
        <TerminalActions>
          <TerminalButton 
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <FaCompressAlt /> : <FaExpandAlt />}
          </TerminalButton>
          <TerminalButton 
            onClick={onClose}
            title="Close Terminal"
          >
            <FaTimes />
          </TerminalButton>
        </TerminalActions>
      </TerminalHeader>
      <TerminalContent ref={terminalRef} />
    </TerminalContainer>
  );
};

const TerminalContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => props.isFullscreen ? '100%' : '300px'};
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #333;
  z-index: 100;
  transition: height 0.3s ease-in-out;
`;

const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  background-color: #252526;
  border-bottom: 1px solid #333;
  user-select: none;
`;

const TerminalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #CCCCCC;
  font-size: 12px;
  
  svg {
    font-size: 14px;
  }
`;

const TerminalActions = styled.div`
  display: flex;
  gap: 8px;
`;

const TerminalButton = styled.button`
  background: none;
  border: none;
  color: #CCCCCC;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  padding: 0;
  
  &:hover {
    background-color: #3F3F3F;
  }
  
  svg {
    font-size: 12px;
  }
`;

const TerminalContent = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 8px;
  
  .xterm {
    height: 100%;
  }
`;

export default XTerminal;