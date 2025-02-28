// client/src/__tests__/App.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import App from '../App';

// Mock the context values
const mockAuthContext = {
  currentUser: null,
  loading: false,
  error: null,
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  setError: vi.fn()
};

// Mock component to avoid actual implementation
vi.mock('../components/Shared/Layout', () => ({
  default: () => <div data-testid="mock-layout">Layout Component</div>
}));

describe('App component', () => {
  it('renders the login page when not authenticated and loading is false', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContext}>
          <App />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    
    // App should redirect to login when not authenticated
    expect(window.location.pathname).toBe('/login');
  });
  
  it('renders loading spinner when loading is true', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ ...mockAuthContext, loading: true }}>
          <App />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    
    // Should show loading text
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});