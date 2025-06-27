import { useCallback } from 'react';
import { 
  createFile, 
  updateFileContent, 
  deleteFile, 
  getFileContent 
} from '../services/projectService';

/**
 * Custom hook for file system operations
 * @param {string} projectId - Project ID
 * @param {Array} files - Files array
 * @param {Function} setFiles - Function to update files state
 * @returns {Object} File system operations
 */
const useFileSystem = (projectId, files, setFiles) => {
  
  // Create a new file or directory
  const createNewFile = useCallback(async (fileData) => {
    try {
      const newFile = await createFile(projectId, fileData);
      
      // Add the new file to the files array
      setFiles([...files, newFile]);
      
      return newFile;
    } catch (error) {
      console.error('Error creating file:', error);
      throw error;
    }
  }, [projectId, files, setFiles]);
  
  // Update file content
  const updateFile = useCallback(async (fileId, content) => {
    try {
      const updatedFile = await updateFileContent(projectId, fileId, content);
      
      // Update the file in the files array
      setFiles(files.map(file => 
        file._id === fileId ? updatedFile : file
      ));
      
      return updatedFile;
    } catch (error) {
      console.error('Error updating file:', error);
      throw error;
    }
  }, [projectId, files, setFiles]);
  
  // Delete a file or directory
  const removeFile = useCallback(async (fileId) => {
    try {
      await deleteFile(projectId, fileId);
      
      // Remove the file from the files array
      setFiles(files.filter(file => file._id !== fileId));
      
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }, [projectId, files, setFiles]);
  
  // Get file content
  const fetchFileContent = useCallback(async (fileId) => {
    try {
      const file = await getFileContent(projectId, fileId);
      return file;
    } catch (error) {
      console.error('Error fetching file content:', error);
      throw error;
    }
  }, [projectId]);
  
  // Build file tree structure
  const buildFileTree = useCallback(() => {
    const fileMap = {};
    const rootFiles = [];
    
    // Create a map of all files by ID
    files.forEach(file => {
      fileMap[file._id] = { ...file, children: [] };
    });
    
    // Organize files into a tree structure
    files.forEach(file => {
      if (file.parentId && fileMap[file.parentId]) {
        fileMap[file.parentId].children.push(fileMap[file._id]);
      } else {
        rootFiles.push(fileMap[file._id]);
      }
    });
    
    return rootFiles;
  }, [files]);
  
  // Find file by ID
  const findFileById = useCallback((fileId) => {
    return files.find(file => file._id === fileId) || null;
  }, [files]);
  
  // Get file path (for breadcrumbs, etc.)
  const getFilePath = useCallback((fileId) => {
    const path = [];
    let currentFile = findFileById(fileId);
    
    if (!currentFile) return path;
    
    path.unshift(currentFile);
    
    while (currentFile && currentFile.parentId) {
      currentFile = findFileById(currentFile.parentId);
      if (currentFile) path.unshift(currentFile);
    }
    
    return path;
  }, [findFileById]);
  
  return {
    createFile: createNewFile,
    updateFile,
    deleteFile: removeFile,
    getFileContent: fetchFileContent,
    buildFileTree,
    findFileById,
    getFilePath
  };
};

export default useFileSystem;