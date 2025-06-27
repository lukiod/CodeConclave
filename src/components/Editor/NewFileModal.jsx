// src/components/Editor/NewFileModal.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaFile, FaFolder, FaCode } from 'react-icons/fa';

const NewFileModal = ({ isOpen, onClose, onCreate, folder }) => {
  const [filename, setFilename] = useState('');
  const [type, setType] = useState('file');
  const [error, setError] = useState('');
  const [fileExtension, setFileExtension] = useState('');
  const [fileLanguage, setFileLanguage] = useState('');
  
  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFilename('');
      setType('file');
      setError('');
      setFileExtension('');
      setFileLanguage('');
    }
  }, [isOpen]);
  
  // Parse extension and language whenever filename changes
  useEffect(() => {
    if (type === 'file' && filename) {
      const lastDotIndex = filename.lastIndexOf('.');
      
      if (lastDotIndex > 0) {
        const extension = filename.substring(lastDotIndex);
        setFileExtension(extension);
        setFileLanguage(getLanguageFromExtension(extension));
      } else {
        setFileExtension('');
        setFileLanguage('');
      }
    }
  }, [filename, type]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!filename.trim()) {
      setError('Name is required');
      return;
    }
    
    if (filename.includes('/') || filename.includes('\\')) {
      setError('Name cannot contain / or \\');
      return;
    }
    
    // For files, ensure there's an extension
    if (type === 'file' && !fileExtension) {
      setError('Please include a file extension (e.g., .js, .py, .html)');
      return;
    }
    
    if (type === 'file') {
      // Extract base name (without extension)
      const baseName = filename.substring(0, filename.lastIndexOf('.'));
      
      // Create file
      onCreate({
        name: baseName,
        type,
        extension: fileExtension,
        content: '',
        language: fileLanguage || getLanguageFromExtension(fileExtension)
      });
    } else {
      // Create directory
      onCreate({
        name: filename,
        type,
        extension: '',
        content: '',
        language: ''
      });
    }
    
    // Close modal
    onClose();
  };
  
  // Helper function to get language from extension
  const getLanguageFromExtension = (ext) => {
    if (!ext) return 'plaintext';
    
    const extension = ext.toLowerCase();
    
    switch (extension) {
      case '.js':
        return 'javascript';
      case '.jsx':
        return 'javascript';
      case '.ts':
        return 'typescript';
      case '.tsx':
        return 'typescript';
      case '.py':
        return 'python';
      case '.html':
        return 'html';
      case '.css':
        return 'css';
      case '.json':
        return 'json';
      case '.md':
        return 'markdown';
      case '.txt':
        return 'plaintext';
      case '.java':
        return 'java';
      case '.c':
        return 'c';
      case '.cpp':
      case '.cc':
        return 'cpp';
      case '.cs':
        return 'csharp';
      case '.go':
        return 'go';
      case '.rb':
        return 'ruby';
      case '.php':
        return 'php';
      case '.rust':
        return 'rust';
      case '.sql':
        return 'sql';
      case '.xml':
        return 'xml';
      case '.yaml':
      case '.yml':
        return 'yaml';
      case '.sh':
        return 'shell';
      default:
        return 'plaintext';
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          {folder 
            ? `New File in ${folder.name}`
            : 'Create New'
          }
        </ModalHeader>
        
        <Form onSubmit={handleSubmit}>
          <TypeSelection>
            <TypeOption
              isSelected={type === 'file'}
              onClick={() => setType('file')}
            >
              <FaCode />
              <span>File</span>
            </TypeOption>
            <TypeOption
              isSelected={type === 'directory'}
              onClick={() => setType('directory')}
            >
              <FaFolder />
              <span>Folder</span>
            </TypeOption>
          </TypeSelection>
          
          <FormGroup>
            <Label htmlFor="filename">
              {type === 'file' 
                ? 'Filename (with extension)' 
                : 'Folder Name'}
            </Label>
            <Input
              id="filename"
              type="text"
              value={filename}
              onChange={(e) => {
                setFilename(e.target.value);
                if (error) setError('');
              }}
              placeholder={type === 'file' 
                ? 'example.py' 
                : 'folder name'
              }
              autoFocus
            />
            {type === 'file' && (
              <NoticeText>
                Note: Currently, only Python files (.py) are supported. Support for other languages coming soon.
              </NoticeText>
            )}
            {type === 'file' && fileExtension && (
              <DetectedExtension>
                Detected: {fileExtension} ({fileLanguage || 'plaintext'})
              </DetectedExtension>
            )}
          </FormGroup>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <CreateButton type="submit">
              Create {type === 'file' ? 'File' : 'Folder'}
            </CreateButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
`;

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TypeSelection = styled.div`
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const TypeOption = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#ebf8ff' : 'transparent'};
  color: ${props => props.isSelected ? '#3182ce' : '#4a5568'};
  border-bottom: 2px solid ${props => props.isSelected ? '#3182ce' : 'transparent'};
  
  svg {
    font-size: 18px;
  }
  
  span {
    font-size: 14px;
  }
  
  &:hover {
    background-color: ${props => props.isSelected ? '#ebf8ff' : '#f7fafc'};
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const DetectedExtension = styled.div`
  font-size: 12px;
  color: #718096;
  margin-top: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const CreateButton = styled(Button)`
  background-color: #3182ce;
  border: none;
  color: white;
  
  &:hover {
    background-color: #2c5282;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  font-size: 14px;
  background-color: #FFF5F5;
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 3px solid #e53e3e;
`;

const NoticeText = styled.div`
  font-size: 12px;
  color: #4a5568;
  margin-top: 4px;
  padding: 4px 8px;
  background-color: #EDF2F7;
  border-radius: 4px;
`;

export default NewFileModal;