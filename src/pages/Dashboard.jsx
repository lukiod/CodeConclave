// client/src/pages/Dashboard.jsx
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { getProjects, createProject, deleteProject } from '../services/projectService';
import ProjectCard from '../components/Shared/ProjectCard';
import NewProjectModal from '../components/Dashboard/NewProjectModal';
import { FaPlus, FaFilter, FaSearch } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'owned', 'shared'
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetchProjects();
  }, []);

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

  const handleCreateProject = async (projectData) => {
    try {
      const newProject = await createProject(projectData);
      setProjects([...projects, newProject]);
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create project. Please try again.');
    }
  };

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

  // Filter and search projects
  const filteredProjects = projects
    .filter(project => {
      // Filter by type
      if (filterType === 'owned') {
        return project.owner._id === currentUser.id;
      } else if (filterType === 'shared') {
        return project.collaborators.some(c => c.user._id === currentUser.id);
      }
      return true; // 'all' filter type
    })
    .filter(project => {
      // Search by name or description
      return (
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <p>Loading projects...</p>
      </LoadingContainer>
    );
  }

  return (
    <DashboardContainer>
      <Header>
        <Title>My Projects</Title>
        <Controls>
          <SearchBar>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>
          <FilterGroup>
            <FilterLabel>
              <FaFilter />
              <span>Filter:</span>
            </FilterLabel>
            <FilterSelect value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Projects</option>
              <option value="owned">My Projects</option>
              <option value="shared">Shared With Me</option>
            </FilterSelect>
          </FilterGroup>
          <NewProjectButton onClick={() => setIsModalOpen(true)}>
            <FaPlus />
            <span>New Project</span>
          </NewProjectButton>
        </Controls>
      </Header>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {filteredProjects.length === 0 ? (
        <EmptyState>
          <h2>No projects found</h2>
          {searchTerm || filterType !== 'all' ? (
            <p>Try changing your search or filter criteria.</p>
          ) : (
            <>
              <p>Create your first project to get started!</p>
              <EmptyStateButton onClick={() => setIsModalOpen(true)}>
                <FaPlus />
                <span>Create Project</span>
              </EmptyStateButton>
            </>
          )}
        </EmptyState>
      ) : (
        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              project={project}
              onDelete={() => handleDeleteProject(project._id)}
              isOwner={project.owner._id === currentUser.id}
            />
          ))}
        </ProjectsGrid>
      )}

      <NewProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #2d3748;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0 10px;
  
  @media (min-width: 768px) {
    width: 250px;
  }
`;

const SearchIcon = styled.div`
  color: #a0aec0;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  padding: 8px 10px;
  flex-grow: 1;
  outline: none;
  font-size: 14px;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #4a5568;
  font-size: 14px;
  
  svg {
    font-size: 12px;
  }
`;

const FilterSelect = styled.select`
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: white;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  
  &:focus {
    border-color: #3182ce;
  }
`;

const NewProjectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2c5282;
  }
  
  svg {
    font-size: 12px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #e2e8f0;
  
  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #2d3748;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 20px;
    color: #718096;
  }
`;

const EmptyStateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 auto;
  
  &:hover {
    background-color: #2c5282;
  }
`;

const ErrorMessage = styled.div`
  background-color: #FFF5F5;
  color: #C53030;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-left: 4px solid #C53030;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #718096;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Dashboard;