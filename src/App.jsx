// client/src/App.jsx
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import styled from 'styled-components';

// Pages
import LandingPage from './pages/Landingpage';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProjectEditor from './pages/ProjectEditor';
import SharedProjects from './pages/SharedProjects';
import NotFound from './pages/NotFound';

// Components
import ProtectedRoute from './components/Shared/ProtectedRoute';
import Layout from './components/Shared/Layout';
import ResetPassword from './components/Auth/ResetPassword';
const App = () => {
  const { loading, currentUser } = useContext(AuthContext);

  if (loading) {
    return (
      <LoadingScreen>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </LoadingScreen>
    );
  }

  return (
    <Routes>
      {/* Landing Page - The initial animated page */}
      <Route path="/" element={
        currentUser ? <Navigate to="/dashboard" replace /> : <LandingPage />
      } />
      
      {/* Home Page - With Login/Register tabs */}
      <Route path="/home" element={
        currentUser ? <Navigate to="/dashboard" replace /> : <HomePage />
      } />
      <Route path="/reset-password" element={
        currentUser ? <Navigate to="/dashboard" replace /> : <ResetPassword />
      } />
      {/* Auth Routes (for direct access) */}
      <Route path="/login" element={
        currentUser ? <Navigate to="/dashboard" replace /> : <Login />
      } />
      <Route path="/register" element={
        currentUser ? <Navigate to="/dashboard" replace /> : <Register />
      } />
      
      {/* Protected Routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects/:projectId" element={<ProjectEditor />} />
        <Route path="shared" element={<SharedProjects />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 20px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
`;

export default App;