// client/src/pages/HomePage.jsx
import { useState } from 'react';
import styled from 'styled-components';
import LoginComponent from '../components/Auth/Login';
import RegisterComponent from '../components/Auth/Register';
import { FaCode } from 'react-icons/fa';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <HomeContainer>
      <ContentContainer>
        <LeftPanel>
          <LogoContainer>
            <LogoIcon>
              <FaCode />
            </LogoIcon>
            <LogoText>Code Editor</LogoText>
          </LogoContainer>
          
          <FeaturesList>
            <FeatureTitle>Features</FeatureTitle>
            <Feature>
              <FeatureName>Multiple Languages</FeatureName>
              <FeatureDescription>
                Support for JavaScript, Python, HTML, CSS and many more
              </FeatureDescription>
            </Feature>
            <Feature>
              <FeatureName>Jupyter Notebooks</FeatureName>
              <FeatureDescription>
                Built-in support for .ipynb files with interactive cells
              </FeatureDescription>
            </Feature>
            <Feature>
              <FeatureName>Collaboration</FeatureName>
              <FeatureDescription>
                Share your projects with team members and collaborate
              </FeatureDescription>
            </Feature>
            <Feature>
              <FeatureName>Project Management</FeatureName>
              <FeatureDescription>
                Organize your code into projects with multiple files
              </FeatureDescription>
            </Feature>
          </FeaturesList>
        </LeftPanel>
        
        <RightPanel>
          <TabContainer>
            <TabButton 
              isActive={activeTab === 'login'} 
              onClick={() => setActiveTab('login')}
            >
              Log In
            </TabButton>
            <TabButton 
              isActive={activeTab === 'register'} 
              onClick={() => setActiveTab('register')}
            >
              Sign Up
            </TabButton>
          </TabContainer>
          
          <FormContainer>
            {activeTab === 'login' ? (
              <LoginComponent />
            ) : (
              <RegisterComponent />
            )}
          </FormContainer>
        </RightPanel>
      </ContentContainer>
      
      <Footer>
        <FooterText>© {new Date().getFullYear()} Code Editor. All rights reserved.</FooterText>
      </Footer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 5;
  background-color: #2d3748;
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const LogoIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #63b3ed;
`;

const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #63b3ed;
`;

const Feature = styled.div`
  margin-bottom: 1.5rem;
`;

const FeatureName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #a0aec0;
  line-height: 1.5;
`;

const RightPanel = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 992px) {
    padding: 1rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 400px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${props => props.isActive ? '#3182ce' : '#e2e8f0'};
  color: ${props => props.isActive ? 'white' : '#4a5568'};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  
  &:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  &:hover {
    background-color: ${props => props.isActive ? '#2c5282' : '#cbd5e0'};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-top: 1px solid #e2e8f0;
`;

const FooterText = styled.p`
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
`;

export default HomePage;