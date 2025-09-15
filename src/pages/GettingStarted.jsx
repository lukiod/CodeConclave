import { useState, useEffect } from "react";
import styled from "styled-components";
import { CheckCircle, Lock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../services/projectService";
import { googleDriveService } from "../services/googleDriveService";

// steps config
const steps = [
  { id: 1, title: "How CodeConclave Works", description: "Learn the basics of how CodeConclave works and explore the features."},
  { id: 2, title: "Connect Google Drive", description: "Connect your Google Drive to save and sync your projects." },
  { id: 3, title: "Create Your Project", description: "Start your first project and explore the editor." },
];

const GettingStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [visibility, setVisibility] = useState("private");
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Drive state management
  const [googleDriveStatus, setGoogleDriveStatus] = useState({
    isConnected: false,
    tokenExpiry: null
  });
  const [isLoadingGoogleDrive, setIsLoadingGoogleDrive] = useState(false);
  const [googleDriveError, setGoogleDriveError] = useState('');
  const [googleDriveSuccess, setGoogleDriveSuccess] = useState('');

  // Load Google Drive status on component mount
  useEffect(() => {
    const initializeGoogleDrive = async () => {
      // Handle any OAuth callback from Google
      await handleGoogleDriveCallback();
      
      // Fetch the latest connection status
      await loadGoogleDriveStatus();
    };

    initializeGoogleDrive();
  }, []);

  const loadGoogleDriveStatus = async () => {
    try {
      setIsLoadingGoogleDrive(true);
      const status = await googleDriveService.getConnectionStatus();
      setGoogleDriveStatus(status);
    } catch (error) {
      setGoogleDriveError('Failed to load Google Drive status');
    } finally {
      setIsLoadingGoogleDrive(false);
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

  const handleGoogleDriveCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleDriveStatusParam = urlParams.get('googleDrive');
    const tokensParam = urlParams.get('tokens');
    const authCode = urlParams.get('code');

    if (googleDriveStatusParam === 'connected' && tokensParam) {
      try {
        const tokens = JSON.parse(decodeURIComponent(tokensParam));
        await googleDriveService.saveTokens(
          tokens.access_token,
          tokens.refresh_token,
          tokens.expiry_date
        );
        
        setGoogleDriveSuccess('Google Drive connected successfully!');
        setGoogleDriveStatus({ isConnected: true, tokenExpiry: tokens.expiry_date });
        
        // Clear URL parameters
        window.history.replaceState({}, document.title, window.location.pathname);
        return true;
      } catch (error) {
        setGoogleDriveError('Failed to save Google Drive tokens');
      }
    } else if (googleDriveStatusParam === 'error') {
      setGoogleDriveError('Failed to connect to Google Drive');
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      return true;
    } else if (authCode) {
      try {
        const tokens = await googleDriveService.exchangeCodeForTokens(authCode);
        setGoogleDriveSuccess('Google Drive connected successfully!');
        setGoogleDriveStatus({ isConnected: true, tokenExpiry: tokens.expiry_date });
      } catch (error) {
        setGoogleDriveError('Failed to complete Google Drive connection');
      } finally {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      return true;
    }
    return false;
  };

  const handleNext = async () => {
    if (currentStep === 3) {
    if (isSubmitting) return;
    if (projectName.trim()) {
      try {
        setIsSubmitting(true);
        const projectData = {
          name: projectName,
          description: projectDescription,
          // 👇 Adjust this line to match backend schema
          isPublic: visibility === "public", 
        };

        await createProject(projectData);
      } catch (err) {
        console.error("Error creating project:", err);
        alert("Failed to create project. Please try again.");
        return;
        } finally {
+        setIsSubmitting(false);
      }
    }
    navigate("/dashboard");
  } else {
     setCurrentStep((s) => s + 1);
  }
};


  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <Container>
      <Header>
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          return (
            <Step key={step.id} active={isActive}>
              <span>{step.title}</span>
              {isCompleted && <CheckCircle size={18} color="green" />}
            </Step>
          );
        })}
      </Header>

      <Content>
        {currentStep === 1 && (
          <Block>
            <h2>{steps[0].title}</h2>
            <p>{steps[0].description}</p>
            <Video
              src="https://www.youtube.com/embed/Kk5tS2fcfhs"
              title="Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Block>
        )}

        {currentStep === 2 && (
          <Block>
            <h2>{steps[1].title}</h2>
            <p>{steps[1].description}</p>
            
            {googleDriveError && <ErrorAlert>{googleDriveError}</ErrorAlert>}
            {googleDriveSuccess && <SuccessAlert>{googleDriveSuccess}</SuccessAlert>}
            
            <IntegrationBox>
              <Column>
                <h3>CodeConclave Storage</h3>
                <p>Your default workspace to store projects.</p>
                <StorageBox>Available Space: 5GB</StorageBox>
              </Column>
              <Column>
                <h3>Google Drive</h3>
                <p>Sync projects with your Google Drive.</p>
                <ConnectionStatus $connected={googleDriveStatus.isConnected}>
                  {googleDriveStatus.isConnected ? 'Connected' : 'Not Connected'}
                </ConnectionStatus>
                <ConnectBtn
                  onClick={handleGoogleDriveConnect}
                  disabled={isLoadingGoogleDrive}
                >
                  {isLoadingGoogleDrive ? 'Connecting...' : 'Connect Google Drive'}
                </ConnectBtn>
              </Column>
            </IntegrationBox>
          </Block>
        )}

        {currentStep === 3 && (
          <Block>
            <h2>{steps[2].title}</h2>
            <p>{steps[2].description}</p>

            {/* Project Name */}
            <FormGroup>
              <label>Project Name</label>
              <Input
                type="text"
                placeholder="Enter project name..."
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </FormGroup>

            {/* Description */}
            <FormGroup>
              <label>Description (optional)</label>
              <TextArea
                placeholder="Enter project description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </FormGroup>

            {/* Visibility */}
            <FormGroup>
              <label>Visibility</label>
              <VisibilityOptions>
                <VisibilityButton
                  active={visibility === "private"}
                  onClick={() => setVisibility("private")}
                >
                  <Lock size={18} />
                  <div>
                    <strong>Private</strong>
                    <p>Only you and people you share with can access</p>
                  </div>
                </VisibilityButton>
                <VisibilityButton
                  active={visibility === "public"}
                  onClick={() => setVisibility("public")}
                >
                  <Globe size={18} />
                  <div>
                    <strong>Public</strong>
                    <p>Anyone with the link can view this project</p>
                  </div>
                </VisibilityButton>
              </VisibilityOptions>
            </FormGroup>
          </Block>
        )}

        <Actions>
          {currentStep > 1 && (
            <Button secondary onClick={handleBack}>
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={isSubmitting || (currentStep === 3 && !projectName.trim())}
            aria-busy={isSubmitting}
          >
            {currentStep === 3 ? "Create Project" : "Next"}
          </Button>
        </Actions>
      </Content>
    </Container>
  );
};

