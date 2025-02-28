// client/src/contexts/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { API_URL } from '../config/constants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configure axios
  axios.defaults.baseURL = API_URL;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // Load user from token on mount
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          // Check if token is expired
          const decoded = jwtDecode(token);
          const currentTime = Date.now() / 1000;
          
          if (decoded.exp < currentTime) {
            // Token expired, logout
            logout();
            setLoading(false);
            return;
          }
          
          // Token valid, get user data
          const res = await axios.get('/auth/me');
          setCurrentUser(res.data);
        } catch (err) {
          console.error('Failed to load user:', err);
          logout();
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  // Register user
  const register = async (userData) => {
    setError(null);
    try {
      const res = await axios.post('/auth/register', userData);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setCurrentUser(res.data.user);
      return res.data;
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Registration failed. Please try again.'
      );
      throw err;
    }
  };

  // Login user
  const login = async (userData) => {
    setError(null);
    try {
      const res = await axios.post('/auth/login', userData);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setCurrentUser(res.data.user);
      return res.data;
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Login failed. Please check your credentials.'
      );
      throw err;
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCurrentUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  const value = {
    currentUser,
    token,
    loading,
    error,
    register,
    login,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};