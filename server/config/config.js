// server/config/config.js
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

module.exports = {
  // Server configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // MongoDB configuration
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/code-editor',
  
  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-jwt-key',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '7d',
  
  // CORS configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  
  // File storage configuration
  MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 5242880, // 5MB
  
  // Rate limiting
  RATE_LIMIT: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  
  // App info
  APP_NAME: 'Code Editor',
  APP_VERSION: '1.0.0'
};