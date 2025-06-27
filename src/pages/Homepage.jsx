import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgotPassword from '../components/Auth/ForgotPassword';
import OTPVerification from '../components/Auth/OTPVerification';
import { FaCode, FaLaptopCode, FaUserFriends, FaLayerGroup, FaFlask } from 'react-icons/fa';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [verificationUserId, setVerificationUserId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [resetToken, setResetToken] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <HomeContainer>
      <BackgroundWrapper>
        <BackgroundGradient />
        <CodePatternOverlay />
      </BackgroundWrapper>

      <ContentContainer loaded={loaded}>
        <LeftPanel>
          <LogoContainer>
            <LogoIcon>
              <FaCode />
            </LogoIcon>
            <LogoText>Code Conclave</LogoText>
          </LogoContainer>
          
          <FeaturesList>
            <Feature>
              <FeatureIcon>
                <FaLaptopCode />
              </FeatureIcon>
              <FeatureContent>
                <FeatureName>Multiple Languages</FeatureName>
                <FeatureDescription>
                  Support for JavaScript, Python, HTML, CSS and many more
                </FeatureDescription>
              </FeatureContent>
            </Feature>
            
            <Feature>
              <FeatureIcon>
                <FaFlask />
              </FeatureIcon>
              <FeatureContent>
                <FeatureName>Jupyter Notebooks</FeatureName>
                <FeatureDescription>
                  Built-in support for .ipynb files with interactive cells
                </FeatureDescription>
              </FeatureContent>
            </Feature>
            
            <Feature>
              <FeatureIcon>
                <FaUserFriends />
              </FeatureIcon>
              <FeatureContent>
                <FeatureName>Collaboration</FeatureName>
                <FeatureDescription>
                  Share your projects with team members and collaborate
                </FeatureDescription>
              </FeatureContent>
            </Feature>
            
            <Feature>
              <FeatureIcon>
                <FaLayerGroup />
              </FeatureIcon>
              <FeatureContent>
                <FeatureName>Project Management</FeatureName>
                <FeatureDescription>
                  Organize your code into projects with multiple files
                </FeatureDescription>
              </FeatureContent>
            </Feature>
          </FeaturesList>
        </LeftPanel>
        
        <RightPanel>
          <AuthContainer>
            {!showForgotPassword && !showOTPVerification ? (
              <>
                <TabContainer>
                  <TabButton 
                    $isActive={activeTab === 'login'}
                    onClick={() => setActiveTab('login')}
                  >
                    Log In
                  </TabButton>
                  <TabButton 
                    $isActive={activeTab === 'register'}
                    onClick={() => setActiveTab('register')}
                  >
                    Sign Up
                  </TabButton>
                </TabContainer>
                
                {activeTab === 'login' && (
                  <Login 
                    onForgotPassword={() => {
                      setShowForgotPassword(true);
                      setActiveTab(null);
                    }}
                  />
                )}
                {activeTab === 'register' && <Register />}
              </>
            ) : showOTPVerification ? (
              <OTPVerification 
                resetToken={resetToken}
                onBack={() => {
                  setShowOTPVerification(false);
                  setActiveTab('login');
                }}
              />
            ) : (
              <ForgotPassword 
                onBack={() => {
                  setShowForgotPassword(false);
                  setActiveTab('login');
                }}
                onSuccess={(token) => {
                  setResetToken(token);
                  setShowForgotPassword(false);
                  setShowOTPVerification(true);
                }}
              />
            )}
          </AuthContainer>
        </RightPanel>
      </ContentContainer>
      
      <Footer>
        <FooterText>© {new Date().getFullYear()} Code Conclave. All rights reserved.</FooterText>
      </Footer>
    </HomeContainer>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #0f172a, #1e293b, #0f172a);
  background-size: 200% 200%;
  animation: ${gradient} 15s ease infinite;
`;

const CodePatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transform: translateY(${props => (props.loaded ? 0 : '20px')});
  transition: opacity 0.8s ease, transform 0.8s ease;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 5;
  background-color: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
  border-right: 1px solid rgba(99, 102, 241, 0.2);
  
  @media (max-width: 992px) {
    padding: 2rem;
    border-right: none;
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const LogoIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #60a5fa;
`;

const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #60a5fa;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 500px;
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: ${props => 0.2 + props.index * 0.1}s;
  text-align: left;
`;

const FeatureIcon = styled.div`
  font-size: 1.8rem;
  color: #60a5fa;
  background-color: rgba(96, 165, 250, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #f8fafc;
`;

const FeatureDescription = styled.p`
  color: #94a3b8;
  line-height: 1.5;
  margin: 0;
`;

const RightPanel = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.3s;
  
  @media (max-width: 992px) {
    padding: 1rem;
  }
`;

const AuthContainer = styled.div`
  background-color: rgba(30, 41, 59, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(99, 102, 241, 0.2);
  background: rgba(15, 23, 42, 0.5);
`;

const TabButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${props => props.$isActive ? '#60a5fa' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : '#cbd5e1'};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.$isActive ? '#3b82f6' : 'rgba(96, 165, 250, 0.1)'};
    color: ${props => props.$isActive ? 'white' : '#60a5fa'};
  }
`;

const FormContainer = styled.div`
  width: 100%;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: rgba(15, 23, 42, 0.5);
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  z-index: 1;
`;

const FooterText = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
`;

export default HomePage;