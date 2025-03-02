// client/src/components/Editor/CodeEditor.jsx
import { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import { EditorContext } from '../../contexts/EditorContext';
import { SUPPORTED_LANGUAGES } from '../../config/constants';
import { FaPlay, FaSpinner } from 'react-icons/fa';
import { executeSandboxedCode, executeCode } from '../../services/codeRunnerService';
import ExecutionResult from './ExecutionResult';

const CodeEditor = ({ file }) => {
  const editorRef = useRef(null);
  const { handleFileChange } = useContext(EditorContext);
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
          theme="vs-dark"
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
  border: 1px solid #e2e8f0;
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
  background-color: #2d3748;
  border-bottom: 1px solid #4a5568;
  
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
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 500;
`;

const FileLanguage = styled.div`
  color: #a0aec0;
  font-size: 12px;
  margin-left: 8px;
  padding: 2px 6px;
  background-color: #4a5568;
  border-radius: 4px;
  text-transform: capitalize;
`;

const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const RunButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: ${props => props.disabled ? '#718096' : '#38A169'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #2F855A;
  }
  
  .spinner {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f8f9fa;
  color: #718096;
  font-size: 1.1rem;
`;

export default CodeEditor;