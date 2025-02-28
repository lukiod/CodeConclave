// client/src/components/Editor/NewFileModal.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaFile, FaFolder } from 'react-icons/fa';
import { SUPPORTED_LANGUAGES } from '../../config/constants';

const NewFileModal = ({ isOpen, onClose, onCreate, folder }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('file');
  const [extension, setExtension] = useState('.js');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    
    if (name.includes('/') || name.includes('\\')) {
      setError('Name cannot contain / or \\');
      return;
    }
    
    // Create file or directory
    onCreate({
      name,
      type,
      extension: type === 'file' ? extension : '',
      content: '',
      language: type === 'file' ? getLanguageFromExtension(extension) : ''
    });
    
    // Reset form
    setName('');
    setType('file');
    setExtension('.js');
    setError('');
  };

  const getLanguageFromExtension = (ext) => {
    const language = SUPPORTED_LANGUAGES.find(lang => 
      lang.extensions.includes(ext.toLowerCase())
    );
    return language ? language.id : 'plaintext';
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
              <FaFile />
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
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder={type === 'file' ? 'filename' : 'folder name'}
              autoFocus
            />
          </FormGroup>
          
          {type === 'file' && (
            <FormGroup>
              <Label htmlFor="extension">Extension</Label>
              <Select
                id="extension"
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
              >
                {SUPPORTED_LANGUAGES.map(lang => 
                  lang.extensions.map(ext => (
                    <option key={ext} value={ext}>
                      {ext} ({lang.name})
                    </option>
                  ))
                )}
              </Select>
            </FormGroup>
          )}
          
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

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
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

export default NewFileModal;