// src/components/Editor/CodeEditor.jsx
import { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { EditorContext } from '../../contexts/EditorContext';
import { useTheme } from '../../contexts/ThemeContext';
import { SUPPORTED_LANGUAGES } from '../../config/constants';
import { FaPlay, FaSpinner, FaKeyboard, FaCode } from 'react-icons/fa';
import { executeSandboxedCode, executeCode } from '../../services/codeRunnerService';
import ExecutionResult from './ExecutionResult';

const CodeEditor = ({ file }) => {
  const editorRef = useRef(null);
  const { handleFileChange, saveCurrentFile } = useContext(EditorContext);
  const { isDarkMode } = useTheme();
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [showShortcuts, setShowShortcuts] = useState(false);
  
  useEffect(() => {
    // Focus editor when active file changes
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [file?._id]);

  // Keyboard shortcuts handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle shortcuts when editor is focused or no specific element is focused
      const activeElement = document.activeElement;
      const isEditorFocused = activeElement?.classList?.contains('monaco-editor') || 
                             activeElement === document.body;

      if (!isEditorFocused) return;

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // Debug logging
      // console.log('Key pressed:', {
      //   key: e.key,
      //   code: e.code,
      //   shiftKey: e.shiftKey,
      //   ctrlKey: e.ctrlKey,
      //   metaKey: e.metaKey,
      //   cmdOrCtrl,
      //   showShortcuts
      // });

      if (cmdOrCtrl) {
        switch(e.key.toLowerCase()) {
          case 's': // Save
            e.preventDefault();
            if (file && saveCurrentFile) {
              saveCurrentFile();
            }
            break;
          case '?': // Toggle shortcuts help (Ctrl+Shift+/)
          case '/': // Also handle Ctrl+Shift+/ directly
            if (e.shiftKey) {
              e.preventDefault();
              // console.log('Toggling shortcuts, current state:', showShortcuts);
              setShowShortcuts(!showShortcuts);
            }
            break;
          case 'f': // Find (Monaco built-in)
            // Let Monaco handle this
            break;
          case 'h': // Replace (Monaco built-in)
            // Let Monaco handle this
            break;
        }
      }
      
      // ESC key handlers
      if (e.key === 'Escape') {
        if (showShortcuts) {
          setShowShortcuts(false);
        } else if (executionResult) {
          closeExecutionResult();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [file, isExecuting, showShortcuts, executionResult, saveCurrentFile]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    
    // Add custom Monaco keyboard shortcuts
    // Use monaco.KeyMod instead of editor.KeyMod
    try {
      editor.addAction({
        id: 'run-code',
        label: 'Run Code',
        keybindings: [
          // Ctrl+Enter or Cmd+Enter
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter
        ],
        run: () => {
          if (isExecutable() && !isExecuting) {
            handleRunCode();
          }
        }
      });
    } catch (error) {
      console.log('Could not add Monaco keyboard shortcut:', error);
      // Fallback - just focus the editor
    }
  };

  // Determine language from file extension
  const getLanguage = () => {
    if (!file || !file.extension) return 'plaintext';
    
    const extension = file.extension.toLowerCase();
    const language = SUPPORTED_LANGUAGES.find(lang => 
      lang.extensions.includes(extension)
    );
    
    return language ? language.id : 'plaintext';
  };

  const handleRunCode = async () => {
    if (!file || !editorRef.current || isExecuting) return;
    
    setIsExecuting(true);
    setExecutionResult(null);
    
    try {
      const code = editorRef.current.getValue();
      const language = getLanguage();
      
      let result;
      
      // Try server-side execution first
      try {
        result = await executeCode(code, language);
      } catch (serverError) {
        console.log('Server execution failed, falling back to sandbox:', serverError);
        // Fall back to client-side execution for JavaScript
        result = await executeSandboxedCode(code, language);
      }
      
      setExecutionResult(result);
    } catch (error) {
      setExecutionResult({
        success: false,
        output: null,
        error: error.message || 'Unknown error during code execution',
        executionTime: 0
      });
    } finally {
      setIsExecuting(false);
    }
  };

  const isExecutable = () => {
    if (!file) return false;
    
    const language = getLanguage();
    // Client-side supports JS, server-side supports more languages
    return true;
  };

  const closeExecutionResult = () => {
    setExecutionResult(null);
  };

  if (!file) {
    return (
      <EmptyState>
        <FaCode style={{ fontSize: '2rem', color: '#a0aec0', marginBottom: '1rem' }} />
        <p>Select a file to edit</p>
        <ShortcutsHint>
          Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd> to view keyboard shortcuts
        </ShortcutsHint>
      </EmptyState>
    );
  }

  return (
    <EditorContainer>
      <EditorToolbar>
        <FileInfo>
          <FileName>{file.name}{file.extension}</FileName>
          <FileLanguage>{getLanguage()}</FileLanguage>
        </FileInfo>
        <ToolbarActions>
          <ShortcutsButton 
            onClick={() => setShowShortcuts(!showShortcuts)}
            title="Keyboard shortcuts (Ctrl+Shift+/)"
            isActive={showShortcuts}
          >
            <FaKeyboard />
          </ShortcutsButton>
          <RunButton 
            onClick={handleRunCode} 
            disabled={isExecuting || !isExecutable()}
            title={!isExecutable() ? "This file type cannot be executed" : "Run code (Ctrl+Enter)"}
          >
            {isExecuting ? (
              <>
                <FaSpinner className="spinner" /> Running...
              </>
            ) : (
              <>
                <FaPlay /> Run
              </>
            )}
          </RunButton>
        </ToolbarActions>
      </EditorToolbar>
      
      {/* Remove the old shortcuts panel from inside EditorContainer */}
      
      <EditorWrapper>
        <Editor
          height="100%"
          language={getLanguage()}
          value={file.content}
          theme={isDarkMode ? "vs-dark" : "light"}
          onChange={value => handleFileChange(value)}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: true },
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            fontSize: 14,
            fontFamily: "'Fira Code', 'Droid Sans Mono', 'monospace'",
            fontLigatures: true,
            automaticLayout: true,
            tabSize: 2,
            lineNumbers: 'on',
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto',
            },
            // Enable additional Monaco shortcuts
            find: {
              addExtraSpaceOnTop: false,
              autoFindInSelection: 'never',
              seedSearchStringFromSelection: 'always'
            }
          }}
        />
      </EditorWrapper>
      {showShortcuts && (
        <>
          <ShortcutsBackdrop onClick={() => setShowShortcuts(false)} />
          <ShortcutsPanel>
            <ShortcutsTitle>Keyboard Shortcuts</ShortcutsTitle>
            <ShortcutsList>
              <ShortcutItem>
                <ShortcutKey>Ctrl + S</ShortcutKey>
                <ShortcutDesc>Save file</ShortcutDesc>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>Ctrl + Enter</ShortcutKey>
                <ShortcutDesc>Run code</ShortcutDesc>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>Ctrl + F</ShortcutKey>
                <ShortcutDesc>Find in file</ShortcutDesc>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>Ctrl + H</ShortcutKey>
                <ShortcutDesc>Replace in file</ShortcutDesc>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>Ctrl + Shift + /</ShortcutKey>
                <ShortcutDesc>Toggle shortcuts</ShortcutDesc>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>Esc</ShortcutKey>
                <ShortcutDesc>Close panels</ShortcutDesc>
              </ShortcutItem>
            </ShortcutsList>
          </ShortcutsPanel>
        </>
      )}
      
      {executionResult && (
        <ExecutionResult 
          result={executionResult} 
          onClose={closeExecutionResult}
          language={getLanguage()}
        />
      )}
    </EditorContainer>
  );
};

