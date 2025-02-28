// server/utils/validators.js

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid, false otherwise
 */
exports.isValidEmail = (email) => {
    if (!email) return false;
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validate password requirements
   * @param {string} password - Password to validate
   * @returns {Object} Validation result with isValid and message
   */
  exports.validatePassword = (password) => {
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
   * Validate username requirements
   * @param {string} username - Username to validate
   * @returns {Object} Validation result with isValid and message
   */
  exports.validateUsername = (username) => {
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
   * Validate project name requirements
   * @param {string} name - Project name to validate
   * @returns {Object} Validation result with isValid and message
   */
  exports.validateProjectName = (name) => {
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
   * Validate file name requirements
   * @param {string} name - File name to validate
   * @returns {Object} Validation result with isValid and message
   */
  exports.validateFileName = (name) => {
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
   * Validate role value
   * @param {string} role - Role to validate
   * @returns {boolean} True if valid, false otherwise
   */
  exports.isValidRole = (role) => {
    const validRoles = ['viewer', 'editor', 'admin'];
    return validRoles.includes(role);
  };
  
  /**
   * Validate MongoDB ObjectId
   * @param {string} id - ID to validate
   * @returns {boolean} True if valid, false otherwise
   */
  exports.isValidObjectId = (id) => {
    // Mongoose ObjectId is a 24 character hex string
    return id && /^[0-9a-fA-F]{24}$/.test(id);
  };
  
  /**
   * Validate JSON structure
   * @param {string} str - JSON string to validate
   * @returns {boolean} True if valid JSON, false otherwise
   */
  exports.isValidJSON = (str) => {
    if (!str) return false;
    
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };