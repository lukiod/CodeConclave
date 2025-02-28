// client/src/components/Notebook/NotebookEditor.jsx
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { EditorContext } from '../../contexts/EditorContext';
import NotebookCell from './NotebookCell';
import { parseNotebook, updateNotebookCell, addNotebookCell, deleteNotebookCell } from '../../utils/notebookParser';
import { FaPlus } from 'react-icons/fa';

const NotebookEditor = ({ file }) => {
  const [cells, setCells] = useState([]);
  const [notebook, setNotebook] = useState(null);
  const { handleFileChange } = useContext(EditorContext);

  useEffect(() => {
    if (file && file.content) {
      try {
        // Parse the notebook JSON
        const parsedNotebook = parseNotebook(file.content);
        setNotebook(parsedNotebook);
        
        // Extract cells from the notebook
        setCells(
          parsedNotebook.cells.map((cell, index) => ({
            id: index,
            ...cell
          }))
        );
      } catch (error) {
        console.error('Error parsing notebook:', error);
        setCells([]);
      }
    }
  }, [file]);

  const handleCellChange = (cellIndex, newValue, cellType = 'code') => {
    const updatedCells = [...cells];
    updatedCells[cellIndex] = {
      ...updatedCells[cellIndex],
      source: newValue.split('\n').map(line => line + '\n'),
      cell_type: cellType
    };
    
    setCells(updatedCells);
    
    // Update the notebook with the new cell
    if (notebook) {
      const updatedNotebook = updateNotebookCell(notebook, cellIndex, newValue, cellType);
      setNotebook(updatedNotebook);
      
      // Update file content
      handleFileChange(JSON.stringify(updatedNotebook, null, 2));
    }
  };

  const addCell = (cellType = 'code', insertAfter = cells.length - 1) => {
    // Create a new cell
    const newCell = {
      id: cells.length,
      cell_type: cellType,
      source: [''],
      metadata: {},
      outputs: []
    };
    
    // Insert the cell at the specified position
    const newCells = [...cells];
    newCells.splice(insertAfter + 1, 0, newCell);
    setCells(newCells);
    
    // Update the notebook
    if (notebook) {
      const updatedNotebook = addNotebookCell(notebook, cellType, insertAfter);
      setNotebook(updatedNotebook);
      
      // Update file content
      handleFileChange(JSON.stringify(updatedNotebook, null, 2));
    }
  };

  const deleteCell = (cellIndex) => {
    if (cells.length <= 1) {
      return; // Don't delete the last cell
    }
    
    // Remove the cell
    const newCells = cells.filter((_, index) => index !== cellIndex);
    setCells(newCells);
    
    // Update the notebook
    if (notebook) {
      const updatedNotebook = deleteNotebookCell(notebook, cellIndex);
      setNotebook(updatedNotebook);
      
      // Update file content
      handleFileChange(JSON.stringify(updatedNotebook, null, 2));
    }
  };

  if (!file) {
    return (
      <EmptyState>
        <p>Select a notebook file to edit</p>
      </EmptyState>
    );
  }

  return (
    <NotebookContainer>
      {cells.map((cell, index) => (
        <NotebookCell
          key={`cell-${index}`}
          cell={cell}
          index={index}
          onChange={(value) => handleCellChange(index, value, cell.cell_type)}
          onDelete={() => deleteCell(index)}
          onAddBelow={() => addCell(cell.cell_type, index)}
          onTypeChange={(type) => handleCellChange(index, cell.source.join(''), type)}
        />
      ))}
      
      <AddCellButton onClick={() => addCell()}>
        <FaPlus /> Add Cell
      </AddCellButton>
    </NotebookContainer>
  );
};

const NotebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  background-color: #f8f9fa;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f8f9fa;
  color: #718096;
  font-size: 1.1rem;
`;

const AddCellButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #edf2f7;
  border: 1px dashed #cbd5e0;
  border-radius: 4px;
  padding: 8px;
  margin: 8px 0;
  color: #4a5568;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #e2e8f0;
  }
`;

export default NotebookEditor;