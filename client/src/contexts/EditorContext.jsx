// client/src/contexts/EditorContext.jsx
import { createContext, useState, useCallback } from 'react';
import { updateFileContent } from '../services/projectService';
import { debounce } from 'lodash';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [openFiles, setOpenFiles] = useState([]);
  const [unsavedChanges, setUnsavedChanges] = useState({});
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null);
  const [saveError, setSaveError] = useState(null);

  // Debounced save function to prevent too many API calls
  const debouncedSave = useCallback(
    debounce(async (projectId, fileId, content) => {
      try {
        setSaving(true);
        setSaveError(null);
        await updateFileContent(projectId, fileId, content);
        
        // Update unsavedChanges state
        setUnsavedChanges(prev => {
          const updated = { ...prev };
          delete updated[fileId];
          return updated;
        });
        
        setSaveSuccess('File saved successfully');
        // Clear success message after 3 seconds
        setTimeout(() => setSaveSuccess(null), 3000);
      } catch (error) {
        console.error('Error saving file:', error);
        setSaveError('Failed to save file');
      } finally {
        setSaving(false);
      }
    }, 1000),
    []
  );

  // Handle file content change
  const handleFileChange = (content) => {
    if (!activeFile || !currentProject) return;
    
    // Update file in state
    const updatedFile = { ...activeFile, content };
    
    // Update in openFiles array
    setOpenFiles(openFiles.map(f => 
      f._id === activeFile._id ? updatedFile : f
    ));
    
    // Update active file
    setActiveFile(updatedFile);
    
    // Mark file as having unsaved changes
    setUnsavedChanges(prev => ({
      ...prev,
      [activeFile._id]: true
    }));
    
    // Save file content
    debouncedSave(currentProject._id, activeFile._id, content);
  };

  // Open a file
  const openFile = (file) => {
    // Check if the file is already open
    if (!openFiles.some(f => f._id === file._id)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  // Close a file
  const closeFile = (fileId) => {
    const newOpenFiles = openFiles.filter(f => f._id !== fileId);
    setOpenFiles(newOpenFiles);
    
    // If we closed the active file, activate another one if available
    if (activeFile && activeFile._id === fileId && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
    } else if (newOpenFiles.length === 0) {
      setActiveFile(null);
    }
    
    // Remove from unsaved changes
    setUnsavedChanges(prev => {
      const updated = { ...prev };
      delete updated[fileId];
      return updated;
    });
  };

  return (
    <EditorContext.Provider value={{
      currentProject,
      setCurrentProject,
      files,
      setFiles,
      activeFile,
      setActiveFile,
      openFiles,
      setOpenFiles,
      handleFileChange,
      openFile,
      closeFile,
      unsavedChanges,
      saving,
      saveSuccess,
      saveError
    }}>
      {children}
    </EditorContext.Provider>
  );
};