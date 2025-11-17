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
import GettingStarted from './pages/GettingStarted';

// Components
import ProtectedRoute from './components/Shared/ProtectedRoute';
import Layout from './components/Shared/Layout';

const App = () => {
  const { loading, currentUser } = useContext(AuthContext);
  const { isDarkMode } = useTheme();

  if (loading) {
    return (
      <LoadingScreen $isDarkMode={isDarkMode}>
        <Spinner />
        <LoadingText>Initializing CodeConclave</LoadingText>
        <LoadingSubtext>Almost there...</LoadingSubtext>
      </LoadingScreen>
    );
  }

  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={currentUser ? <Navigate to="/getting-started" replace /> : <LandingPage />}
      />

      {/* Home Page */}
      <Route
        path="/home"
        element={currentUser ? <Navigate to="/getting-started" replace /> : <HomePage />}
      />

      {/* Password Reset */}
      <Route
        path="/reset-password"
        element={currentUser ? <Navigate to="/getting-started" replace /> : <ResetPassword />}
      />

      {/* Auth Routes */}
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/getting-started" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={currentUser ? <Navigate to="/getting-started" replace /> : <Register />}
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="projects/:projectId" element={<ProjectEditor />} />
        <Route path="shared" element={<SharedProjects />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

// Loading styles
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
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 20px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
`;

const LoadingSubtext = styled.p`
  font-size: 1rem;
  color: #718096;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 0.5; }
  }
`;

export default App;
