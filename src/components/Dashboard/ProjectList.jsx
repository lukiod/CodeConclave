import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { getProjects, deleteProject } from '../../services/projectService';
import { AuthContext } from '../../contexts/AuthContext';
import ProjectCard from '../Shared/ProjectCard';

const ProjectList = ({ filter = 'all', searchTerm = '' }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(projectId);
        setProjects(projects.filter(project => project._id !== projectId));
      } catch (err) {
        console.error('Error deleting project:', err);
        setError('Failed to delete project. Please try again.');
      }
    }
  };

  // Filter projects based on filter and searchTerm
  const filteredProjects = projects
    .filter(project => {
      // Apply filter
      if (filter === 'owned') {
        const userId = currentUser.id || currentUser._id;
        return String(project.owner._id) === String(userId);
      } else if (filter === 'shared') {
        const userId = currentUser.id || currentUser._id;
        // Since API only returns projects user has access to,
        // shared projects are simply those where user is NOT the owner
        return String(project.owner._id) !== String(userId);
      }
      return true; // 'all' filter
    })
    .filter(project => {
      // Apply search term
      if (!searchTerm) return true;
      
      const term = searchTerm.toLowerCase();
      return (
        project.name.toLowerCase().includes(term) ||
        (project.description && project.description.toLowerCase().includes(term))
      );
    });

  if (isLoading) {
    return <Loading>Loading projects...</Loading>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (filteredProjects.length === 0) {
    return (
      <EmptyState>
        <p>
          {searchTerm
            ? 'No projects match your search criteria.'
            : filter === 'owned'
            ? 'You don\'t have any projects yet.'
            : filter === 'shared'
            ? 'No projects have been shared with you yet.'
            : 'No projects found.'}
        </p>
      </EmptyState>
    );
  }

  return (
    <ProjectGrid>
      {filteredProjects.map(project => (
        <ProjectCard
          key={project._id}
          project={project}
          onDelete={() => handleDeleteProject(project._id)}
          isOwner={String(project.owner._id) === String(currentUser.id || currentUser._id)}
        />
      ))}
    </ProjectGrid>
  );
};

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: #718096;
`;

const ErrorMessage = styled.div`
  background-color: #FFF5F5;
  color: #C53030;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-left: 4px solid #C53030;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #e2e8f0;
  color: #718096;
`;

export default ProjectList;