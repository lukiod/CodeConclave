// src/components/Editor/FileExplorer.jsx
import { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { 
  FaFile, FaFolder, FaFolderOpen, FaPlus, FaEllipsisV, 
  FaCode, FaMarkdown, FaJs, FaPython, FaHtml5, FaCss3,
  FaTrash, FaEdit, FaCopy
} from 'react-icons/fa';
import { createFile, deleteFile, getProjectFiles, updateFile } from '../../services/projectService';
import { EditorContext } from '../../contexts/EditorContext';
import NewFileModal from './NewFileModal';

const FileExplorer = ({ projectId }) => {
  const [expandedFolders, setExpandedFolders] = useState({});
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, fileId: null });
  const [isNewFileModalOpen, setIsNewFileModalOpen] = useState(false);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRenaming, setIsRenaming] = useState(null);
  const [renameValue, setRenameValue] = useState('');
  const renameInputRef = useRef(null);
  
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
  
  // Focus rename input when it becomes visible
  useEffect(() => {
    if (isRenaming && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
    }
  }, [isRenaming]);

  const toggleFolder = (folderId, e) => {
    e.stopPropagation();
    setExpandedFolders({
      ...expandedFolders,
      [folderId]: !expandedFolders[folderId]
    });
  };

  const handleFileClick = (file, e) => {
    if (e) e.stopPropagation();
    
    if (isRenaming) return;
    
    if (file.type === 'file') {
      openFile(file);
    } else {
      toggleFolder(file._id, { stopPropagation: () => {} });
    }
  };

  const handleContextMenu = (e, file) => {
    e.preventDefault();
    e.stopPropagation();
    
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      fileId: file._id,
      file
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, fileId: null, file: null });
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
      
      // If it's a folder, expand it
      if (newFile.type === 'directory') {
        setExpandedFolders({
          ...expandedFolders,
          [newFile._id]: true
        });
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
  
  const startRenaming = (file) => {
    setIsRenaming(file._id);
    setRenameValue(file.type === 'file' ? `${file.name}${file.extension}` : file.name);
    closeContextMenu();
  };
  
  const handleRename = async (fileId) => {
    const file = files.find(f => f._id === fileId);
    if (!file || !renameValue.trim()) {
      setIsRenaming(null);
      return;
    }
    
    try {
      let updatedFile;
      
      if (file.type === 'file') {
        // For files, handle extension change
        const lastDotIndex = renameValue.lastIndexOf('.');
        let newName, newExtension;
        
        if (lastDotIndex > 0) {
          newName = renameValue.substring(0, lastDotIndex);
          newExtension = renameValue.substring(lastDotIndex);
        } else {
          newName = renameValue;
          newExtension = file.extension;
        }
        
        updatedFile = await updateFile(projectId, fileId, {
          name: newName,
          extension: newExtension
        });
      } else {
        // For directories, just update the name
        updatedFile = await updateFile(projectId, fileId, {
          name: renameValue
        });
      }
      
      // Update files state
      setFiles(files.map(f => f._id === fileId ? updatedFile : f));
      
      // Update active file if it was renamed
      if (activeFile && activeFile._id === fileId) {
        openFile(updatedFile);
      }
    } catch (error) {
      console.error('Error renaming file:', error);
    } finally {
      setIsRenaming(null);
    }
  };
  
  const handleRenameKeyDown = (e, fileId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRename(fileId);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsRenaming(null);
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
    const renderFileTree = (parentId = 'root', level = 0) => {
      const children = fileMap[parentId] || [];
      if (children.length === 0) return null;
      
      return (
        <FileList level={level}>
          {sortFiles(children).map(file => (
            <FileItem 
              key={file._id}
              isActive={activeFile && activeFile._id === file._id}
              onClick={(e) => handleFileClick(file, e)}
              onContextMenu={(e) => handleContextMenu(e, file)}
            >
              {isRenaming === file._id ? (
                <RenameInput
                  ref={renameInputRef}
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  onBlur={() => handleRename(file._id)}
                  onKeyDown={(e) => handleRenameKeyDown(e, file._id)}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <>
                  <FileIconWrapper isFolder={file.type === 'directory'}>
                    {getFileIcon(file)}
                  </FileIconWrapper>
                  <FileName>{file.name}{file.type === 'file' ? file.extension : ''}</FileName>
                </>
              )}
              
              {file.type === 'directory' && expandedFolders[file._id] && (
                renderFileTree(file._id, level + 1)
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
          title="Add new file or folder"
        >
          <FaPlus />
        </AddButton>
      </ExplorerHeader>
      
      <ExplorerContent>
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
      </ExplorerContent>
      
      {/* Context Menu */}
      {contextMenu.visible && (
        <ContextMenu style={{ top: contextMenu.y, left: contextMenu.x }}>
          {contextMenu.file?.type === 'directory' && (
            <ContextMenuItem 
              onClick={() => {
                setCurrentFolder(contextMenu.file);
                setIsNewFileModalOpen(true);
                closeContextMenu();
              }}
            >
              <FaPlus /> New File
            </ContextMenuItem>
          )}
          <ContextMenuItem onClick={() => startRenaming(contextMenu.file)}>
            <FaEdit /> Rename
          </ContextMenuItem>
          <ContextMenuItem onClick={() => handleDeleteFile(contextMenu.fileId)}>
            <FaTrash /> Delete
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
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  overflow: hidden;
`;

const ExplorerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface-light);
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: var(--color-text-primary);
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    background-color: var(--color-background);
  }
`;

const ExplorerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: ${props => props.level * 12}px;
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.isActive ? 'var(--color-surface-light)' : 'transparent'};
  border-left: 3px solid ${props => props.isActive ? 'var(--color-primary)' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--color-surface-light)' : 'var(--color-background)'};
  }
`;

const FileIconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${props => props.isFolder ? 'var(--color-warning)' : 'var(--color-text-secondary)'};
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const FileName = styled.span`
  font-size: 13px;
  color: var(--color-text-primary);
  word-break: break-all;
  flex: 1;
`;

const RenameInput = styled.input`
  flex: 1;
  padding: 2px 4px;
  font-size: 13px;
  border: 1px solid var(--color-primary);
  border-radius: 2px;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  outline: none;
`;

const ContextMenu = styled.div`
  position: fixed;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 150px;
`;

const ContextMenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-primary);
  
  svg {
    font-size: 12px;
    color: var(--color-text-secondary);
  }
  
  &:hover {
    background-color: var(--color-background);
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
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
    color: var(--color-text-secondary);
    margin-bottom: 15px;
  }
`;

const EmptyStateButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-secondary);
  font-size: 14px;
`;

export default FileExplorer;