// server/services/codeExecutionService.js
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
const logger = require('../config/logger');

// Store execution contexts
const executionContexts = new Map();

// Max execution time in milliseconds
const MAX_EXECUTION_TIME = 30000; // 30 seconds

/**
 * Create a temporary execution environment
 * @param {string} language - Programming language
 * @returns {Promise<string>} - Context ID
 */
exports.createExecutionContext = async (language) => {
  try {
    // Generate a unique ID for this execution context
    const contextId = uuidv4();
    
    // Create a temporary directory
    const tempDir = path.join(os.tmpdir(), `code-exec-${contextId}`);
    await fs.mkdir(tempDir, { recursive: true });
    
    // Store context information
    executionContexts.set(contextId, {
      id: contextId,
      language,
      tempDir,
      createdAt: new Date(),
      files: []
    });
    
    return contextId;
  } catch (error) {
    logger.error('Error creating execution context:', error);
    throw new Error('Failed to create execution environment');
  }
};

/**
 * Execute code in the specified language
 * @param {string} contextId - Execution context ID
 * @param {string} code - Code to execute
 * @param {Object} options - Additional options
 * @returns {Promise<Object>} - Execution result
 */
exports.executeCode = async (contextId, code, options = {}) => {
  const context = executionContexts.get(contextId);
  
  if (!context) {
    throw new Error('Invalid execution context');
  }
  
  try {
    // Write code to a temporary file
    const filename = `code_${Date.now()}${getFileExtension(context.language)}`;
    const filePath = path.join(context.tempDir, filename);
    
    await fs.writeFile(filePath, code);
    context.files.push(filePath);
    
    // Execute based on language
    switch (context.language.toLowerCase()) {
      case 'javascript':
      case 'js':
        return await executeJavaScript(filePath, options);
      case 'python':
      case 'py':
        return await executePython(filePath, options);
      // Add more language handlers as needed
      default:
        throw new Error(`Unsupported language: ${context.language}`);
    }
  } catch (error) {
    logger.error(`Error executing ${context.language} code:`, error);
    return {
      success: false,
      output: '',
      error: error.message || 'Execution failed'
    };
  }
};

/**
 * Execute JavaScript code
 * @param {string} filePath - Path to JS file
 * @param {Object} options - Execution options
 * @returns {Promise<Object>} - Execution result
 */
async function executeJavaScript(filePath, options) {
  return new Promise((resolve) => {
    const process = spawn('node', [filePath]);
    
    let stdout = '';
    let stderr = '';
    let timeout = null;
    
    // Set execution timeout
    timeout = setTimeout(() => {
      process.kill();
      resolve({
        success: false,
        output: stdout,
        error: 'Execution timed out'
      });
    }, MAX_EXECUTION_TIME);
    
    // Collect stdout
    process.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    // Collect stderr
    process.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    // Handle process completion
    process.on('close', (code) => {
      clearTimeout(timeout);
      
      resolve({
        success: code === 0,
        output: stdout,
        error: stderr,
        exitCode: code
      });
    });
    
    // Handle process errors
    process.on('error', (err) => {
      clearTimeout(timeout);
      
      resolve({
        success: false,
        output: stdout,
        error: `Failed to start process: ${err.message}`,
        exitCode: 1
      });
    });
  });
}

/**
 * Execute Python code
 * @param {string} filePath - Path to Python file
 * @param {Object} options - Execution options
 * @returns {Promise<Object>} - Execution result
 */
async function executePython(filePath, options) {
  return new Promise((resolve) => {
    const process = spawn('python', [filePath]);
    
    let stdout = '';
    let stderr = '';
    let timeout = null;
    
    // Set execution timeout
    timeout = setTimeout(() => {
      process.kill();
      resolve({
        success: false,
        output: stdout,
        error: 'Execution timed out'
      });
    }, MAX_EXECUTION_TIME);
    
    // Collect stdout
    process.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    // Collect stderr
    process.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    // Handle process completion
    process.on('close', (code) => {
      clearTimeout(timeout);
      
      resolve({
        success: code === 0,
        output: stdout,
        error: stderr,
        exitCode: code
      });
    });
    
    // Handle process errors
    process.on('error', (err) => {
      clearTimeout(timeout);
      
      resolve({
        success: false,
        output: stdout,
        error: `Failed to start process: ${err.message}`,
        exitCode: 1
      });
    });
  });
}

/**
 * Clean up an execution context
 * @param {string} contextId - Execution context ID
 * @returns {Promise<boolean>} - Success status
 */
exports.destroyExecutionContext = async (contextId) => {
  const context = executionContexts.get(contextId);
  
  if (!context) {
    return false;
  }
  
  try {
    // Delete temporary directory and files
    await fs.rm(context.tempDir, { recursive: true, force: true });
    
    // Remove from contexts map
    executionContexts.delete(contextId);
    
    return true;
  } catch (error) {
    logger.error('Error destroying execution context:', error);
    return false;
  }
};

/**
 * Get file extension for a language
 * @param {string} language - Programming language
 * @returns {string} - File extension
 */
function getFileExtension(language) {
  const extensions = {
    javascript: '.js',
    js: '.js',
    python: '.py',
    py: '.py',
    java: '.java',
    c: '.c',
    cpp: '.cpp',
    csharp: '.cs',
    cs: '.cs',
    go: '.go',
    ruby: '.rb',
    php: '.php'
  };
  
  return extensions[language.toLowerCase()] || '.txt';
}

/**
 * Clean up old execution contexts
 * Automatically run periodically
 */
function cleanupOldContexts() {
  const now = new Date();
  const maxAge = 3600000; // 1 hour
  
  for (const [contextId, context] of executionContexts.entries()) {
    const age = now - context.createdAt;
    
    if (age > maxAge) {
      exports.destroyExecutionContext(contextId)
        .catch(err => logger.error('Error in cleanup:', err));
    }
  }
}

// Run cleanup every hour
setInterval(cleanupOldContexts, 3600000);