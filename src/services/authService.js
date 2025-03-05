// client/src/services/authService.js
import api from './api';

/**
 * Register a new user
 * @param {Object} userData - User data {username, email, password}
 * @returns {Promise<Object>} Response with token and user data
 */
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

/**
 * Login a user
 * @param {Object} credentials - Login credentials {email, password}
 * @returns {Promise<Object>} Response with token and user data
 */
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

/**
 * Get current user data
 * @returns {Promise<Object>} User data
 */
export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

/**
 * Store JWT token in local storage
 * @param {string} token - JWT token
 */
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Remove JWT token from local storage
 */
export const removeToken = () => {
  localStorage.removeItem('token');
};

/**
 * Get JWT token from local storage
 * @returns {string|null} JWT token or null if not found
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Check if user is authenticated (has token)
 * @returns {boolean} True if authenticated, false otherwise
 */
export const isAuthenticated = () => {
  return getToken() !== null;
};

/**
 * Check if token is expired
 * @param {string} token - JWT token
 * @returns {boolean} True if expired, false otherwise
 */
export const isTokenExpired = (token) => {
  if (!token) return true;
  
  try {
    // Parse token payload
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(window.atob(base64));
    
    // Check expiration
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch (error) {
    console.error('Error checking token expiration:', error);
    return true;
  }
};

/**
 * Configure API with authentication token
 * @param {string} token - JWT token
 */
export const configureAuthHeader = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

/**
 * Request a password reset email
 * @param {string} email - User's email address
 * @returns {Promise<Object>} Response data
 */
export const requestPasswordReset = async (email) => {
  return api.post('/password-reset/request', { email });
};

/**
 * Verify OTP
 * @param {string} token - Reset token
 * @param {string} otp - OTP code
 * @returns {Promise<Object>} Response data
 */
export const verifyOTP = async (token, otp) => {
  const response = await api.post('/password-reset/verify-token-otp', { token, otp });
  return response.data;
};

/**
 * Reset password
 * @param {string} token - Reset token
 * @param {string} password - New password
 * @returns {Promise<Object>} Response data
 */
export const resetPassword = async (token, password) => {
  const response = await api.post('/password-reset/reset', { token, password });
  return response.data;
};