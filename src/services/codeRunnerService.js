import api from './api';

/**
 * Execute code and get the result
 * @param {string} code - The code to execute
 * @param {string} language - The programming language
 * @param {Object} options - Additional options for code execution
 * @returns {Promise<Object>} Response with execution results
 */
export const executeCode = async (code, language, options = {}) => {
  try {
    const response = await api.post('/execute', {
      code,
      language,
      options
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with an error status
      throw new Error(error.response.data.message || 'Execution failed');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from execution server');
    } else {
      // Something happened in setting up the request
      throw new Error('Error preparing code execution');
    }
  }
};

/**
 * Get supported languages from the execution service
 * @returns {Promise<Array>} List of supported languages
 */
export const getSupportedLanguages = async () => {
  try {
    const response = await api.get('/execute/languages');
    return response.data;
  } catch (error) {
    console.error('Error fetching supported languages:', error);
    return [];
  }
};

/**
 * Execute code for Jupyter notebook cell
 * @param {Object} cell - The notebook cell to execute
 * @param {string} kernelId - The kernel ID (if using persistent kernel)
 * @returns {Promise<Object>} Cell execution results
 */
export const executeNotebookCell = async (cell, kernelId = null) => {
  try {
    const response = await api.post('/execute/notebook', {
      cell,
      kernelId
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Cell execution failed');
    } else if (error.request) {
      throw new Error('No response from execution server');
    } else {
      throw new Error('Error preparing cell execution');
    }
  }
};

// For local/sandboxed execution without a backend
export const executeSandboxedCode = async (code, language) => {
  return new Promise((resolve) => {
    // Get language from file extension if necessary
    const normalizedLanguage = language.toLowerCase().replace('.', '');
    
    // Only JavaScript is supported in the sandbox/browser
    if (!['javascript', 'js', 'jsx'].includes(normalizedLanguage)) {
      resolve({
        success: false,
        output: 'Sandbox execution only supports JavaScript',
        error: 'Language not supported in client-side execution',
        executionTime: 0
      });
      return;
    }

    try {
      const startTime = performance.now();
      const sandboxOutput = [];
      
      // Create a safe-ish sandbox
      const sandbox = {
        console: {
          log: (...args) => {
            sandboxOutput.push(args.map(arg => {
              if (typeof arg === 'object') {
                try {
                  return JSON.stringify(arg, null, 2);
                } catch {
                  return String(arg);
                }
              }
              return String(arg);
            }).join(' '));
          },
          error: (...args) => {
            sandboxOutput.push('ERROR: ' + args.map(String).join(' '));
          },
          warn: (...args) => {
            sandboxOutput.push('WARNING: ' + args.map(String).join(' '));
          }
        },
        setTimeout: (fn, delay) => setTimeout(fn, Math.min(delay, 5000)),
        clearTimeout,
        Math,
        Date,
        Object,
        Array,
        String,
        Number,
        RegExp,
        Map,
        Set,
        JSON,
        Promise,
        Error,
        undefined,
        NaN,
        Infinity
      };

      // Execute the code with the sandboxed console
      const executeCode = new Function(...Object.keys(sandbox), code);
      executeCode(...Object.values(sandbox));
      
      const endTime = performance.now();
      const executionTime = Math.round(endTime - startTime);

      resolve({
        success: true,
        output: sandboxOutput.join('\n'),
        error: null,
        executionTime
      });
    } catch (error) {
      resolve({
        success: false,
        output: null,
        error: error.toString(),
        executionTime: 0
      });
    }
  });
};