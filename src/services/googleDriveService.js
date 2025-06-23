// client/src/services/googleDriveService.js
import api from './api';

export const googleDriveService = {
  // Get Google Drive authorization URL
  getAuthUrl: async () => {
    try {
      const response = await api.get('/settings/google/auth-url');
      return response.data.authUrl;
    } catch (error) {
      throw new Error('Failed to get Google Drive authorization URL');
    }
  },

  // Save Google Drive tokens
  saveTokens: async (accessToken, refreshToken, expiryDate) => {
    try {
      const response = await api.post('/settings/google/save-tokens', {
        accessToken,
        refreshToken,
        expiryDate
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to save Google Drive tokens');
    }
  },

  // Get Google Drive connection status
  getConnectionStatus: async () => {
    try {
      const response = await api.get('/settings/google/status');
      return response.data;
    } catch (error) {
      throw new Error('Failed to get Google Drive connection status');
    }
  },

  // Disconnect Google Drive
  disconnect: async () => {
    try {
      const response = await api.post('/settings/google/disconnect');
      return response.data;
    } catch (error) {
      throw new Error('Failed to disconnect Google Drive');
    }
  },

  // Upload file to Google Drive
  uploadFile: async (fileName, fileContent, mimeType = 'text/plain') => {
    try {
      const response = await api.post('/settings/google/upload', {
        fileName,
        fileContent,
        mimeType
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to upload file to Google Drive');
    }
  },

  // List files from Google Drive
  listFiles: async (pageSize = 10) => {
    try {
      const response = await api.get(`/settings/google/files?pageSize=${pageSize}`);
      return response.data.files;
    } catch (error) {
      throw new Error('Failed to list files from Google Drive');
    }
  },

  // Download file from Google Drive
  downloadFile: async (fileId) => {
    try {
      const response = await api.get(`/settings/google/files/${fileId}`);
      return response.data.fileContent;
    } catch (error) {
      throw new Error('Failed to download file from Google Drive');
    }
  }
}; 