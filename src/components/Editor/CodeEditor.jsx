// client/src/components/Editor/CodeEditor.jsx
import { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import { EditorContext } from '../../contexts/EditorContext';
import { useTheme } from '../../contexts/ThemeContext';
import { SUPPORTED_LANGUAGES } from '../../config/constants';
import { FaPlay, FaSpinner } from 'react-icons/fa';
import { executeSandboxedCode, executeCode } from '../../services/codeRunnerService';
import ExecutionResult from './ExecutionResult';

const CodeEditor = ({ file }) => {
  const editorRef = useRef(null);
  const { handleFileChange } = useContext(EditorContext);
  const { isDarkMode } = useTheme();
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  
  useEffect(() => {
    // Focus editor when active file changes
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [file?._id]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
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
      
      setExecutionResult(result)
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
        <p>Select a file to edit</p>
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
          <RunButton 
            onClick={handleRunCode} 
            disabled={isExecuting || !isExecutable()}
            title={!isExecutable() ? "This file type cannot be executed" : "Run code"}
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
          }}
        />
      </EditorWrapper>
      
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

const EditorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
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

const EmptyState = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  color: var(--color-text-secondary);
  font-size: 16px;
  
  p {
    margin: 0;
  }
`;

export default CodeEditor;