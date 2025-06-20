// client/src/pages/ProjectEditor.jsx
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Split from 'react-split';
import { EditorContext } from '../contexts/EditorContext';
import useProject from '../hooks/useProject';
import useFileSystem from '../hooks/useFileSystem';
import FileExplorer from '../components/Editor/FileExplorer';
import EditorTabs from '../components/Editor/EditorTabs';
import CodeEditor from '../components/Editor/CodeEditor';
import NotebookEditor from '../components/Notebook/NotebookEditor';
import ProjectToolbar from '../components/Editor/ProjectToolbar';
import ShareModal from '../components/Editor/ShareModal';
import XTerminal from '../components/Editor/XTerminal';
import { executeCode, executeSandboxedCode } from '../services/codeRunnerService';

const ProjectEditor = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const { 
    setCurrentProject, 
    activeFile, 
    setActiveFile 
  } = useContext(EditorContext);
  
  const { 
    project, 
    files, 
    isLoading, 
    error, 
    fetchProject, 
    fetchFiles, 
    setFiles 
  } = useProject(projectId);
  
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  
  const fileSystem = useFileSystem(projectId, files, setFiles);
  
  // Set current project in EditorContext
  useEffect(() => {
    if (project) {
      setCurrentProject(project);
    }
  }, [project, setCurrentProject]);
  
  // Check if the file is a Jupyter notebook
  const isNotebookFile = (file) => {
    return file && file.extension === '.ipynb';
  };
  
  // Handle the run code button click on the toolbar
  const handleRunCode = async (file) => {
    if (!file) return;
    
    // Get language from file extension
    const extension = file.extension?.substring(1).toLowerCase();
    let language = extension;
    
    // Map extension to language name
    switch (extension) {
      case 'js':
      case 'jsx':
        language = 'javascript';
        break;
      case 'py':
        language = 'python';
        break;
      // Add more mappings as needed
      default:
        language = extension;
    }
    
    try {
      // Try server-side execution first
      return await executeCode(file.content, language);
    } catch (error) {
      console.log('Server execution failed, falling back to sandbox:', error);
      // Fall back to client-side execution
      return await executeSandboxedCode(file.content, language);
    }
  };
  
  // Toggle terminal visibility
  const toggleTerminal = () => {
    alert('this functionality is under progress')
    // setIsTerminalOpen(!isTerminalOpen);
    return;
  };
  
  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <p>Loading project...</p>
      </LoadingContainer>
    );
  }
  
  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <BackButton onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </BackButton>
      </ErrorContainer>
    );
  }
  
  return (
    <EditorContainer>
      <ProjectToolbar 
        project={project} 
        onShare={() => setIsShareModalOpen(true)}
        onRunCode={() => handleRunCode(activeFile)}
        onToggleTerminal={toggleTerminal}
      />
      
      <EditorLayout>
        <Split 
          sizes={[20, 80]}
          minSize={150}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          direction="horizontal"
          className="split-container"
        >
          <FileExplorerContainer>
            <FileExplorer projectId={projectId} />
          </FileExplorerContainer>
          
          <EditorSection>
            <EditorTabs />
            
            {activeFile ? (
              isNotebookFile(activeFile) ? (
                <NotebookEditor file={activeFile} />
              ) : (
                <CodeEditor file={activeFile} />
              )
            ) : (
              <NoFileSelected>
                <p>No file selected. Select a file from the explorer or create a new file.</p>
              </NoFileSelected>
            )}
          </EditorSection>
        </Split>
      </EditorLayout>
      
      {/* Terminal */}
      <XTerminal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
      
      {/* Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        project={project}
        projectId={projectId}
      />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  background: var(--color-background);
`;

const EditorLayout = styled.div`
  flex: 1;
  overflow: hidden;
  
  .split-container {
    display: flex;
    height: 100%;
  }
  
  .gutter {
    background-color: var(--color-border);
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .gutter.gutter-horizontal {
    cursor: col-resize;
  }
`;

const FileExplorerContainer = styled.div`
  height: 100%;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
`;

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-background);
`;

const NoFileSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--color-surface);
  color: var(--color-text-secondary);
  font-size: 16px;
  text-align: center;
  
  p {
    margin: 0;
    padding: 20px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--color-text-secondary);
  background: var(--color-background);
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-radius: 50%;
  border-top-color: var(--color-primary);
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: var(--color-background);
`;

const ErrorMessage = styled.div`
  background-color: var(--color-error-light);
  color: var(--color-error);
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 4px solid var(--color-error);
  text-align: center;
  max-width: 500px;
`;

const BackButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    background: var(--color-primary-dark);
  }
`;

export default ProjectEditor;