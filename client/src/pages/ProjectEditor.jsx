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
`;

const EditorLayout = styled.div`
  flex: 1;
  overflow: hidden;
  
  .split-container {
    display: flex;
    height: 100%;
  }
  
  .gutter {
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .gutter.gutter-horizontal {
    cursor: col-resize;
  }
`;

const FileExplorerContainer = styled.div`
  height: 100%;
  overflow: auto;
  background-color: #f5f5f5;
`;

const EditorSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NoFileSelected = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  color: #666;
  text-align: center;
  padding: 2rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
  
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
  height: 100%;
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  max-width: 500px;
  text-align: center;
`;

const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #2c5282;
  }
`;

export default ProjectEditor;