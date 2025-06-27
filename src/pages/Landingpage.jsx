import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);
  
  const handleGetStarted = () => {
    navigate('/home');
  };
  
  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundGradient />
        <CodePatternOverlay />
      </BackgroundWrapper>
      
      <ContentWrapper loaded={loaded}>
        <Logo>
          <LogoIcon>
            <FaCode />
          </LogoIcon>
          <LogoText>Code Conclave</LogoText>
        </Logo>
        
        <HeadlineWrapper>
          <Headline>Create. Code. Collaborate.</Headline>
        </HeadlineWrapper>
        
        <ButtonWrapper>
          <GetStartedButton onClick={handleGetStarted}>
            <span>Get Started</span>
            <ArrowIcon>
              <FaArrowRight />
            </ArrowIcon>
          </GetStartedButton>
        </ButtonWrapper>
      </ContentWrapper>
      
      <FloatingElements>
        <FloatingShape shape="circle" size="100px" top="10%" left="10%" delay="0" />
        <FloatingShape shape="square" size="50px" top="20%" left="80%" delay="0.5" />
        <FloatingShape shape="triangle" size="80px" top="70%" left="15%" delay="1" />
        <FloatingShape shape="square" size="70px" top="60%" left="75%" delay="1.5" />
        <FloatingShape shape="circle" size="50px" top="85%" left="50%" delay="2" />
      </FloatingElements>
    </Container>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transform: translateY(${props => (props.loaded ? 0 : '30px')});
  transition: opacity 1.2s ease, transform 1.2s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease forwards;
`;

const LogoIcon = styled.div`
  font-size: 3rem;
  color: #60a5fa;
  margin-right: 0.5rem;
`;

const LogoText = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #60a5fa;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeadlineWrapper = styled.div`
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const Headline = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #f8fafc;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ButtonWrapper = styled.div`
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

const GetStartedButton = styled.button`
  background: linear-gradient(45deg, #238636, #2ea043);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  box-shadow: 0 4px 20px rgba(35, 134, 54, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(35, 134, 54, 0.4);
    background: linear-gradient(45deg, #1f7e34, #28a745);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ArrowIcon = styled.div`
  transition: transform 0.3s;
  
  ${GetStartedButton}:hover & {
    transform: translateX(3px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0.1;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  ${props => {
    if (props.shape === 'circle') {
      return `
        border-radius: 50%;
        background: linear-gradient(45deg, #60a5fa, #93c5fd);
      `;
    } else if (props.shape === 'square') {
      return `
        background: linear-gradient(45deg, #22c55e, #34d399);
        border-radius: 8px;
      `;
    } else if (props.shape === 'triangle') {
      return `
        width: 0;
        height: 0;
        border-left: ${parseInt(props.size) / 2}px solid transparent;
        border-right: ${parseInt(props.size) / 2}px solid transparent;
        border-bottom: ${props.size} solid #60a5fa;
      `;
    }
  }}
`;

export default LandingPage;