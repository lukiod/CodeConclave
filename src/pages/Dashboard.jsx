import { useState, useEffect, useContext } from 'react'; 
import styled from 'styled-components';
import { getProjects, createProject, deleteProject, updateProject } from '../services/projectService';
import ProjectCard from '../components/Shared/ProjectCard';
import NewProjectModal from '../components/Dashboard/NewProjectModal';
import ShareModal from '../components/Editor/ShareModal';
import { LoadingWithMessage, ProjectCardSkeleton } from '../components/Shared/LoadingStates';
import { FaPlus, FaFilter, FaSearch } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
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
      setIsNewProjectModalOpen(false);
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create project. Please try again.');
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects(projects.filter(project => project._id !== projectId));
    } catch (err) {
      console.error('Error deleting project:', err);
      setError('Failed to delete project. Please try again.');
    }
  };
  
  const handleRenameProject = async (projectId, newName) => {
    try {
      const project = projects.find(p => p._id === projectId);
      if (!project) return;
      
      const updatedProject = await updateProject(projectId, { name: newName });
      
      // Update projects state
      setProjects(projects.map(p => 
        p._id === projectId ? updatedProject : p
      ));
    } catch (err) {
      console.error('Error renaming project:', err);
      setError('Failed to rename project. Please try again.');
    }
  };
  
  const handleShareProject = (project) => {
    setActiveProject(project);
    setIsShareModalOpen(true);
  };

  // Filter and search projects
  const filteredProjects = projects
    .filter(project => {
      // Filter by type
      if (filterType === 'owned') {
        const userId = currentUser.id || currentUser._id;
        return String(project.owner._id) === String(userId);
      } else if (filterType === 'shared') {
        const userId = currentUser.id || currentUser._id;
        // Since API only returns projects user has access to,
        // shared projects are simply those where user is NOT the owner
        return String(project.owner._id) !== String(userId);
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
                disabled
              />
            </SearchBar>
            <FilterGroup>
              <FilterLabel>
                <FaFilter />
                <span>Filter:</span>
              </FilterLabel>
              <FilterSelect value={filterType} onChange={(e) => setFilterType(e.target.value)} disabled>
                <option value="all">All Projects</option>
                <option value="owned">My Projects</option>
                <option value="shared">Shared With Me</option>
              </FilterSelect>
            </FilterGroup>
            <NewProjectButton disabled>
              <FaPlus />
              <span>New Project</span>
            </NewProjectButton>
          </Controls>
        </Header>

        <ProjectsGrid>
          {Array(6).fill(0).map((_, i) => <ProjectCardSkeleton key={i} />)}
        </ProjectsGrid>
      </DashboardContainer>
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
          <NewProjectButton onClick={() => setIsNewProjectModalOpen(true)}>
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
              <EmptyStateButton onClick={() => setIsNewProjectModalOpen(true)}>
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
              onDelete={handleDeleteProject}
              onRename={handleRenameProject}
              onShare={handleShareProject}
              isOwner={String(project.owner._id) === String(currentUser.id || currentUser._id)}
            />
          ))}
        </ProjectsGrid>
      )}

      {/* Modals */}
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onCreate={handleCreateProject}
      />
      
      {isShareModalOpen && activeProject && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => {
            setIsShareModalOpen(false);
            setActiveProject(null);
          }}
          project={activeProject}
          projectId={activeProject._id}
        />
      )}
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
  color: var(--color-text-primary);
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
  height: 36px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const SearchIcon = styled.div`
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  margin-right: 8px;
  flex: 0 0 auto;
`;

const SearchInput = styled.input`
  border: none;
  padding: 0;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: var(--color-text-primary);
  flex: 1 1 auto;
  box-sizing: border-box;

  &::placeholder {
    color: var(--color-text-tertiary);
    opacity: 0.9;
  }

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
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
  color: var(--color-text-secondary);
  font-size: 14px;
  
  svg {
    font-size: 12px;
  }
`;

const FilterSelect = styled.select`
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 8px 12px;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-size: 14px;
  outline: none;
  cursor: pointer;
  
  &:focus {
    border-color: var(--color-primary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const NewProjectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: var(--color-border);
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
  background-color: var(--color-surface);
  border-radius: 8px;
  border: 1px dashed var(--color-border);
  
  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: var(--color-text-primary);
    font-weight: 600;
  }
  
  p {
    margin-bottom: 20px;
    color: var(--color-text-secondary);
  }
`;

const EmptyStateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 auto;
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const ErrorMessage = styled.div.attrs({
  role: 'alert',
  'aria-live': 'polite'
})`
  background-color: #FFF5F5;
  color: #C53030;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-left: 4px solid #C53030;
`;
export default Dashboard;