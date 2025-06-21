// client/src/components/Editor/ShareModal.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaCopy, FaCheck, FaGlobe, FaLock, FaTrash } from 'react-icons/fa';
import { shareProject } from '../../services/projectService';
import { isValidEmail } from '../../utils/validators';

const ShareModal = ({ isOpen, onClose, project, projectId }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('viewer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [isPublic, setIsPublic] = useState(project?.isPublic || false);
  
  if (!isOpen || !project) return null;
  
  const handleShare = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      await shareProject(projectId, { email, role });
      setSuccessMessage(`Project shared with ${email} successfully!`);
      setEmail('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to share project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const copyShareLink = () => {
    const shareUrl = `${window.location.origin}/projects/${projectId}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const togglePublicAccess = async () => {
    setIsSubmitting(true);
    
    try {
      // Update project visibility
      // This would typically call an API to update the project
      setIsPublic(!isPublic);
      // In a real app, you would call an API here
      
      setSuccessMessage(`Project is now ${!isPublic ? 'public' : 'private'}`);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update project visibility');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Share Project</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          {/* Share via link section */}
          <SectionTitle>Share via Link</SectionTitle>
          <ShareLinkContainer>
            <ShareLink>{window.location.origin}/projects/{projectId}</ShareLink>
            <CopyButton onClick={copyShareLink}>
              {copied ? <FaCheck /> : <FaCopy />}
            </CopyButton>
          </ShareLinkContainer>
          
          {/* Public access toggle */}
          <SectionTitle>Project Visibility</SectionTitle>
          <VisibilityContainer>
            <VisibilityOption
              isSelected={isPublic}
              onClick={togglePublicAccess}
              disabled={isSubmitting}
            >
              <VisibilityIcon isPublic={true}>
                <FaGlobe />
              </VisibilityIcon>
              <div>
                <OptionTitle>Public</OptionTitle>
                <OptionDescription>
                  Anyone with the link can view this project
                </OptionDescription>
              </div>
            </VisibilityOption>
            
            <VisibilityOption
              isSelected={!isPublic}
              onClick={togglePublicAccess}
              disabled={isSubmitting}
            >
              <VisibilityIcon isPublic={false}>
                <FaLock />
              </VisibilityIcon>
              <div>
                <OptionTitle>Private</OptionTitle>
                <OptionDescription>
                  Only you and people you share with can access
                </OptionDescription>
              </div>
            </VisibilityOption>
          </VisibilityContainer>
          
          {/* Share with specific user section */}
          <SectionTitle>Share with People</SectionTitle>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          
          <ShareForm onSubmit={handleShare}>
            <FormGroup>
              <FormRow>
                <EmailInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                />
                <RoleSelect
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </RoleSelect>
              </FormRow>
              <ShareButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sharing...' : 'Share'}
              </ShareButton>
            </FormGroup>
          </ShareForm>
          
          {/* Collaborators list */}
          {project.collaborators && project.collaborators.length > 0 && (
            <>
              <SectionTitle>Collaborators</SectionTitle>
              <CollaboratorsList>
                {project.collaborators.map((collaborator) => (
                  <CollaboratorItem key={collaborator.user._id}>
                    <CollaboratorInfo>
                      <CollaboratorName>
                        {collaborator.user.username || collaborator.user.email}
                      </CollaboratorName>
                      <CollaboratorEmail>
                        {collaborator.user.email}
                      </CollaboratorEmail>
                    </CollaboratorInfo>
                    <CollaboratorRole>
                      {collaborator.role.charAt(0).toUpperCase() + collaborator.role.slice(1)}
                    </CollaboratorRole>
                    <RemoveButton
                      title="Remove collaborator"
                      onClick={() => {/* Implement remove collaborator functionality */}}
                    >
                      <FaTrash />
                    </RemoveButton>
                  </CollaboratorItem>
                ))}
              </CollaboratorsList>
            </>
          )}
          
          <ButtonGroup>
            <CancelButton onClick={onClose}>
              Close
            </CancelButton>
          </ButtonGroup>
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
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--color-border);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--color-border);
`;

const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: var(--color-text-primary);
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: var(--color-text-tertiary);
  cursor: pointer;
  
  &:hover {
    color: var(--color-text-primary);
  }
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 20px 0 10px;
  
  &:first-child {
    margin-top: 0;
  }
`;

const ShareLinkContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 15px;
`;

const ShareLink = styled.div`
  flex: 1;
  font-size: 14px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CopyButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.copied ? 'var(--color-success)' : 'var(--color-text-secondary)'};
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const VisibilityContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
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
  border: 1px solid ${props => props.isSelected ? 'var(--color-primary)' : 'var(--color-border)'};
  border-radius: 6px;
  background-color: ${props => props.isSelected ? 'rgba(96, 165, 250, 0.1)' : 'var(--color-background)'};
  cursor: pointer;
  transition: all 0.2s;
  opacity: ${props => props.disabled ? 0.7 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  
  &:hover {
    border-color: ${props => props.isSelected ? 'var(--color-primary)' : 'var(--color-text-tertiary)'};
    background-color: ${props => props.isSelected ? 'rgba(96, 165, 250, 0.1)' : 'var(--color-surface)'};
  }
`;

const VisibilityIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.isPublic ? 'var(--color-success-light)' : 'var(--color-surface)'};
  color: ${props => props.isPublic ? 'var(--color-success)' : 'var(--color-text-secondary)'};
  
  svg {
    font-size: 16px;
  }
`;

const OptionTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
`;

const OptionDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-text-tertiary);
`;

const ShareForm = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 14px;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

const RoleSelect = styled.select`
  width: 120px;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 14px;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
  }
  
  option {
    background-color: var(--color-background);
    color: var(--color-text-primary);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ShareButton = styled.button`
  padding: 10px 16px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
  }
  
  &:disabled {
    background-color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
`;

const CollaboratorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const CollaboratorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
`;

const CollaboratorInfo = styled.div`
  flex: 1;
`;

const CollaboratorName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
`;

const CollaboratorEmail = styled.div`
  font-size: 12px;
  color: var(--color-text-tertiary);
`;

const CollaboratorRole = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-secondary);
  background-color: var(--color-surface-light);
  padding: 4px 8px;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--color-danger);
  }
  
  svg {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 16px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-surface);
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-danger);
  background-color: var(--color-error-light);
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid var(--color-danger);
`;

const SuccessMessage = styled.div`
  color: var(--color-success);
  background-color: var(--color-success-light);
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid var(--color-success);
`;

export default ShareModal;