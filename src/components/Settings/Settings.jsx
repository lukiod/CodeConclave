import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import { 
  FaUser, 
  FaBell, 
  FaLock, 
  FaPalette, 
  FaCode, 
  FaGlobe,
  FaSave,
  FaEdit
} from 'react-icons/fa';

const Settings = () => {
  const { currentUser } = useContext(AuthContext);
  const { currentTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    bio: '',
    theme: currentTheme,
    language: 'javascript',
    fontSize: '14',
    notifications: {
      email: true,
      push: false,
      collaboration: true
    }
  });

  // Sync form data with current theme when theme changes
  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      theme: currentTheme
    }));
  }, [currentTheme]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle theme change immediately
    if (name === 'theme') {
      setTheme(value);
    }
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving settings:', formData);
    setIsEditing(false);
  };

  const settingSections = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'appearance', label: 'Appearance', icon: FaPalette },
    { id: 'editor', label: 'Editor', icon: FaCode },
    { id: 'general', label: 'General', icon: FaGlobe }
  ];

  const renderProfileSection = () => (
    <SectionContent>
      <SectionHeader>
        <SectionTitle>Profile Information</SectionTitle>
        <EditButton onClick={() => setIsEditing(!isEditing)}>
          <FaEdit />
          {isEditing ? 'Cancel' : 'Edit'}
        </EditButton>
      </SectionHeader>
      
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          disabled={!isEditing}
          placeholder="Enter your username"
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={!isEditing}
          placeholder="Enter your email"
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Bio</Label>
        <TextArea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          disabled={!isEditing}
          placeholder="Tell us about yourself..."
          rows="4"
        />
      </FormGroup>
      
      {isEditing && (
        <SaveButton onClick={handleSave}>
          <FaSave />
          Save Changes
        </SaveButton>
      )}
    </SectionContent>
  );

  const renderNotificationsSection = () => (
    <SectionContent>
      <SectionTitle>Notification Preferences</SectionTitle>
      
      <FormGroup>
        <CheckboxGroup>
          <Checkbox>
            <input
              type="checkbox"
              name="notifications.email"
              checked={formData.notifications.email}
              onChange={handleInputChange}
            />
            <CheckboxLabel>Email notifications</CheckboxLabel>
          </Checkbox>
          <CheckboxDescription>Receive email updates about your projects</CheckboxDescription>
        </CheckboxGroup>
      </FormGroup>
      
      <FormGroup>
        <CheckboxGroup>
          <Checkbox>
            <input
              type="checkbox"
              name="notifications.push"
              checked={formData.notifications.push}
              onChange={handleInputChange}
            />
            <CheckboxLabel>Push notifications</CheckboxLabel>
          </Checkbox>
          <CheckboxDescription>Receive browser notifications</CheckboxDescription>
        </CheckboxGroup>
      </FormGroup>
      
      <FormGroup>
        <CheckboxGroup>
          <Checkbox>
            <input
              type="checkbox"
              name="notifications.collaboration"
              checked={formData.notifications.collaboration}
              onChange={handleInputChange}
            />
            <CheckboxLabel>Collaboration notifications</CheckboxLabel>
          </Checkbox>
          <CheckboxDescription>Get notified when someone shares a project with you</CheckboxDescription>
        </CheckboxGroup>
      </FormGroup>
    </SectionContent>
  );

  const renderSecuritySection = () => (
    <SectionContent>
      <SectionTitle>Security Settings</SectionTitle>
      
      <FormGroup>
        <Label>Current Password</Label>
        <Input
          type="password"
          placeholder="Enter current password"
        />
      </FormGroup>
      
      <FormGroup>
        <Label>New Password</Label>
        <Input
          type="password"
          placeholder="Enter new password"
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Confirm New Password</Label>
        <Input
          type="password"
          placeholder="Confirm new password"
        />
      </FormGroup>
      
      <SaveButton>
        <FaSave />
        Update Password
      </SaveButton>
    </SectionContent>
  );

  const renderAppearanceSection = () => (
    <SectionContent>
      <SectionTitle>Appearance</SectionTitle>
      
      <FormGroup>
        <Label>Theme</Label>
        <Select
          name="theme"
          value={formData.theme}
          onChange={handleInputChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </Select>
      </FormGroup>
    </SectionContent>
  );

  const renderEditorSection = () => (
    <SectionContent>
      <SectionTitle>Editor Preferences</SectionTitle>
      
      <FormGroup>
        <Label>Default Language</Label>
        <Select
          name="language"
          value={formData.language}
          onChange={handleInputChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="typescript">TypeScript</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </Select>
      </FormGroup>
      
      <FormGroup>
        <Label>Font Size</Label>
        <Select
          name="fontSize"
          value={formData.fontSize}
          onChange={handleInputChange}
        >
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="20">20px</option>
        </Select>
      </FormGroup>
    </SectionContent>
  );

  const renderGeneralSection = () => (
    <SectionContent>
      <SectionTitle>General Settings</SectionTitle>
      
      <FormGroup>
        <Label>Language</Label>
        <Select defaultValue="en">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </Select>
      </FormGroup>
      
      <FormGroup>
        <Label>Timezone</Label>
        <Select defaultValue="utc">
          <option value="utc">UTC</option>
          <option value="est">Eastern Time</option>
          <option value="pst">Pacific Time</option>
          <option value="cet">Central European Time</option>
        </Select>
      </FormGroup>
    </SectionContent>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'profile': return renderProfileSection();
      case 'notifications': return renderNotificationsSection();
      case 'security': return renderSecuritySection();
      case 'appearance': return renderAppearanceSection();
      case 'editor': return renderEditorSection();
      case 'general': return renderGeneralSection();
      default: return renderProfileSection();
    }
  };

  return (
    <SettingsContainer>
      <Header>
        <Title>Settings</Title>
        <Subtitle>Manage your account and preferences</Subtitle>
      </Header>
      
      <SettingsWrapper>
        <SettingsSidebar>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarNav>
            {settingSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <SidebarItem
                  key={section.id}
                  $active={activeSection === section.id}
                  onClick={() => setActiveSection(section.id)}
                >
                  <IconComponent />
                  <span>{section.label}</span>
                </SidebarItem>
              );
            })}
          </SidebarNav>
        </SettingsSidebar>
        
        <SettingsMain>
          {renderSection()}
        </SettingsMain>
      </SettingsWrapper>
    </SettingsContainer>
  );
};

