// client/src/components/Dashboard/NewProjectModal.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaGlobe, FaLock } from 'react-icons/fa';
import { validateProjectName } from '../../utils/validators';

const NewProjectModal = ({ isOpen, onClose, onCreate }) => {
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
    
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const validationResult = validateProjectName(formData.name);
    if (!validationResult.isValid) {
      setError(validationResult.message);
      return;
    }
    
    setIsSubmitting(true);
    
    // Create project
    try {
      onCreate(formData);
      
      // Reset form
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
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Create New Project</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Project Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter project name"
                autoFocus
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter project description"
                rows={3}
              />
            </FormGroup>
            
            <FormGroup>
              <VisibilityOptions>
                <VisibilityOption
                  isSelected={!formData.isPublic}
                  onClick={() => setFormData({ ...formData, isPublic: false })}
                >
                  <FaLock />
                  <div>
                    <OptionTitle>Private</OptionTitle>
                    <OptionDescription>
                      Only you and people you share with can access
                    </OptionDescription>
                  </div>
                </VisibilityOption>
                
                <VisibilityOption
                  isSelected={formData.isPublic}
                  onClick={() => setFormData({ ...formData, isPublic: true })}
                >
                  <FaGlobe />
                  <div>
                    <OptionTitle>Public</OptionTitle>
                    <OptionDescription>
                      Anyone with the link can view this project
                    </OptionDescription>
                  </div>
                </VisibilityOption>
              </VisibilityOptions>
            </FormGroup>
            
            <ButtonGroup>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
              <CreateButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Project'}
              </CreateButton>
            </ButtonGroup>
          </Form>
        </ModalBody>
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
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #2d3748;
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #a0aec0;
  cursor: pointer;
  
  &:hover {
    color: #4a5568;
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
  color: #4a5568;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const Textarea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
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
  border: 1px solid ${props => props.isSelected ? '#3182ce' : '#e2e8f0'};
  border-radius: 6px;
  background-color: ${props => props.isSelected ? '#ebf8ff' : 'white'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${props => props.isSelected ? '#3182ce' : '#cbd5e0'};
    background-color: ${props => props.isSelected ? '#ebf8ff' : '#f7fafc'};
  }
  
  svg {
    color: ${props => props.isSelected ? '#3182ce' : '#718096'};
    font-size: 18px;
    margin-top: 2px;
  }
`;

const OptionTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #2d3748;
`;

const OptionDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: #718096;
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
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  background-color: #FFF5F5;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid #e53e3e;
`;

export default NewProjectModal;