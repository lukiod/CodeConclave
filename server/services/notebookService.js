// server/services/notebookService.js
const { File } = require('../models/Project');
const logger = require('../config/logger');

/**
 * Parse and validate an .ipynb file content
 * @param {string} content - JSON string content
 * @returns {Object} - Parsed notebook or empty notebook structure
 */
exports.parseNotebook = (content) => {
  try {
    // If content is empty, return a basic notebook structure
    if (!content) {
      return createEmptyNotebook();
    }
    
    // Parse the JSON
    const notebook = JSON.parse(content);
    
    // Validate basic notebook structure
    if (!notebook.cells || !Array.isArray(notebook.cells)) {
      throw new Error('Invalid notebook format: missing cells array');
    }
    
    if (!notebook.metadata) {
      notebook.metadata = {};
    }
    
    return notebook;
  } catch (error) {
    logger.error('Error parsing notebook:', error);
    return createEmptyNotebook();
  }
};

/**
 * Create an empty Jupyter notebook structure
 * @param {string} language - Kernel language (default: python)
 * @returns {Object} - Empty notebook structure
 */
exports.createEmptyNotebook = (language = 'python') => {
  return createEmptyNotebook(language);
};

/**
 * Generate a minimal empty notebook
 * @param {string} language - Kernel language
 * @returns {Object} - Notebook structure
 */
function createEmptyNotebook(language = 'python') {
  const kernelInfo = {
    python: {
      display_name: 'Python 3',
      name: 'python3'
    },
    javascript: {
      display_name: 'JavaScript',
      name: 'javascript'
    },
    r: {
      display_name: 'R',
      name: 'ir'
    }
  };
  
  const kernel = kernelInfo[language] || kernelInfo.python;
  
  return {
    nbformat: 4,
    nbformat_minor: 5,
    metadata: {
      kernelspec: {
        display_name: kernel.display_name,
        language: language,
        name: kernel.name
      },
      language_info: {
        name: language
      }
    },
    cells: [
      {
        cell_type: 'markdown',
        metadata: {},
        source: ['# New Notebook\n\nCreated with Code Editor']
      },
      {
        cell_type: 'code',
        metadata: {},
        source: ['# Enter your code here'],
        outputs: []
      }
    ]
  };
}

/**
 * Verify notebook structure integrity and fix issues
 * @param {Object} notebook - Notebook object
 * @returns {Object} - Sanitized notebook
 */
exports.sanitizeNotebook = (notebook) => {
  try {
    if (!notebook || typeof notebook !== 'object') {
      return createEmptyNotebook();
    }
    
    // Ensure cells array exists
    if (!notebook.cells || !Array.isArray(notebook.cells)) {
      notebook.cells = [];
    }
    
    // Ensure each cell has required properties
    notebook.cells = notebook.cells.map(cell => {
      // If cell isn't an object, create a basic one
      if (typeof cell !== 'object') {
        return {
          cell_type: 'code',
          metadata: {},
          source: [],
          outputs: []
        };
      }
      
      // Ensure cell has a valid type
      if (!['code', 'markdown', 'raw'].includes(cell.cell_type)) {
        cell.cell_type = 'code';
      }
      
      // Ensure cell has metadata
      if (!cell.metadata || typeof cell.metadata !== 'object') {
        cell.metadata = {};
      }
      
      // Ensure cell has source
      if (!cell.source) {
        cell.source = [];
      } else if (typeof cell.source === 'string') {
        cell.source = [cell.source];
      }
      
      // Ensure code cells have outputs
      if (cell.cell_type === 'code' && !Array.isArray(cell.outputs)) {
        cell.outputs = [];
      }
      
      return cell;
    });
    
    // Ensure metadata exists
    if (!notebook.metadata || typeof notebook.metadata !== 'object') {
      notebook.metadata = {};
    }
    
    // Ensure nbformat exists
    if (!notebook.nbformat) {
      notebook.nbformat = 4;
    }
    
    // Ensure nbformat_minor exists
    if (!notebook.nbformat_minor) {
      notebook.nbformat_minor = 5;
    }
    
    return notebook;
  } catch (error) {
    logger.error('Error sanitizing notebook:', error);
    return createEmptyNotebook();
  }
};

/**
 * Create a notebook file in the database
 * @param {string} projectId - Project ID
 * @param {Object} fileData - File data
 * @returns {Promise<Object>} - Created file
 */
exports.createNotebookFile = async (projectId, fileData) => {
  try {
    // Create empty notebook content if none provided
    if (!fileData.content) {
      const emptyNotebook = createEmptyNotebook();
      fileData.content = JSON.stringify(emptyNotebook, null, 2);
    }
    
    // Create the file
    const file = new File({
      ...fileData,
      extension: '.ipynb'
    });
    
    await file.save();
    
    return file;
  } catch (error) {
    logger.error('Error creating notebook file:', error);
    throw error;
  }
};