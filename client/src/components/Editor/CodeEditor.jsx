// client/src/components/Editor/CodeEditor.jsx
import { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import { EditorContext } from '../../contexts/EditorContext';
import { SUPPORTED_LANGUAGES } from '../../config/constants';

const CodeEditor = ({ file }) => {
  const editorRef = useRef(null);
  const { handleFileChange } = useContext(EditorContext);
  
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

  if (!file) {
    return (
      <EmptyState>
        <p>Select a file to edit</p>
      </EmptyState>
    );
  }

  return (
    <EditorContainer>
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
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
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