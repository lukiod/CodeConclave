// server/utils/helpers.js
const crypto = require('crypto');

/**
 * Generate a random string
 * @param {number} length - Length of the random string
 * @returns {string} Random string
 */
exports.generateRandomString = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};

/**
 * Format error object for consistent error responses
 * @param {Error} err - Error object
 * @param {string} defaultMessage - Default error message
 * @returns {Object} Formatted error object
 */
exports.formatError = (err, defaultMessage = 'An error occurred') => {
  const errorObj = {
    message: err.message || defaultMessage,
    statusCode: err.statusCode || 500
  };
  
  // Add stack trace in development mode
  if (process.env.NODE_ENV === 'development') {
    errorObj.stack = err.stack;
  }
  
  return errorObj;
};

/**
 * Check if a user has permission for a specific resource
 * @param {Object} user - User object
 * @param {string} userId - User ID to check
 * @param {string} role - Required role
 * @returns {boolean} True if user has permission, false otherwise
 */
exports.hasPermission = (user, userId, role = null) => {
  // User is the owner
  if (user.id === userId) {
    return true;
  }
  
  // Check role if provided
  if (role && user.role) {
    const roleHierarchy = {
      admin: 3,
      editor: 2,
      viewer: 1
    };
    
    return roleHierarchy[user.role] >= roleHierarchy[role];
  }
  
  return false;
};

/**
 * Filter sensitive information from user object
 * @param {Object} user - User object
 * @returns {Object} Filtered user object
 */
exports.filterUserData = (user) => {
  if (!user) return null;
  
  const filteredUser = { ...user };
  
  // Remove sensitive fields
  delete filteredUser.password;
  delete filteredUser.__v;
  
  return filteredUser;
};

/**
 * Parse file extension from filename
 * @param {string} filename - Filename
 * @returns {string} File extension with dot (e.g., ".js")
 */
exports.getFileExtension = (filename) => {
  if (!filename) return '';
  
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  
  return filename.substring(lastDotIndex);
};

/**
 * Determine MIME type from file extension
 * @param {string} extension - File extension
 * @returns {string} MIME type
 */
exports.getMimeType = (extension) => {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.txt': 'text/plain',
    '.md': 'text/markdown',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.ipynb': 'application/x-ipynb+json'
  };
  
  return mimeTypes[extension.toLowerCase()] || 'application/octet-stream';
};