// Styled Components
const SettingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;
`;

const Subtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  margin: 0;
`;

const SettingsWrapper = styled.div`
  display: flex;
  gap: 30px;
  background: var(--color-background);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 600px;
  border: 1px solid var(--color-border);
`;

const SettingsSidebar = styled.div`
  width: 280px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  padding: 24px 0;
`;

const SidebarTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 24px 16px;
`;

const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  cursor: pointer;
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  background-color: ${props => props.$active ? 'var(--color-surface-light)' : 'transparent'};
  border-right: ${props => props.$active ? '3px solid var(--color-primary)' : 'none'};
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--color-surface-light)' : 'var(--color-surface-light)'};
    color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-primary)'};
  }
  
  svg {
    font-size: 16px;
  }
`;

const SettingsMain = styled.div`
  flex: 1;
  padding: 24px;
`;

const SectionContent = styled.div`
  max-width: 500px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 24px 0;
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-secondary);
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-border);
    background: var(--color-surface);
  }
  
  svg {
    font-size: 12px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 14px;
  background: ${props => props.disabled ? 'var(--color-surface)' : 'var(--color-background)'};
  color: ${props => props.disabled ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)'};
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 14px;
  background: ${props => props.disabled ? 'var(--color-surface)' : 'var(--color-background)'};
  color: ${props => props.disabled ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)'};
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 14px;
  background: var(--color-background);
  color: var(--color-text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #3182ce;
  }
`;

const CheckboxLabel = styled.span`
  font-weight: 500;
  color: var(--color-text-primary);
  font-size: 14px;
`;

const CheckboxDescription = styled.span`
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-left: 24px;
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: var(--color-primary-dark);
  }
  
  svg {
    font-size: 14px;
  }
`;

export default Settings; 