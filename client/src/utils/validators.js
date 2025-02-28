// client/src/utils/validators.js

/**
 * Validate an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid, false otherwise
 */
export const isValidEmail = (email) => {
    if (!email) return false;
    
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validate a password
   * @param {string} password - Password to validate
   * @returns {Object} Validation result with isValid and message
   */
  export const validatePassword = (password) => {
    if (!password) {
      return {
        isValid: false,
        message: 'Password is required'
      };
    }
    
    if (password.length < 6) {
      return {
        isValid: false,
        message: 'Password must be at least 6 characters'
      };
    }
    
    return {
      isValid: true,
      message: ''
    };
  };
  
  /**
   * Validate a username
   * @param {string} username - Username to validate
   * @returns {Object} Validation result with isValid and message
   */
  export const validateUsername = (username) => {
    if (!username) {
      return {
        isValid: false,
        message: 'Username is required'
      };
    }
    
    if (username.length < 3) {
      return {
        isValid: false,
        message: 'Username must be at least 3 characters'
      };
    }
    
    if (username.length > 20) {
      return {
        isValid: false,
        message: 'Username must be no more than 20 characters'
      };
    }
    
    // Allow only alphanumeric characters, underscores, and hyphens
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(username)) {
      return {
        isValid: false,
        message: 'Username can only contain letters, numbers, underscores, and hyphens'
      };
    }
    
    return {
      isValid: true,
      message: ''
    };
  };
  
  /**
   * Validate a project name
   * @param {string} name - Project name to validate
   * @returns {Object} Validation result with isValid and message
   */
  export const validateProjectName = (name) => {
    if (!name) {
      return {
        isValid: false,
        message: 'Project name is required'
      };
    }
    
    if (name.length < 1) {
      return {
        isValid: false,
        message: 'Project name must not be empty'
      };
    }
    
    if (name.length > 50) {
      return {
        isValid: false,
        message: 'Project name must be no more than 50 characters'
      };
    }
    
    return {
      isValid: true,
      message: ''
    };
  };
  
  /**
   * Validate a file name
   * @param {string} name - File name to validate
   * @returns {Object} Validation result with isValid and message
   */
  export const validateFileName = (name) => {
    if (!name) {
      return {
        isValid: false,
        message: 'File name is required'
      };
    }
    
    // Disallow special characters that are invalid in filenames
    const invalidChars = /[<>:"/\\|?*\x00-\x1F]/;
    if (invalidChars.test(name)) {
      return {
        isValid: false,
        message: 'File name contains invalid characters'
      };
    }
    
    // Don't allow names that start or end with spaces or periods
    if (name.startsWith(' ') || name.endsWith(' ') || name.startsWith('.') || name.endsWith('.')) {
      return {
        isValid: false,
        message: 'File name cannot start or end with spaces or periods'
      };
    }
    
    return {
      isValid: true,
      message: ''
    };
  };
  
  /**
   * Check if a string is a valid JSON
   * @param {string} str - String to validate
   * @returns {boolean} True if valid JSON, false otherwise
   */
  export const isValidJSON = (str) => {
    if (!str) return false;
    
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };