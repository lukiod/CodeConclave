// src/App.jsx
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';

// Pages
import LandingPage from './pages/Landingpage';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProjectEditor from './pages/ProjectEditor';
import SharedProjects from './pages/SharedProjects';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import ResetPassword from './pages/ResetPassword';

// Components
import ProtectedRoute from './components/Shared/ProtectedRoute';
import Layout from './components/Shared/Layout';
import ErrorBoundary from './components/Shared/ErrorBoundary';
import { LoadingSpinner } from './components/Shared/LoadingStates';

const App = () => {
  const { loading, currentUser } = useContext(AuthContext);
  const { isDarkMode } = useTheme();

  if (loading) {
    return (
      <LoadingScreen $isDarkMode={isDarkMode}>
        <LoadingSpinner size="50px" />
        <LoadingText $isDarkMode={isDarkMode}>Initializing CodeConclave</LoadingText>
        <LoadingSubtext $isDarkMode={isDarkMode}>Almost there...</LoadingSubtext>
      </LoadingScreen>
    );
  }

  return (
    <ErrorBoundary fallbackMessage="The application encountered an unexpected error. Please refresh the page to continue.">
      <Routes>
        {/* Landing Page - The initial animated page */}
        <Route path="/" element={
          currentUser ? <Navigate to="/dashboard" replace /> : <LandingPage />
        } />
        
        {/* Home Page - With Login/Register tabs */}
        <Route path="/home" element={
          currentUser ? <Navigate to="/dashboard" replace /> : (
            <ErrorBoundary fallbackMessage="Error loading authentication page.">
              <HomePage />
            </ErrorBoundary>
          )
        } />

        {/* Password Reset */}
        <Route path="/reset-password" element={
          currentUser ? <Navigate to="/dashboard" replace /> : (
            <ErrorBoundary fallbackMessage="Error loading password reset page.">
              <ResetPassword />
            </ErrorBoundary>
          )
        } />

        {/* Auth Routes (for direct access) */}
        <Route path="/login" element={
          currentUser ? <Navigate to="/dashboard" replace /> : (
            <ErrorBoundary fallbackMessage="Error loading login page.">
              <Login />
            </ErrorBoundary>
          )
        } />
        <Route path="/register" element={
          currentUser ? <Navigate to="/dashboard" replace /> : (
            <ErrorBoundary fallbackMessage="Error loading registration page.">
              <Register />
            </ErrorBoundary>
          )
        } />
        
        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <ErrorBoundary fallbackMessage="Error loading main application layout.">
              <Layout />
            </ErrorBoundary>
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={
            <ErrorBoundary fallbackMessage="Error loading dashboard. Please try refreshing the page.">
              <Dashboard />
            </ErrorBoundary>
          } />
          <Route path="projects/:projectId" element={
            <ErrorBoundary fallbackMessage="Error loading project editor. Please try reopening the project.">
              <ProjectEditor />
            </ErrorBoundary>
          } />
          <Route path="shared" element={
            <ErrorBoundary fallbackMessage="Error loading shared projects.">
              <SharedProjects />
            </ErrorBoundary>
          } />
          <Route path="settings" element={
            <ErrorBoundary fallbackMessage="Error loading settings page.">
              <Settings />
            </ErrorBoundary>
          } />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.$isDarkMode 
    ? 'linear-gradient(to bottom, #0f172a, #051933)'
    : 'linear-gradient(to bottom, #f8fafc, #e2e8f0)'
  };
  color: ${props => props.$isDarkMode ? 'white' : '#1a202c'};
  transition: background 0.3s ease, color 0.3s ease;
`;

const LoadingText = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? 'white' : '#2d3748'};
  transition: color 0.3s ease;
`;

const LoadingSubtext = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.8)' : '#718096'};
  animation: pulse 2s ease-in-out infinite;
  transition: color 0.3s ease;
  
  @keyframes pulse {
    0%, 100% { 
      opacity: ${props => props.$isDarkMode ? '0.8' : '0.9'}; 
    }
    50% { 
      opacity: ${props => props.$isDarkMode ? '0.4' : '0.5'}; 
    }
  }
`;

export default App;