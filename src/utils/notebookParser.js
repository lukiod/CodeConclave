/**
 * Parse a Jupyter notebook from JSON string
 * @param {string} content - JSON string content of notebook file
 * @returns {Object} Parsed notebook object
 */
export const parseNotebook = (content) => {
    try {
      // If content is already an object, return it
      if (typeof content === 'object') {
        return content;
      }
      
      // Parse JSON string to object
      const notebook = JSON.parse(content);
      
      // Validate basic notebook structure
      if (!notebook.cells || !Array.isArray(notebook.cells)) {
        throw new Error('Invalid notebook format: missing cells array');
      }
      
      if (!notebook.metadata) {
        notebook.metadata = {};
      }
      
      // Return the parsed notebook
      return notebook;
    } catch (error) {
      console.error('Error parsing notebook:', error);
      
      // Return a minimal valid notebook if parsing fails
      return {
        nbformat: 4,
        nbformat_minor: 5,
        metadata: {
          kernelspec: {
            display_name: 'Python 3',
            language: 'python',
            name: 'python3'
          },
          language_info: {
            name: 'python',
            version: '3.8.0'
          }
        },
        cells: [
          {
            cell_type: 'markdown',
            metadata: {},
            source: ['# New Notebook\n\nThis notebook was created automatically.']
          },
          {
            cell_type: 'code',
            metadata: {},
            source: ['# Enter code here'],
            outputs: []
          }
        ]
      };
    }
  };
  
  /**
   * Update a cell in a notebook
   * @param {Object} notebook - Notebook object
   * @param {number} cellIndex - Index of the cell to update
   * @param {string} newValue - New cell content
   * @param {string} cellType - Cell type (code or markdown)
   * @returns {Object} Updated notebook object
   */
  export const updateNotebookCell = (notebook, cellIndex, newValue, cellType) => {
    // Create a deep copy of the notebook
    const newNotebook = JSON.parse(JSON.stringify(notebook));
    
    // Make sure the cell exists
    if (!newNotebook.cells || !newNotebook.cells[cellIndex]) {
      throw new Error(`Cell at index ${cellIndex} does not exist`);
    }
    
    // Update the cell
    const cell = newNotebook.cells[cellIndex];
    cell.cell_type = cellType;
    cell.source = newValue.split('\n').map(line => `${line}\n`);
    
    // If changing from markdown to code, initialize outputs array
    if (cellType === 'code' && !cell.outputs) {
      cell.outputs = [];
      cell.execution_count = null;
    }
    
    return newNotebook;
  };
  
  /**
   * Add a new cell to a notebook
   * @param {Object} notebook - Notebook object
   * @param {string} cellType - Cell type (code or markdown)
   * @param {number} insertAfter - Index after which to insert the new cell
   * @returns {Object} Updated notebook object
   */
  export const addNotebookCell = (notebook, cellType = 'code', insertAfter = -1) => {
    // Create a deep copy of the notebook
    const newNotebook = JSON.parse(JSON.stringify(notebook));
    
    // Create a new cell
    const newCell = {
      cell_type: cellType,
      metadata: {},
      source: []
    };
    
    // Add outputs array for code cells
    if (cellType === 'code') {
      newCell.outputs = [];
      newCell.execution_count = null;
    }
    
    // Insert the cell at the specified position
    if (insertAfter === -1 || !newNotebook.cells) {
      // Insert at the beginning or if cells array doesn't exist
      newNotebook.cells = newNotebook.cells || [];
      newNotebook.cells.push(newCell);
    } else {
      newNotebook.cells.splice(insertAfter + 1, 0, newCell);
    }
    
    return newNotebook;
  };
  
  /**
   * Delete a cell from a notebook
   * @param {Object} notebook - Notebook object
   * @param {number} cellIndex - Index of the cell to delete
   * @returns {Object} Updated notebook object
   */
  export const deleteNotebookCell = (notebook, cellIndex) => {
    // Create a deep copy of the notebook
    const newNotebook = JSON.parse(JSON.stringify(notebook));
    
    // Make sure the cell exists
    if (!newNotebook.cells || !newNotebook.cells[cellIndex]) {
      throw new Error(`Cell at index ${cellIndex} does not exist`);
    }
    
    // Don't delete the last cell
    if (newNotebook.cells.length <= 1) {
      throw new Error('Cannot delete the last cell');
    }
    
    // Delete the cell
    newNotebook.cells.splice(cellIndex, 1);
    
    return newNotebook;
  };
  
  /**
   * Create a new empty notebook
   * @param {string} language - Programming language (default: python)
   * @returns {Object} New notebook object
   */
  export const createEmptyNotebook = (language = 'python') => {
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
  };
  
  /**
   * Export notebook to different formats (not implemented)
   * This would typically require server-side processing with nbconvert
   */
  export const exportNotebook = (notebook, format = 'html') => {
    console.warn('Notebook export requires server-side processing and is not implemented in the client');
    return null;
  };