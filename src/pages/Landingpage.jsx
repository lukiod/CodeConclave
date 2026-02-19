import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { Code, Terminal, Zap, Shield, ChevronRight, Play, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTryFree = () => {
    navigate('/home');
  };

  return (
    <PageContainer>
      <Navbar $scrolled={scrolled}>
        <NavContent>
          <Logo onClick={() => navigate('/')}>
            <Code size={32} color="#3b82f6" />
            <BrandName>CodeConclave</BrandName>
          </Logo>
          <NavLinks>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#demo">Demo</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </NavLinks>
          <NavActions>

            <PrimaryButton onClick={handleTryFree}>Get Started</PrimaryButton>
          </NavActions>
        </NavContent>
      </Navbar>

      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <Badge>
            <Zap size={14} fill="currentColor" />
            <span>v2.0 is now live</span>
          </Badge>
          <Headline>
            Run While you <GradientText>sleep</GradientText>
          </Headline>
          <SubHeadline>
            Empower your teams with AI software engineers who clear the backlog with your laptop closed.
            Multiply engineering output, all inside your secure VPC.
          </SubHeadline>

          <ButtonGroup>
            <HeroButtonPrimary onClick={handleTryFree}>
              Start Coding Now <ChevronRight size={18} />
            </HeroButtonPrimary>
            <HeroButtonSecondary href="#demo">
              <Play size={18} /> Watch Demo
            </HeroButtonSecondary>
          </ButtonGroup>

          <StatsContainer>
            <StatItem>
              <StatValue>10x</StatValue>
              <StatLabel>Faster Ship Cycles</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatValue>24/7</StatValue>
              <StatLabel>Active Development</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatValue>100%</StatValue>
              <StatLabel>Secure Environment</StatLabel>
            </StatItem>
          </StatsContainer>
        </HeroContent>
      </HeroSection>

      <TrustedSection>
        <TrustedLabel>CREATED BY</TrustedLabel>
        <LogoGrid>
          <CompanyLogo style={{ opacity: 1, fontSize: '1.5rem', color: '#60a5fa' }}>MOHAK</CompanyLogo>
        </LogoGrid>
      </TrustedSection>

      <FeaturesSection id="features">
        <SectionHeader>
          <SectionTitle>Supercharge your workflow</SectionTitle>
          <SectionSubtitle>Everything you need to build faster and deeper.</SectionSubtitle>
        </SectionHeader>

        <FeatureGrid>
          <FeatureCard>
            <IconWrapper>
              <Terminal size={24} color="#60a5fa" />
            </IconWrapper>
            <h3>AI-Driven Terminal</h3>
            <p>Execute complex commands and scripts with natural language processing integrated directly into your shell.</p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <Code size={24} color="#a78bfa" />
            </IconWrapper>
            <h3>Intelligent Refactoring</h3>
            <p>Automated code cleanup and optimization suggestions that understand the context of your entire codebase.</p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <Shield size={24} color="#34d399" />
            </IconWrapper>
            <h3>Enterprise Security</h3>
            <p>Your code never leaves your VPC. Enterprise-grade encryption and compliance standards built-in.</p>
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>

      <DemoSection id="demo">
        <SectionHeader>
          <SectionTitle>See it in action</SectionTitle>
        </SectionHeader>
        <VideoWrapper>
          <MacWindowHeader>
            <WindowControls>
              <span style={{ background: '#ff5f56' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#27c93f' }} />
            </WindowControls>
            <AddressBar>codeconclave.ai/demo</AddressBar>
          </MacWindowHeader>
          <VideoContainer>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit: 'cover' }}
            >
              <source src="https://cdn.pixabay.com/video/2023/10/26/186638-878456170_large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
        </VideoWrapper>
      </DemoSection>

      <Footer>
        <FooterContent>
          <FooterColumn>
            <Logo>
              <Code size={24} color="#94a3b8" />
              <BrandName style={{ fontSize: '1.2rem', color: '#94a3b8' }}>CodeConclave</BrandName>
            </Logo>
            <Copyright>© 2024 CodeConclave Inc.</Copyright>
          </FooterColumn>
          <FooterLinks>
            <LinkColumn>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Integrations</a>
              <a href="#">Pricing</a>
            </LinkColumn>
            <LinkColumn>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </LinkColumn>
            <LinkColumn>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </LinkColumn>
          </FooterLinks>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
};

// -- Animations --
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// -- Styled Components --

const PageContainer = styled.div`
  background-color: #0f172a; /* Slate 900 */
  color: #f8fafc;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;
  background: ${props => props.$scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'};
`;

const NavContent = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  
  svg {
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
  }
`;

const BrandName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const LoginButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 16px;
  
  &:hover {
    color: #60a5fa;
  }
`;

const PrimaryButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
`;

const HeroSection = styled.section`
  position: relative;
  padding: 180px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 6px 16px;
  border-radius: 20px;
  color: #60a5fa;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Headline = styled.h2`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 24px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: ${gradientFlow} 5s ease infinite;
`;

const SubHeadline = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeroButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3b82f6;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  transition: all 0.2s;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(59, 130, 246, 0.5);
  }
`;

const HeroButtonSecondary = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.2s;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
`;

const TrustedSection = styled.section`
  padding: 40px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(15, 23, 42, 0.5);
`;

const TrustedLabel = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 24px;
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  opacity: 0.5;
`;

const CompanyLogo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  font-family: 'Fira Code', monospace; /* Tech feel */
`;

const FeaturesSection = styled.section`
  padding: 120px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #94a3b8;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 32px;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
  }

  h3 {
    margin: 20px 0 12px;
    font-size: 1.25rem;
    color: white;
  }

  p {
    color: #94a3b8;
    line-height: 1.6;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DemoSection = styled.section`
  padding: 0 20px 120px;
  max-width: 1000px;
  margin: 0 auto;
`;

const VideoWrapper = styled.div`
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 1s ease-out;
  animation-fill-mode: both;
  animation-delay: 0.2s;
`;

const MacWindowHeader = styled.div`
  height: 40px;
  background: #1e293b;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;

const AddressBar = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: #64748b;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 4px;
  flex: 1;
  text-align: center;
  font-family: 'Fira Code', monospace;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 80px 20px 40px;
  background: #0b1120;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
`;

const Copyright = styled.p`
  color: #64748b;
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 80px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  h4 {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
  
  a {
    color: #94a3b8;
    font-size: 0.95rem;
    transition: color 0.2s;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
`;

export default LandingPage;