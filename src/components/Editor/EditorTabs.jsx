// client/src/components/Editor/EditorTabs.jsx
import { useContext } from 'react';
import styled from 'styled-components';
import { FaJs, FaPython, FaCode, FaMarkdown, FaHtml5, FaCss3, FaFile, FaTimes } from 'react-icons/fa';
import { EditorContext } from '../../contexts/EditorContext';

const EditorTabs = () => {
  const { 
    openFiles, 
    activeFile, 
    setActiveFile, 
    closeFile,
    unsavedChanges,
    saving
  } = useContext(EditorContext);

  if (!openFiles || openFiles.length === 0) {
    return <EmptyTabs>No files open</EmptyTabs>;
  }

  const getFileIcon = (extension) => {
    if (!extension) return <FaFile />;
    
    const ext = extension.substring(1).toLowerCase(); // Remove the leading dot
    
    switch (ext) {
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

  return (
    <TabsContainer>
      <TabsList>
        {openFiles.map(file => (
          <Tab 
            key={file._id}
            isActive={activeFile && activeFile._id === file._id}
            onClick={() => setActiveFile(file)}
          >
            <TabIcon>{getFileIcon(file.extension)}</TabIcon>
            <TabName>{file.name}{file.extension}</TabName>
            {unsavedChanges[file._id] && (
              <UnsavedIndicator>●</UnsavedIndicator>
            )}
            <CloseButton 
              onClick={(e) => {
                e.stopPropagation();
                closeFile(file._id);
              }}
            >
              <FaTimes />
            </CloseButton>
          </Tab>
        ))}
      </TabsList>
      {saving && <SavingIndicator>Saving...</SavingIndicator>}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  display: flex;
  background-color: var(--color-surface-light);
  border-bottom: 1px solid var(--color-border);
  height: 40px;
  overflow-x: auto;
  position: relative;
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const TabsList = styled.div`
  display: flex;
  height: 100%;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  min-width: 120px;
  max-width: 200px;
  background-color: ${props => props.isActive ? 'var(--color-background)' : 'var(--color-surface-light)'};
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid ${props => props.isActive ? 'var(--color-background)' : 'var(--color-border)'};
  margin-bottom: ${props => props.isActive ? '-1px' : '0'};
  cursor: pointer;
  user-select: none;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--color-background)' : 'var(--color-surface)'};
  }
`;

const TabIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: var(--color-text-secondary);
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const TabName = styled.span`
  font-size: 13px;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const UnsavedIndicator = styled.span`
  color: var(--color-primary);
  font-size: 14px;
  margin-right: 6px;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 2px;
  
  svg {
    width: 10px;
    height: 10px;
  }
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
  }
`;

const EmptyTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: var(--color-surface-light);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-tertiary);
  font-size: 13px;
`;

const SavingIndicator = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  font-size: 12px;
  background-color: var(--color-surface-light);
  padding: 2px 6px;
  border-radius: 4px;
`;

export default EditorTabs;