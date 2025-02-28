// client/src/pages/SharedProjects.jsx
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { getProjects } from '../services/projectService';
import { AuthContext } from '../contexts/AuthContext';
import ProjectCard from '../components/Shared/ProjectCard';

const SharedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const data = await getProjects();
        // Filter only projects shared with the current user
        const sharedProjects = data.filter(project => 
          project.owner._id !== currentUser.id && 
          (project.collaborators.some(c => c.user._id === currentUser.id) || project.isPublic)
        );
        setProjects(sharedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching shared projects:', err);
        setError('Failed to load shared projects. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [currentUser.id]);

  // Filter projects by search term
  const filteredProjects = projects.filter(project => {
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <p>Loading shared projects...</p>
      </LoadingContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>Shared Projects</Title>
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
        </Controls>
      </Header>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {filteredProjects.length === 0 ? (
        <EmptyState>
          <h2>No shared projects found</h2>
          <p>
            {searchTerm 
              ? 'Try changing your search criteria.' 
              : 'Projects shared with you will appear here.'}
          </p>
        </EmptyState>
      ) : (
        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              project={project}
              isOwner={false}
            />
          ))}
        </ProjectsGrid>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
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
    margin-bottom: 0;
    color: #718096;
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

export default SharedProjects;