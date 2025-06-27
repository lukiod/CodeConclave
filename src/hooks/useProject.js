import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getProject, 
  getProjectFiles, 
  updateProject, 
  deleteProject,
  shareProject
} from '../services/projectService';

/**
 * Custom hook for project operations
 * @param {string} projectId - Project ID
 * @returns {Object} Project data and operations
 */
const useProject = (projectId) => {
  const [project, setProject] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // Fetch project data
  const fetchProject = useCallback(async () => {
    if (!projectId) return;
    
    setIsLoading(true);
    try {
      const projectData = await getProject(projectId);
      setProject(projectData);
      setError(null);
    } catch (err) {
      console.error('Error fetching project:', err);
      setError(err.response?.data?.message || 'Failed to load project');
      
      // Navigate to dashboard if project not found (404)
      if (err.response?.status === 404) {
        navigate('/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  }, [projectId, navigate]);
  
  // Fetch project files
  const fetchFiles = useCallback(async () => {
    if (!projectId) return;
    
    try {
      const filesData = await getProjectFiles(projectId);
      setFiles(filesData);
    } catch (err) {
      console.error('Error fetching files:', err);
      setError(err.response?.data?.message || 'Failed to load files');
    }
  }, [projectId]);
  
  // Update project details
  const updateProjectDetails = async (data) => {
    try {
      const updatedProject = await updateProject(projectId, data);
      setProject(updatedProject);
      return updatedProject;
    } catch (err) {
      console.error('Error updating project:', err);
      setError(err.response?.data?.message || 'Failed to update project');
      throw err;
    }
  };
  
  // Delete project
  const handleDeleteProject = async () => {
    try {
      await deleteProject(projectId);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error deleting project:', err);
      setError(err.response?.data?.message || 'Failed to delete project');
      throw err;
    }
  };
  
  // Share project with another user
  const handleShareProject = async (email, role) => {
    try {
      const updatedProject = await shareProject(projectId, { email, role });
      setProject(updatedProject);
      return updatedProject;
    } catch (err) {
      console.error('Error sharing project:', err);
      setError(err.response?.data?.message || 'Failed to share project');
      throw err;
    }
  };
  
  // Fetch data on mount and when projectId changes
  useEffect(() => {
    if (projectId) {
      fetchProject();
      fetchFiles();
    }
  }, [projectId, fetchProject, fetchFiles]);
  
  return {
    project,
    files,
    isLoading,
    error,
    fetchProject,
    fetchFiles,
    updateProject: updateProjectDetails,
    deleteProject: handleDeleteProject,
    shareProject: handleShareProject,
    setFiles
  };
};

export default useProject;