// Styled Components
const EditorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  position: relative;
`;

const EditorWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

const EditorToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const FileName = styled.div`
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
`;

const FileLanguage = styled.div`
  color: var(--color-text-secondary);
  font-size: 12px;
  margin-left: 8px;
  padding: 2px 6px;
  background-color: var(--color-background);
  border-radius: 3px;
  border: 1px solid var(--color-border);
`;

const ToolbarActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ShortcutsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: ${props => props.isActive ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'var(--color-text-secondary)'};
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.isActive ? 'var(--color-primary-dark)' : 'var(--color-surface-light)'};
  }
`;

const RunButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: ${props => props.disabled ? 'var(--color-border)' : 'var(--color-primary)'};
  color: ${props => props.disabled ? 'var(--color-text-tertiary)' : 'white'};
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? 'var(--color-border)' : 'var(--color-primary-dark)'};
  }
  
  .spinner {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ShortcutsBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ShortcutsPanel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  background: #2d3748;
  border: 1px solid #4299e1;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  min-width: 350px;
  max-width: 400px;
  
  /* Add backdrop blur effect */
  backdrop-filter: blur(4px);
  
  /* Add a subtle animation */
  animation: fadeInScale 0.3s ease-out;
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const ShortcutsTitle = styled.h4`
  margin: 0 0 0.75rem 0;
  color: #f7fafc;
  font-size: 14px;
  font-weight: 600;
`;

const ShortcutsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ShortcutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShortcutKey = styled.kbd`
  background-color: #4a5568;
  border: 1px solid #718096;
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 11px;
  color: #f7fafc;
  font-family: monospace;
`;

const ShortcutDesc = styled.span`
  font-size: 12px;
  color: #a0aec0;
`;

const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  color: var(--color-text-secondary);
  font-size: 16px;
  
  p {
    margin: 0 0 1rem 0;
  }
`;

const ShortcutsHint = styled.div`
  font-size: 12px;
  color: var(--color-text-tertiary);
  
  kbd {
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding: 2px 4px;
    font-size: 10px;
    margin: 0 2px;
  }
`;

export default CodeEditor;