// ---------------- styled-components ----------------
const Container = styled.div`
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border: 2px solid ${(props) => (props.active ? "#3182ce" : "#ddd")};
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#3182ce" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: 500;

  svg {
    margin-left: 6px;
  }
`;

const Content = styled.div`
  background: #fafafa;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #eee;
`;

const Block = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    color: #222;
  }

  p {
    margin-bottom: 15px;
    color: #555;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-top: 10px;
`;

const IntegrationBox = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 12px;
  }
`;

const StorageBox = styled.div`
  background: #f0f4ff;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
`;

const ConnectBtn = styled.button`
  padding: 10px 16px;
  border: none;
  background: #3182ce;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background: #2563eb;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;

const ConnectionStatus = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
  background-color: ${props => props.$connected ? '#c6f6d5' : '#fed7d7'};
  color: ${props => props.$connected ? '#2f855a' : '#c53030'};
`;

const ErrorAlert = styled.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SuccessAlert = styled.div`
  background-color: #c6f6d5;
  color: #2f855a;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    color: #333;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  color: #222;
  background: white;

  &:focus {
    border-color: #3182ce;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  color: #222;
  background: white;
  resize: none;
  min-height: 100px;

  &:focus {
    border-color: #3182ce;
  }
`;

const VisibilityOptions = styled.div`
  display: flex;
  gap: 20px;
`;

const VisibilityButton = styled.button`
  flex: 1;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;
  border: ${(props) => (props.active ? "2px solid #3182ce" : "1px solid #ccc")};
  background: ${(props) => (props.active ? "#e0f2fe" : "white")};
  cursor: pointer;
  text-align: left;

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #555;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  background: ${(props) => (props.secondary ? "#e2e8f0" : "#3182ce")};
  color: ${(props) => (props.secondary ? "#333" : "white")};

  &:hover {
    background: ${(props) => (props.secondary ? "#cbd5e1" : "#2563eb")};
  }
`;

export default GettingStarted;
