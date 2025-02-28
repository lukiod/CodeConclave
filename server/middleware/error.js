// server/middleware/error.js
const logger = require('../config/logger');

/**
 * Custom error class for API errors
 */
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Not Found error handler middleware
 * For routes that don't exist
 */
const notFound = (req, res, next) => {
  const error = new ApiError(`Not Found - ${req.originalUrl}`, 404);
  next(error);
};

/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';
  
  // Log the error
  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
  if (process.env.NODE_ENV === 'development') {
    logger.error(err.stack);
  }
  
  // MongoDB duplicate key error
  if (err.name === 'MongoServerError' && err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    const errors = Object.values(err.errors).map(error => error.message);
    message = errors.join(', ');
  }
  
  // Return error response
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = {
  ApiError,
  notFound,
  errorHandler
};