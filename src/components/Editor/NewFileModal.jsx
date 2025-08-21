import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaFile, FaFolder, FaCode } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const NewFileModal = ({ isOpen, onClose, onCreate, folder }) => {
  const { theme, isDarkMode } = useTheme();
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
    <ModalOverlay onClick={onClose} theme={theme}>
      <ModalContent onClick={(e) => e.stopPropagation()} theme={theme}>
        <ModalHeader theme={theme}>
          {folder 
            ? `New File in ${folder.name}`
            : 'Create New'
          }
        </ModalHeader>
        
        <Form onSubmit={handleSubmit}>
          <TypeSelection theme={theme}>
            <TypeOption
              isSelected={type === 'file'}
              onClick={() => setType('file')}
              theme={theme}
            >
              <FaCode />
              <span>File</span>
            </TypeOption>
            <TypeOption
              isSelected={type === 'directory'}
              onClick={() => setType('directory')}
              theme={theme}
            >
              <FaFolder />
              <span>Folder</span>
            </TypeOption>
          </TypeSelection>
          
          <FormGroup>
            <Label htmlFor="filename" theme={theme}>
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
              theme={theme}
            />
            {type === 'file' && (
              <NoticeText theme={theme}>
                Note: Currently, only Python files (.py) are supported. Support for other languages coming soon.
              </NoticeText>
            )}
            {type === 'file' && fileExtension && (
              <DetectedExtension theme={theme}>
                Detected: {fileExtension} ({fileLanguage || 'plaintext'})
              </DetectedExtension>
            )}
          </FormGroup>
          
          {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}
          
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose} theme={theme}>
              Cancel
            </CancelButton>
            <CreateButton type="submit" theme={theme}>
              Create {type === 'file' ? 'File' : 'Folder'}
            </CreateButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled components using theme colors
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, ${props => props.theme.colors.background === '#0f172a' ? '0.8' : '0.5'});
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${props => props.theme.colors.background === '#0f172a' 
    ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
    : '0 4px 6px rgba(0, 0, 0, 0.1)'};
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ModalHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`;

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TypeSelection = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.colors.border};
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
  background-color: ${props => 
    props.isSelected ? 
      (props.theme.colors.background === '#0f172a' ? '#1e3a8a' : '#ebf8ff') : 
      'transparent'};
  color: ${props => 
    props.isSelected ? 
      props.theme.colors.primary : 
      props.theme.colors.textSecondary};
  border-bottom: 2px solid ${props => 
    props.isSelected ? 
      props.theme.colors.primary : 
      'transparent'};
  
  svg {
    font-size: 18px;
  }
  
  span {
    font-size: 14px;
  }
  
  &:hover {
    background-color: ${props => 
      props.isSelected ? 
        (props.theme.colors.background === '#0f172a' ? '#1e3a8a' : '#ebf8ff') : 
        props.theme.colors.surfaceLight};
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
  color: ${props => props.theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.background};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &::placeholder {
    color: ${props => props.theme.colors.textTertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
  }
`;

const DetectedExtension = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.textTertiary};
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
  transition: all 0.2s ease;
`;

const CancelButton = styled(Button)`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
  
  &:hover {
    background-color: ${props => props.theme.colors.surfaceLight};
    border-color: ${props => props.theme.colors.textTertiary};
  }
`;

const CreateButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  color: white;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  background-color: ${props => props.theme.colors.errorLight};
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 3px solid ${props => props.theme.colors.error};
  font-size: 14px;
`;

const NoticeText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: 4px;
  padding: 4px 8px;
  background-color: ${props => props.theme.colors.surfaceLight};
  border-radius: 4px;
`;

export default NewFileModal;