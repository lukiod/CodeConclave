

import styled from "styled-components"
import { Code, FileText, Users, Zap, Database, Shield, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { FaCode } from "react-icons/fa"
import { useState } from "react"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Header = styled.header`
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
`

const Button = styled.button`
  padding: ${(props) => (props.size === "lg" ? "0.75rem 2rem" : "0.5rem 1rem")};
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${(props) =>
    props.variant === "outline"
      ? `
    background: transparent;
    border: 1px solid #d1d5db;
    color: #374151;
    
    &:hover {
      background: #f9fafb;
    }
  `
      : `
    background: #3b82f6;
    border: 1px solid #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  `}
`

const HeroSection = styled.section`
  padding: 5rem 0;
  text-align: center;
`

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1f2937;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background: #f9fafb;
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
`

const FeaturesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const FeatureIcon = styled.div`
  color: #3b82f6;
  margin-bottom: 0.5rem;
`

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.5;
`

const TechSection = styled.section`
  padding: 4rem 0;
`

const TechGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TechCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`

const TechTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`

const TechDescription = styled.p`
  color: #6b7280;
  margin-bottom: 1rem;
`

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Badge = styled.span`
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`

const CTASection = styled.section`
  padding: 5rem 0;
  background: #3b82f6;
  color: white;
  text-align: center;
`

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`

const CTAButton = styled(Button)`
  background: white;
  color: #3b82f6;
  
  &:hover {
    background: #f9fafb;
  }
`

const Footer = styled.footer`
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #6b7280;
  
  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`

const ModalBody = styled.div`
  padding: 1.5rem;
`

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0.375rem;
  }
`

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const handleHome = () => navigate('/home')
  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <Header>
        <Container>
          <HeaderContent>
            <Logo>
              <FaCode size={32} color="#3b82f6" />
              <LogoText>Code Conclave</LogoText>
            </Logo>
            <Button onClick={handleHome}>Get Started</Button>
          </HeaderContent>
        </Container>
      </Header>

      <HeroSection>
        <Container>
          <HeroTitle>Code, Collaborate, Create</HeroTitle>
          <HeroDescription>
            A full-stack web application for editing and sharing code with support for multiple languages and Jupyter
            notebooks. Build, edit, and collaborate in real-time.
          </HeroDescription>
          <ButtonGroup>
            <Button size="lg" onClick={handleHome}>Try for Free</Button>
            <Button variant="outline" size="lg" onClick={openModal}>
              View Demo
            </Button>
          </ButtonGroup>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>Key Features</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <Code size={32} />
              </FeatureIcon>
              <FeatureTitle>Multi-Language Support</FeatureTitle>
              <FeatureDescription>JavaScript, Python, HTML, CSS, and many more languages supported</FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FileText size={32} />
              </FeatureIcon>
              <FeatureTitle>Jupyter Notebooks</FeatureTitle>
              <FeatureDescription>Edit and visualize .ipynb files directly in your browser</FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <Users size={32} />
              </FeatureIcon>
              <FeatureTitle>Real-time Collaboration</FeatureTitle>
              <FeatureDescription>Share projects and collaborate with your team in real-time</FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <Database size={32} />
              </FeatureIcon>
              <FeatureTitle>File System</FeatureTitle>
              <FeatureDescription>Create, edit, and organize files and folders with ease</FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <Shield size={32} />
              </FeatureIcon>
              <FeatureTitle>Secure Authentication</FeatureTitle>
              <FeatureDescription>Secure login and registration system with JWT tokens</FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <Zap size={32} />
              </FeatureIcon>
              <FeatureTitle>Responsive Design</FeatureTitle>
              <FeatureDescription>Works seamlessly on desktop and mobile devices</FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <TechSection>
        <Container>
          <SectionTitle>Built With Modern Technology</SectionTitle>
          <TechGrid>
            <TechCard>
              <TechTitle>Frontend</TechTitle>
              <TechDescription>Modern React-based user interface</TechDescription>
              <BadgeContainer>
                <Badge>React</Badge>
                <Badge>Monaco Editor</Badge>
                <Badge>Styled Components</Badge>
                <Badge>React Router</Badge>
                <Badge>Axios</Badge>
              </BadgeContainer>
            </TechCard>

            <TechCard>
              <TechTitle>Backend</TechTitle>
              <TechDescription>Robust server-side architecture</TechDescription>
              <BadgeContainer>
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Mongoose</Badge>
                <Badge>JWT</Badge>
              </BadgeContainer>
            </TechCard>
          </TechGrid>
        </Container>
      </TechSection>

      <CTASection>
        <Container>
          <CTATitle>Ready to Start Coding?</CTATitle>
          <CTADescription>Join developers worldwide using our multi-language code editor</CTADescription>
          <CTAButton size="lg" onClick={handleHome}>Get Started Now</CTAButton>
        </Container>
      </CTASection>

      <Footer>
        <Container>
          <FooterContent>
            <FooterLogo>
              <Code size={24} />
              <span>Multi-Language Code Editor</span>
            </FooterLogo>
            <FooterText>Built with ❤️ for developers everywhere</FooterText>
          </FooterContent>
        </Container>
      </Footer>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Code Conclave</ModalTitle>
              <CloseButton onClick={closeModal}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <VideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Multi-Language Code Editor Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoContainer>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  )
}
