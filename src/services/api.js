import axios from 'axios';
import { API_URL } from '../config/constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration/invalid authentication
    if (error.response?.status === 401) {
      const errorMessage = error.response?.data?.message || '';
      const isPasswordError = errorMessage.includes('Current password is incorrect') ||
                             errorMessage.includes('password') ||
                             error.config?.url?.includes('/change-password');
      
      // Only redirect for actual authentication issues, not password validation
      if (!isPasswordError) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;