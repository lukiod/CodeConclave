// client/src/components/Editor/FileExplorer.jsx
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaFile, FaFolder, FaFolderOpen, FaPlus, FaEllipsisV, FaCode, FaMarkdown, FaJs, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { createFile, deleteFile, getProjectFiles } from '../../services/projectService';
import { EditorContext } from '../../contexts/EditorContext';
import NewFileModal from './NewFileModal';
import { FILE_ICONS } from '../../config/constants';

const FileExplorer = ({ projectId }) => {
  const [expandedFolders, setExpandedFolders] = useState({});
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, fileId: null });
  const [isNewFileModalOpen, setIsNewFileModalOpen] = useState(false);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { 
    files, 
    setFiles, 
    activeFile, 
    openFile 
  } = useContext(EditorContext);

  // Fetch project files when the component mounts
  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);
      try {
        const filesData = await getProjectFiles(projectId);
        setFiles(filesData);
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchFiles();
  }, [projectId, setFiles]);

  const toggleFolder = (folderId) => {
    setExpandedFolders({
      ...expandedFolders,
      [folderId]: !expandedFolders[folderId]
    });
  };

  const handleFileClick = (file) => {
    if (file.type === 'file') {
      openFile(file);
    } else {
      toggleFolder(file._id);
    }
  };

  const handleContextMenu = (e, fileId) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      fileId
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, fileId: null });
  };

  const handleNewFile = async (fileData) => {
    try {
      const newFile = await createFile(projectId, {
        ...fileData,
        parentId: currentFolder ? currentFolder._id : null
      });
      
      setFiles([...files, newFile]);
      setIsNewFileModalOpen(false);
      
      // If it's a new file, open it immediately
      if (newFile.type === 'file') {
        openFile(newFile);
      }
    } catch (error) {
      console.error('Error creating file:', error);
    }
  };

  const handleDeleteFile = async (fileId) => {
    const file = files.find(f => f._id === fileId);
    if (!file) return;
    
    if (window.confirm(`Are you sure you want to delete ${file.name}${file.extension || ''}?`)) {
      try {
        await deleteFile(projectId, fileId);
        
        // Remove from files state
        setFiles(files.filter(f => f._id !== fileId));
        
        // Close the context menu
        closeContextMenu();
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    }
  };

  const getFileIcon = (file) => {
    if (file.type === 'directory') {
      return expandedFolders[file._id] ? <FaFolderOpen /> : <FaFolder />;
    }
    
    // Get icon based on file extension
    const extension = file.extension?.substring(1).toLowerCase(); // Remove the leading dot
    
    switch (extension) {
      case 'js':
      case 'jsx':
        return <FaJs />;
      case 'py':
        return <FaPython />;
      case 'html':
        return <FaHtml5 />;
      case 'css':
        return <FaCss3 />;
      case 'md':
        return <FaMarkdown />;
      case 'ipynb':
        return <FaCode />;
      default:
        return <FaFile />;
    }
  };

  // Build the file tree structure
  const buildFileTree = () => {
    // Create a map of parent ID to children
    const fileMap = {};
    files.forEach(file => {
      if (!fileMap[file.parentId || 'root']) {
        fileMap[file.parentId || 'root'] = [];
      }
      fileMap[file.parentId || 'root'].push(file);
    });
    
    // Sort files: directories first, then alphabetically
    const sortFiles = (files) => {
      return files.sort((a, b) => {
        if (a.type === 'directory' && b.type !== 'directory') {
          return -1;
        }
        if (a.type !== 'directory' && b.type === 'directory') {
          return 1;
        }
        return a.name.localeCompare(b.name);
      });
    };
    
    // Recursively render file tree
    const renderFileTree = (parentId = 'root') => {
      const children = fileMap[parentId] || [];
      if (children.length === 0) return null;
      
      return (
        <FileList>
          {sortFiles(children).map(file => (
            <FileItem 
              key={file._id}
              isActive={activeFile && activeFile._id === file._id}
              onClick={() => handleFileClick(file)}
              onContextMenu={(e) => handleContextMenu(e, file._id)}
            >
              <FileIcon>{getFileIcon(file)}</FileIcon>
              <FileName>{file.name}{file.type === 'file' ? file.extension : ''}</FileName>
              
              {file.type === 'directory' && expandedFolders[file._id] && (
                renderFileTree(file._id)
              )}
            </FileItem>
          ))}
        </FileList>
      );
    };
    
    return renderFileTree();
  };

  if (isLoading) {
    return <LoadingIndicator>Loading files...</LoadingIndicator>;
  }

  return (
    <ExplorerContainer onClick={closeContextMenu}>
      <ExplorerHeader>
        <Title>Files</Title>
        <AddButton 
          onClick={(e) => {
            e.stopPropagation();
            setCurrentFolder(null);
            setIsNewFileModalOpen(true);
          }}
          title="Add new file"
        >
          <FaPlus />
        </AddButton>
      </ExplorerHeader>
      
      {files.length === 0 ? (
        <EmptyState>
          <p>No files yet</p>
          <EmptyStateButton onClick={() => setIsNewFileModalOpen(true)}>
            Create File
          </EmptyStateButton>
        </EmptyState>
      ) : (
        buildFileTree()
      )}
      
      {/* Context Menu */}
      {contextMenu.visible && (
        <ContextMenu style={{ top: contextMenu.y, left: contextMenu.x }}>
          <ContextMenuItem 
            onClick={() => {
              const file = files.find(f => f._id === contextMenu.fileId);
              if (file && file.type === 'directory') {
                setCurrentFolder(file);
                setIsNewFileModalOpen(true);
                closeContextMenu();
              }
            }}
          >
            Add File
          </ContextMenuItem>
          <ContextMenuItem onClick={() => handleDeleteFile(contextMenu.fileId)}>
            Delete
          </ContextMenuItem>
        </ContextMenu>
      )}
      
      {/* New File Modal */}
      <NewFileModal
        isOpen={isNewFileModalOpen}
        onClose={() => setIsNewFileModalOpen(false)}
        onCreate={handleNewFile}
        folder={currentFolder}
      />
    </ExplorerContainer>
  );
};

const ExplorerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-right: 1px solid #e2e8f0;
  overflow: hidden;
`;

const ExplorerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #edf2f7;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: #4a5568;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: #4a5568;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    background-color: #e2e8f0;
  }
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.isActive ? '#e6f7ff' : 'transparent'};
  border-left: 3px solid ${props => props.isActive ? '#1890ff' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.isActive ? '#e6f7ff' : '#f0f0f0'};
  }
  
  ${FileList} {
    margin-left: 20px;
    margin-top: 5px;
  }
`;

const FileIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: #4a5568;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const FileName = styled.span`
  font-size: 13px;
  color: #4a5568;
  word-break: break-all;
`;

const ContextMenu = styled.div`
  position: fixed;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 150px;
`;

const ContextMenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  
  p {
    color: #718096;
    margin-bottom: 15px;
  }
`;

const EmptyStateButton = styled.button`
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  
  &:hover {
    background-color: #2c5282;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #718096;
  font-size: 14px;
`;

export default FileExplorer;