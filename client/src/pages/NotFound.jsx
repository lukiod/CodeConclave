// client/src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <ErrorIcon>
          <FaExclamationTriangle />
        </ErrorIcon>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <Description>
          The page you're looking for doesn't exist or has been moved.
        </Description>
        <HomeLink to="/dashboard">
          <FaHome /> Go to Dashboard
        </HomeLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
`;

const NotFoundContent = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: #e53e3e;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0.5rem 0 1.5rem;
`;

const Description = styled.p`
  color: #718096;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2c5282;
    text-decoration: none;
  }
`;

export default NotFound;