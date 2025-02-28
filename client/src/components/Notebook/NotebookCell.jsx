// client/src/components/Notebook/NotebookCell.jsx
import { useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import { FaTrash, FaPlay, FaPlus, FaCode, FaMarkdown } from 'react-icons/fa';
import CellOutput from './CellOutput';

const NotebookCell = ({ 
  cell, 
  index, 
  onChange, 
  onDelete, 
  onAddBelow,
  onTypeChange 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  
  const handleEditorChange = (value) => {
    onChange(value);
  };

  const getCellType = () => {
    return cell.cell_type || 'code';
  };

  const getEditorLanguage = () => {
    const cellType = getCellType();
    if (cellType === 'markdown') return 'markdown';
    if (cellType === 'raw') return 'plaintext';
    return 'python'; // Default to Python for code cells
  };

  const getSourceContent = () => {
    if (!cell.source) return '';
    if (Array.isArray(cell.source)) {
      return cell.source.join('');
    }
    return cell.source;
  };

  const toggleCellType = () => {
    const currentType = getCellType();
    const newType = currentType === 'code' ? 'markdown' : 'code';
    onTypeChange(newType);
  };

  return (
    <CellContainer>
      <CellControls>
        <CellIndex>{index + 1}</CellIndex>
        <ControlButtons>
          <CellButton 
            title={`Change to ${getCellType() === 'code' ? 'markdown' : 'code'}`}
            onClick={toggleCellType}
          >
            {getCellType() === 'code' ? <FaCode /> : <FaMarkdown />}
          </CellButton>
          
          {getCellType() === 'code' && (
            <CellButton 
              title="Run cell"
              onClick={() => console.log('Run cell not implemented yet')}
            >
              <FaPlay />
            </CellButton>
          )}
          
          <CellButton 
            title="Add cell below"
            onClick={onAddBelow}
          >
            <FaPlus />
          </CellButton>
          
          <CellButton 
            title="Delete cell"
            onClick={onDelete}
          >
            <FaTrash />
          </CellButton>
        </ControlButtons>
      </CellControls>
      
      <CellContent>
        <EditorContainer 
          isEditing={isEditing} 
          isFocused={isEditing}
          onClick={() => !isEditing && setIsEditing(true)}
        >
          <Editor
            height={getCellType() === 'markdown' ? '150px' : '200px'}
            language={getEditorLanguage()}
            value={getSourceContent()}
            theme="vs-dark"
            onChange={handleEditorChange}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              lineNumbers: 'off',
              folding: false,
              glyphMargin: false,
              lineDecorationsWidth: 0,
              lineNumbersMinChars: 0,
              wordWrap: 'on',
              automaticLayout: true,
              tabSize: 2,
              contextmenu: false,
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto'
              }
            }}
          />
        </EditorContainer>
        
        {getCellType() === 'code' && cell.outputs && cell.outputs.length > 0 && (
          <OutputContainer show={showOutput}>
            <OutputHeader onClick={() => setShowOutput(!showOutput)}>
              Output {showOutput ? '▼' : '▶'}
            </OutputHeader>
            {showOutput && (
              <CellOutput outputs={cell.outputs} />
            )}
          </OutputContainer>
        )}
      </CellContent>
    </CellContainer>
  );
};

const CellContainer = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CellControls = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: #edf2f7;
  border-bottom: 1px solid #e2e8f0;
`;

const CellIndex = styled.div`
  font-family: monospace;
  font-size: 12px;
  color: #718096;
  background-color: #e2e8f0;
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 8px;
  min-width: 20px;
  text-align: center;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const CellButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px 6px;
  color: #4a5568;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e2e8f0;
  }
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditorContainer = styled.div`
  border-left: 3px solid ${props => props.isFocused ? '#3182ce' : 'transparent'};
  transition: border-color 0.2s;
  
  &:hover {
    border-left: 3px solid ${props => props.isFocused ? '#3182ce' : '#e2e8f0'};
  }
`;

const OutputContainer = styled.div`
  border-top: 1px solid #e2e8f0;
  display: ${props => props.show ? 'block' : 'none'};
`;

const OutputHeader = styled.div`
  padding: 4px 8px;
  background-color: #f7fafc;
  font-size: 12px;
  color: #718096;
  cursor: pointer;
  border-bottom: 1px solid #e2e8f0;
  
  &:hover {
    background-color: #edf2f7;
  }
`;

export default NotebookCell;