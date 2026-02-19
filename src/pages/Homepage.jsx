import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Terminal, Cpu, Globe, Command, ShieldCheck } from 'lucide-react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgotPassword from '../components/Auth/ForgotPassword';
import OTPVerification from '../components/Auth/OTPVerification';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [resetToken, setResetToken] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageContainer>
      <BackgroundOverlay />
      <ContentWrapper loaded={loaded}>

        <LeftPanel>
          <LogoSection>
            <LogoIcon>
              <Command size={40} color="#3b82f6" />
            </LogoIcon>
            <BrandTitle>CodeConclave</BrandTitle>
            <BrandSubtitle>AI-Native Development Environment</BrandSubtitle>
          </LogoSection>

          <FeatureList>
            <FeatureItem delay="0.1s">
              <IconBox color="#60a5fa"><Terminal size={20} /></IconBox>
              <div>
                <FeatureTitle>Cloud Terminal</FeatureTitle>
                <FeatureText>Full bash access. Deploy instantly.</FeatureText>
              </div>
            </FeatureItem>

            <FeatureItem delay="0.2s">
              <IconBox color="#a78bfa"><Cpu size={20} /></IconBox>
              <div>
                <FeatureTitle>AI Co-Pilot</FeatureTitle>
                <FeatureText>Context-aware code generation.</FeatureText>
              </div>
            </FeatureItem>

            <FeatureItem delay="0.3s">
              <IconBox color="#34d399"><Globe size={20} /></IconBox>
              <div>
                <FeatureTitle>Global Edge</FeatureTitle>
                <FeatureText>Low-latency workspace anywhere.</FeatureText>
              </div>
            </FeatureItem>
          </FeatureList>

          <TrustBadge>
            <ShieldCheck size={16} color="#10b981" />
            <span>Enterprise-Grade Security</span>
          </TrustBadge>
        </LeftPanel>

        <RightPanel>
          <AuthCard>
            {!showForgotPassword && !showOTPVerification ? (
              <>
                <TabHeader>
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
                </TabHeader>

                <FormArea>
                  {activeTab === 'login' && (
                    <Login
                      onForgotPassword={() => {
                        setShowForgotPassword(true);
                        setActiveTab(null);
                      }}
                    />
                  )}
                  {activeTab === 'register' && <Register />}
                </FormArea>
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
          </AuthCard>
        </RightPanel>

      </ContentWrapper>

      <Footer>
        <p>© 2024 CodeConclave. All systems operational.</p>
      </Footer>
    </PageContainer>
  );
};

// -- Animations --
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// -- Styled Components --
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.1), transparent 40%);
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.2;
    mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  }
`;

const ContentWrapper = styled.div`
  z-index: 1;
  max-width: 1000px;
  width: 90%;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity 1s ease;
  padding: 40px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  max-width: 450px;
  animation: ${fadeIn} 0.8s ease-out;
  
  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

const LogoSection = styled.div`
  margin-bottom: 3rem;
`;

const LogoIcon = styled.div`
  margin-bottom: 1rem;
  display: inline-block;
  padding: 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  animation: ${float} 6s ease-in-out infinite;
`;

const BrandTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0 0 0.5rem;
  color: white;
`;

const BrandSubtitle = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  margin: 0;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 900px) {
    align-items: center;
    text-align: left; /* Keep text aligned left inside the centered container */
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: ${fadeIn} 0.8s ease-out backwards;
  animation-delay: ${props => props.delay};
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  flex-shrink: 0;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.25rem;
`;

const FeatureText = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin: 0;
`;

const TrustBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 99px;
  color: #34d399;
  font-size: 0.85rem;
  font-weight: 500;
`;

const RightPanel = styled.div`
  flex: 1;
  max-width: 420px;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out backwards;
  animation-delay: 0.4s;
`;

const AuthCard = styled.div`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

const TabHeader = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  background: ${props => props.$isActive ? '#3b82f6' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : '#94a3b8'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: white;
  }
`;

const FormArea = styled.div`
  /* Overrides for children components to fit dark theme if needed */
  & form {
    gap: 1.25rem;
  }
  
  & input {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
    color: white;
    
    &:focus {
      border-color: #3b82f6;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  
  & label {
    color: #cbd5e1;
    font-size: 0.9rem;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  color: #475569;
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
  
  @media (max-width: 900px) {
    position: relative;
    margin-top: 2rem;
  }
`;

export default HomePage;