import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { changePassword } from '../../services/authService';
import { googleDriveService } from '../../services/googleDriveService';
import { validatePassword } from '../../utils/validators';
import styled from 'styled-components';
import {
  FaUser,
  FaBell,
  FaLock,
  FaPalette,
  FaCode,
  FaGlobe,
  FaSave,
  FaEdit,
  FaGoogle,
  FaCloud,
  FaLink,
  FaUnlink,
  FaUpload,
  FaDownload,
  FaList,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Settings = () => {
  const { currentUser } = useContext(AuthContext);
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showConnectPrompt, setShowConnectPrompt] = useState(false);

  // Add mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      collaboration: true,
    },
  });

  // Add password state management
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Google Drive state management
  const [googleDriveStatus, setGoogleDriveStatus] = useState({
    isConnected: false,
    tokenExpiry: null,
  });
  const [isLoadingGoogleDrive, setIsLoadingGoogleDrive] = useState(false);
  const [googleDriveError, setGoogleDriveError] = useState('');
  const [googleDriveSuccess, setGoogleDriveSuccess] = useState('');
  const [googleDriveFiles, setGoogleDriveFiles] = useState([]);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  // Close mobile menu when section changes
  const handleSectionChange = sectionId => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Sync form data with current theme when theme changes
  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      theme: currentTheme,
    }));
  }, [currentTheme]);

  // Load Google Drive status on component mount
  useEffect(() => {
    const initializeSettings = async () => {
      // First, handle any OAuth callback from Google
      const wasCallback = await handleGoogleDriveCallback();

      // Fetch the latest connection status
      const status = await loadGoogleDriveStatus();

      // If we were redirected from login, and we are not already connected,
      // and we didn't just handle a callback, then show a prompt.
      if (
        location.state?.from === 'login' &&
        status &&
        !status.isConnected &&
        !wasCallback
      ) {
        setActiveSection('integrations');
        setShowConnectPrompt(true);
      }
    };

    initializeSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run this initialization logic only once on mount

  // Load Google Drive files when connected
  useEffect(() => {
    if (googleDriveStatus.isConnected) {
      loadGoogleDriveFiles();
    }
  }, [googleDriveStatus.isConnected]);

  const loadGoogleDriveStatus = async () => {
    try {
      setIsLoadingGoogleDrive(true);
      const status = await googleDriveService.getConnectionStatus();
      setGoogleDriveStatus(status);
      return status;
    } catch (error) {
      setGoogleDriveError('Failed to load Google Drive status');
      return null;
    } finally {
      setIsLoadingGoogleDrive(false);
    }
  };

  const loadGoogleDriveFiles = async () => {
    try {
      setIsLoadingFiles(true);
      const files = await googleDriveService.listFiles();
      setGoogleDriveFiles(files);
    } catch (error) {
      setGoogleDriveError('Failed to load Google Drive files');
    } finally {
      setIsLoadingFiles(false);
    }
  };

  const handleGoogleDriveConnect = async () => {
    setIsLoadingGoogleDrive(true);
    setGoogleDriveError('');
    try {
      const authUrl = await googleDriveService.getAuthUrl();
      if (authUrl) {
        window.location.href = authUrl;
      } else {
        throw new Error('Did not receive a valid authorization URL.');
      }
    } catch (error) {
      setGoogleDriveError('Failed to start Google Drive connection.');
      setIsLoadingGoogleDrive(false);
    }
  };

  const handleGoogleDriveDisconnect = async () => {
    try {
      setIsLoadingGoogleDrive(true);
      setGoogleDriveError('');
      await googleDriveService.disconnect();
      setGoogleDriveStatus({ isConnected: false, tokenExpiry: null });
      setGoogleDriveFiles([]);
      setGoogleDriveSuccess('Google Drive disconnected successfully');
    } catch (error) {
      setGoogleDriveError('Failed to disconnect Google Drive');
    } finally {
      setIsLoadingGoogleDrive(false);
    }
  };

  const handleGoogleDriveCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleDriveStatusParam = urlParams.get('googleDrive');
    const tokensParam = urlParams.get('tokens');

    if (googleDriveStatusParam === 'connected' && tokensParam) {
      try {
        const tokens = JSON.parse(decodeURIComponent(tokensParam));
        await googleDriveService.saveTokens(
          tokens.access_token,
          tokens.refresh_token,
          tokens.expiry_date
        );

        setGoogleDriveSuccess('Google Drive connected successfully!');
        setGoogleDriveStatus({
          isConnected: true,
          tokenExpiry: tokens.expiry_date,
        });

        // Clear URL parameters
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
        return true; // It was a callback
      } catch (error) {
        setGoogleDriveError('Failed to save Google Drive tokens');
      }
    } else if (googleDriveStatusParam === 'error') {
      setGoogleDriveError('Failed to connect to Google Drive');
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      return true; // It was a callback, though a failed one
    }
    return false; // Not a callback
  };

  const handleInputChange = e => {
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
          [child]: type === 'checkbox' ? checked : value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  // Add password change handlers
  const handlePasswordChange = e => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user types
    if (passwordError) setPasswordError('');
    if (passwordSuccess) setPasswordSuccess('');
  };

  const handlePasswordUpdate = async e => {
    e.preventDefault();

    // Validation
    if (!passwordData.currentPassword) {
      setPasswordError('Current password is required');
      return;
    }

    // Validate new password
    const passwordValidation = validatePassword(passwordData.newPassword);
    if (!passwordValidation.isValid) {
      setPasswordError(passwordValidation.message);
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      setPasswordError('New password must be different from current password');
      return;
    }

    setIsUpdatingPassword(true);
    setPasswordError('');

    try {
      await changePassword(
        passwordData.currentPassword,
        passwordData.newPassword
      );

      setPasswordSuccess('Password updated successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {
      setPasswordError(
        error.response?.data?.message ||
          error.message ||
          'Failed to update password'
      );
      // Clear password fields on error for security
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } finally {
      setIsUpdatingPassword(false);
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
    { id: 'integrations', label: 'Integrations', icon: FaCloud },
    { id: 'general', label: 'General', icon: FaGlobe },
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
          <CheckboxDescription>
            Receive email updates about your projects
          </CheckboxDescription>
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
          <CheckboxDescription>
            Receive browser notifications
          </CheckboxDescription>
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
          <CheckboxDescription>
            Get notified when someone shares a project with you
          </CheckboxDescription>
        </CheckboxGroup>
      </FormGroup>
    </SectionContent>
  );

  const renderSecuritySection = () => (
    <SectionContent>
      <SectionTitle>Security Settings</SectionTitle>

      {passwordError && <ErrorAlert>{passwordError}</ErrorAlert>}
      {passwordSuccess && <SuccessAlert>{passwordSuccess}</SuccessAlert>}

      <form onSubmit={handlePasswordUpdate}>
        <FormGroup>
          <Label>Current Password</Label>
          <Input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Enter current password"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>New Password</Label>
          <Input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            required
            minLength="8"
          />
          <PasswordRequirements>
            <RequirementTitle>Password must contain:</RequirementTitle>
            <RequirementList>
              <RequirementItem $valid={passwordData.newPassword.length >= 8}>
                • At least 8 characters
              </RequirementItem>
              <RequirementItem $valid={/[a-z]/.test(passwordData.newPassword)}>
                • One lowercase letter (a-z)
              </RequirementItem>
              <RequirementItem $valid={/[A-Z]/.test(passwordData.newPassword)}>
                • One uppercase letter (A-Z)
              </RequirementItem>
              <RequirementItem $valid={/[0-9]/.test(passwordData.newPassword)}>
                • One number (0-9)
              </RequirementItem>
              <RequirementItem
                $valid={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
                  passwordData.newPassword
                )}
              >
                • One special character (!@#$%^&*()_+-=[]{'{}'}|;:,.{'<>'}?)
              </RequirementItem>
            </RequirementList>
          </PasswordRequirements>
        </FormGroup>

        <FormGroup>
          <Label>Confirm New Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm new password"
            required
          />
        </FormGroup>

        <SaveButton type="submit" disabled={isUpdatingPassword}>
          <FaSave />
          {isUpdatingPassword ? 'Updating...' : 'Update Password'}
        </SaveButton>
      </form>
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

  const renderIntegrationsSection = () => (
    <SectionContent>
      <SectionTitle>Google Drive Integration</SectionTitle>

      {showConnectPrompt && (
        <ConnectPrompt>
          <PromptText>
            <strong>Welcome!</strong> Connect your Google Drive to sync and back
            up your projects.
          </PromptText>
          <ConnectButton
            onClick={handleGoogleDriveConnect}
            disabled={isLoadingGoogleDrive}
          >
            <FaLink />
            {isLoadingGoogleDrive ? 'Connecting...' : 'Connect Now'}
          </ConnectButton>
        </ConnectPrompt>
      )}

      {googleDriveError && <ErrorAlert>{googleDriveError}</ErrorAlert>}
      {googleDriveSuccess && <SuccessAlert>{googleDriveSuccess}</SuccessAlert>}

      <FormGroup>
        <Label>Google Drive Connection</Label>
        <IntegrationCard>
          <IntegrationHeader>
            <IntegrationIcon>
              <FaGoogle />
            </IntegrationIcon>
            <IntegrationInfo>
              <IntegrationName>Google Drive</IntegrationName>
              <IntegrationDescription>
                Sync your projects with Google Drive for backup and
                collaboration
              </IntegrationDescription>
            </IntegrationInfo>
            <IntegrationStatus $connected={googleDriveStatus.isConnected}>
              {googleDriveStatus.isConnected ? 'Connected' : 'Not Connected'}
            </IntegrationStatus>
          </IntegrationHeader>

          {!googleDriveStatus.isConnected ? (
            <ConnectButton
              onClick={handleGoogleDriveConnect}
              disabled={isLoadingGoogleDrive}
            >
              <FaLink />
              {isLoadingGoogleDrive ? 'Connecting...' : 'Connect Google Drive'}
            </ConnectButton>
          ) : (
            <IntegrationActions>
              <IntegrationActionButton
                onClick={loadGoogleDriveFiles}
                disabled={isLoadingFiles}
              >
                <FaList />
                {isLoadingFiles ? 'Loading...' : 'Refresh Files'}
              </IntegrationActionButton>
              <DisconnectButton
                onClick={handleGoogleDriveDisconnect}
                disabled={isLoadingGoogleDrive}
              >
                <FaUnlink />
                {isLoadingGoogleDrive ? 'Disconnecting...' : 'Disconnect'}
              </DisconnectButton>
            </IntegrationActions>
          )}
        </IntegrationCard>
      </FormGroup>

      {googleDriveStatus.isConnected && googleDriveFiles.length > 0 && (
        <FormGroup>
          <Label>Recent Files</Label>
          <FileList>
            {googleDriveFiles.slice(0, 5).map(file => (
              <FileItem key={file.id}>
                <FileIcon>
                  {file.mimeType === 'application/vnd.google-apps.folder' ? (
                    <FaCloud />
                  ) : (
                    <FaCode />
                  )}
                </FileIcon>
                <FileInfo>
                  <FileName>{file.name}</FileName>
                  <FileMeta>
                    {file.size
                      ? `${(file.size / 1024).toFixed(1)} KB`
                      : 'Folder'}{' '}
                    •{new Date(file.modifiedTime).toLocaleDateString()}
                  </FileMeta>
                </FileInfo>
                <FileActions>
                  <FileActionButton>
                    <FaDownload />
                  </FileActionButton>
                </FileActions>
              </FileItem>
            ))}
          </FileList>
        </FormGroup>
      )}

      {googleDriveStatus.isConnected &&
        googleDriveFiles.length === 0 &&
        !isLoadingFiles && (
          <FormGroup>
            <EmptyState>
              <FaCloud />
              <EmptyStateText>No files found in Google Drive</EmptyStateText>
              <EmptyStateDescription>
                Upload files to your Google Drive to see them here
              </EmptyStateDescription>
            </EmptyState>
          </FormGroup>
        )}
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
      case 'profile':
        return renderProfileSection();
      case 'notifications':
        return renderNotificationsSection();
      case 'security':
        return renderSecuritySection();
      case 'appearance':
        return renderAppearanceSection();
      case 'editor':
        return renderEditorSection();
      case 'integrations':
        return renderIntegrationsSection();
      case 'general':
        return renderGeneralSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <SettingsContainer>
      <Header>
        <HeaderTop>
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            $isOpen={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
          <div>
            <Title>Settings</Title>
            <Subtitle>Manage your account and preferences</Subtitle>
          </div>
        </HeaderTop>
      </Header>

      <SettingsWrapper>
        <MobileOverlay
          $isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <SettingsSidebar $isOpen={isMobileMenuOpen}>
          <SidebarContent>
            <SidebarTitle>Categories</SidebarTitle>
            <SidebarNav>
              {settingSections.map(section => {
                const IconComponent = section.icon;
                return (
                  <SidebarItem
                    key={section.id}
                    $active={activeSection === section.id}
                    onClick={() => handleSectionChange(section.id)}
                  >
                    <IconComponent />
                    <span>{section.label}</span>
                  </SidebarItem>
                );
              })}
            </SidebarNav>
          </SidebarContent>
        </SettingsSidebar>

        <SettingsMain $isMobileMenuOpen={isMobileMenuOpen}>
          {renderSection()}
        </SettingsMain>
      </SettingsWrapper>
    </SettingsContainer>
  );
};

// Enhanced Styled Components with responsive design
const SettingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: var(--color-surface);
  border: none;
  border-radius: 8px;
  padding: 12px;
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background: var(--color-surface-light);
    border-color: var(--color-primary);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
  }

  svg {
    transition: transform 0.2s ease;
    transform: ${props => (props.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const Subtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
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
  position: relative;

  @media (max-width: 768px) {
    gap: 0;
    flex-direction: column;
  }
`;

const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${props => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const SettingsSidebar = styled.div`
  width: 280px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  flex-shrink: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 50px;
    left: 0;
    height: 100vh;
    width: 250px;
    max-width: 85vw;
    z-index: 1;
    transform: translateX(${props => (props.$isOpen ? '0' : '-100%')});
    transition: transform 300ms ease-in-out;
    border-right: none;
    box-shadow: ${props =>
      props.$isOpen ? '2px 0 10px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const SidebarContent = styled.div`
  padding: 24px 8px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

const SidebarTitle = styled.h3`
  position: relative;
  font-size: 1.3rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.5px;
  margin: 0 20px 21px;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    left: -20px;
    bottom: 0;
    height: 1px;
    width: calc(100% + 40px); /* Expand to full width */
    background-color: var(--color-border);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0 15px 21px;
  }
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
  color: ${props =>
    props.$active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  background-color: ${props =>
    props.$active ? 'var(--color-surface-light)' : 'transparent'};
  border-left: ${props =>
    props.$active ? '3px solid var(--color-primary)' : 'none'};
  font-weight: ${props => (props.$active ? '600' : '400')};
  transition: all 0.2s;
  min-height: 44px; // Better touch targets on mobile

  &:hover {
    background-color: ${props =>
      props.$active
        ? 'var(--color-surface-light)'
        : 'var(--color-surface-light)'};
    color: ${props =>
      props.$active ? 'var(--color-primary)' : 'var(--color-text-primary)'};
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    font-size: 16px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 15px;
    border-radius: 8px;

    svg {
      font-size: 16px;
      color: var(--color-text-tertiary);
      flex-shrink: 0;
    }
  }
`;

const SettingsMain = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px 16px;
    transition: opacity 0.3s ease;
    opacity: ${props => (props.$isMobileMenuOpen ? '0.3' : '1')};
    pointer-events: ${props => (props.$isMobileMenuOpen ? 'none' : 'auto')};
  }
`;

const SectionContent = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  min-height: 44px;

  &:hover {
    border-color: var(--color-border);
    background: var(--color-surface);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    align-self: stretch;
    justify-content: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 14px;
  background: ${props =>
    props.disabled ? 'var(--color-surface)' : 'var(--color-background)'};
  color: ${props =>
    props.disabled
      ? 'var(--color-text-tertiary)'
      : 'var(--color-text-primary)'};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px; // Prevents zoom on iOS
    border-radius: 8px;
    min-height: 44px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 14px;
  background: ${props =>
    props.disabled ? 'var(--color-surface)' : 'var(--color-background)'};
  color: ${props =>
    props.disabled
      ? 'var(--color-text-tertiary)'
      : 'var(--color-text-primary)'};
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
    border-radius: 8px;
    min-height: 120px;
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
  transition: all 0 .2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
    border-radius: 8px;
    min-height: 44px;
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
  padding: 8px 0;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    accent-color: var(--color-primary);

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

const CheckboxLabel = styled.span`
  font-weight: 500;
  color: var(--color-text-primary);
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CheckboxDescription = styled.span`
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-left: 24px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 26px;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  font-size: 14px;

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

// Add error and success alert styled components
const ErrorAlert = styled.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border-left: 4px solid #c53030;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

const SuccessAlert = styled.div`
  background-color: #c6f6d5;
  color: #2f855a;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border-left: 4px solid #2f855a;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

const PasswordRequirements = styled.div`
  margin-top: 8px;
  padding: 12px;
  background: var(--color-surface);
  border-radius: 6px;
  border: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 8px;
  }
`;

const RequirementTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RequirementItem = styled.li`
  margin-bottom: 4px;
  color: ${props =>
    props.$valid ? 'var(--color-success)' : 'var(--color-text-secondary)'};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: ${props => (props.$valid ? '"✓"' : '"○"')};
    font-weight: bold;
    color: ${props =>
      props.$valid ? 'var(--color-success)' : 'var(--color-text-tertiary)'};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const IntegrationCard = styled.div`
  background-color: var(--color-surface);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 12px;
  }
`;

const IntegrationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const IntegrationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 18px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
`;

const IntegrationInfo = styled.div`
  flex: 1;
`;

const IntegrationName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IntegrationDescription = styled.p`
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const IntegrationStatus = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${props =>
    props.$connected ? 'var(--color-success)' : 'var(--color-text-secondary)'};
  padding: 6px 12px;
  border-radius: 16px;
  background: ${props =>
    props.$connected ? 'var(--color-success-light)' : 'var(--color-surface)'};
  border: 1px solid
    ${props =>
      props.$connected ? 'var(--color-success)' : 'var(--color-border)'};

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    align-self: flex-start;
  }
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

const IntegrationActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

const IntegrationActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: var(--color-surface-light);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

const DisconnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: 1px solid var(--color-error);
  color: var(--color-error);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: var(--color-error);
    color: white;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--color-border);
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 250px;
    border-radius: 12px;
  }
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--color-border);
  gap: 16px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }
`;

const FileIcon = styled.div`
  width: 24px;
  height: 24px;
  color: var(--color-text-secondary);
  font-size: 16px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 18px;
  }
`;

const FileInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const FileName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }
`;

const FileMeta = styled.p`
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FileActionButton = styled.button`
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: var(--color-surface-light);
  }

  @media (max-width: 768px) {
    min-width: 44px;
    min-height: 44px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 2px dashed var(--color-border);
  border-radius: 8px;
  text-align: center;

  svg {
    font-size: 48px;
    color: var(--color-text-tertiary);
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
    border-radius: 12px;

    svg {
      font-size: 56px;
      margin-bottom: 20px;
    }
  }
`;

const EmptyStateText = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
`;

const EmptyStateDescription = styled.p`
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ConnectPrompt = styled.div`
  background-color: var(--color-surface-light);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const PromptText = styled.p`
  margin: 0;
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Settings;
