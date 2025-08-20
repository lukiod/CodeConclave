import { useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaGlobe, FaLock } from 'react-icons/fa';
import { validateProjectName } from '../../utils/validators';
import { useTheme } from '../../contexts/ThemeContext';

const NewProjectModal = ({ isOpen, onClose, onCreate }) => {
  const { theme, isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPublic: false
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationResult = validateProjectName(formData.name);
    if (!validationResult.isValid) {
      setError(validationResult.message);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      onCreate(formData);
      
      setFormData({
        name: '',
        description: '',
        isPublic: false
      });
    } catch (err) {
      setError(err.message || 'Failed to create project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalOverlay onClick={onClose} theme={theme}>
      <ModalContent onClick={(e) => e.stopPropagation()} theme={theme}>
        <ModalHeader theme={theme}>
          <ModalTitle theme={theme}>Create New Project</ModalTitle>
          <CloseButton onClick={onClose} theme={theme}>&times;</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name" theme={theme}>Project Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter project name"
                autoFocus
                theme={theme}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description" theme={theme}>Description (optional)</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter project description"
                rows={3}
                theme={theme}
              />
            </FormGroup>
            
            <FormGroup>
              <VisibilityOptions>
                <VisibilityOption
                  isSelected={!formData.isPublic}
                  onClick={() => setFormData({ ...formData, isPublic: false })}
                  theme={theme}
                >
                  <FaLock />
                  <div>
                    <OptionTitle theme={theme}>Private</OptionTitle>
                    <OptionDescription theme={theme}>
                      Only you and people you share with can access
                    </OptionDescription>
                  </div>
                </VisibilityOption>
                
                <VisibilityOption
                  isSelected={formData.isPublic}
                  onClick={() => setFormData({ ...formData, isPublic: true })}
                  theme={theme}
                >
                  <FaGlobe />
                  <div>
                    <OptionTitle theme={theme}>Public</OptionTitle>
                    <OptionDescription theme={theme}>
                      Anyone with the link can view this project
                    </OptionDescription>
                  </div>
                </VisibilityOption>
              </VisibilityOptions>
            </FormGroup>
            
            <ButtonGroup>
              <CancelButton type="button" onClick={onClose} theme={theme}>
                Cancel
              </CancelButton>
              <CreateButton type="submit" disabled={isSubmitting} theme={theme}>
                {isSubmitting ? 'Creating...' : 'Create Project'}
              </CreateButton>
            </ButtonGroup>
          </Form>
        </ModalBody>
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
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: ${props => props.theme.colors.textTertiary};
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 10px 12px;
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

const Textarea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
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

const VisibilityOptions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const VisibilityOption = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid ${props => 
    props.isSelected ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: 6px;
  background-color: ${props => 
    props.isSelected ? 
      (props.theme.colors.background === '#0f172a' ? '#1e3a8a' : '#eff6ff') : 
      props.theme.colors.background};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => 
      props.isSelected ? 
        props.theme.colors.primary : 
        props.theme.colors.textTertiary};
    background-color: ${props => 
      props.isSelected ? 
        (props.theme.colors.background === '#0f172a' ? '#1e3a8a' : '#eff6ff') : 
        props.theme.colors.surfaceLight};
  }
  
  svg {
    color: ${props => 
      props.isSelected ? 
        props.theme.colors.primary : 
        props.theme.colors.textTertiary};
    font-size: 18px;
    margin-top: 2px;
    transition: color 0.2s ease;
  }
`;

const OptionTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.textPrimary};
`;

const OptionDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${props => props.theme.colors.textTertiary};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 16px;
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
  
  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.textTertiary};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  background-color: ${props => props.theme.colors.errorLight};
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid ${props => props.theme.colors.error};
`;

export default NewProjectModal;