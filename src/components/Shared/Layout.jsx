import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { themeMode, systemTheme, isAutoMode } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Set the current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  // Use theme from context instead of manual detection
 const isDarkTheme = isAutoMode ? systemTheme === 'dark' : themeMode === 'dark';

  return (
    <LayoutContainer>
      <Navbar toggleSidebar={toggleSidebar} />
      <MainContainer>
        <Sidebar isOpen={sidebarOpen} />
        <ContentContainer sidebarOpen={sidebarOpen}>
          <div style={{ padding: '20px', minHeight: 'calc(100vh - 200px)' }}>
            <Outlet />
          </div>
          <Footer isDark={isDarkTheme}>
            <FooterContent>
              <FooterTop>
                <BrandSection>
                  <Logo>
                    <LogoIcon><img src="https://img.icons8.com/?size=100&id=dQVSC6DSmc3w&format=png&color=000000" alt="code logo" height="30" width="30" /></LogoIcon>
                    <LogoText>Code Conclave</LogoText>
                  </Logo>
                  <BrandDescription>
                    Empowering developers to create, collaborate, and innovate
                    together.
                  </BrandDescription>
                </BrandSection>

                <SocialSection>
                  <SocialTitle>Connect with us</SocialTitle>
                  <SocialLinks>
                    <SocialLink
                      href="https://www.linkedin.com/in/gupta-mohak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      isDark={isDarkTheme}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </SocialLink>
                    <SocialLink
                      href="https://github.com/lukiod"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      isDark={isDarkTheme}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </SocialLink>
                    <SocialLink
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                      isDark={isDarkTheme}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </SocialLink>
                    <SocialLink
                      href="mailto:contact@codeconclave.com"
                      title="Email"
                      isDark={isDarkTheme}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </SocialLink>
                  </SocialLinks>
                </SocialSection>
              </FooterTop>

              <FooterDivider isDark={isDarkTheme} />

              <FooterBottom>
                <Copyright>
                  &copy; <span id="year">2025</span> Code Conclave. All rights reserved.
                </Copyright>
                <LegalLinks>
                  <LegalLink href="/privacy" target="_blank">
                    Privacy Policy
                  </LegalLink>
                  <LegalLink href="/terms" target="_blank">
                    Terms of Service
                  </LegalLink>
                  <ContactLink
                    href="https://www.linkedin.com/in/gupta-mohak/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support
                  </ContactLink>
                </LegalLinks>
                <Version>Code Editor v1.0.0</Version>
              </FooterBottom>
            </FooterContent>
          </Footer>
        </ContentContainer>
      </MainContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const ContentContainer = styled.main`
  flex: 1;
  overflow: auto;
  transition: margin-left 0.3s;
  margin-left: ${props => (props.sidebarOpen ? '250px' : '0')};
`;

const Footer = styled.footer`
  background: ${props =>
    props.isDark
      ? 'linear-gradient(135deg, #1a1d23 0%, #2d3748 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-top: 1px solid ${props => (props.isDark ? '#4a5568' : '#cbd5e0')};
  color: ${props => (props.isDark ? '#e2e8f0' : '#4a5568')};
  transition: all 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 1rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.01rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const LogoIcon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #680ac0ff, #c238ecff, #d5d2d5e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  opacity: 0.8;
  max-width: 400px;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SocialTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${props =>
    props.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'};
  color: ${props => (props.isDark ? '#a0aec0' : '#718096')};
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: linear-gradient(135deg,  #65c7f7 0%, #0052d4 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.2);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: ${props =>
    props.isDark
      ? 'linear-gradient(to right, transparent, #4a5568, transparent)'
      : 'linear-gradient(to right, transparent, #cbd5e0, transparent)'};
  margin: 1rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
`;

const Copyright = styled.div`
  opacity: 0.7;
  font-weight: 500;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const LegalLink = styled.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    opacity: 1;
    color: #43caffff;
  }
`;

const ContactLink = styled.a`
  color: #5289efff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-1px);
  }
`;

const Version = styled.div`
  opacity: 0.5;
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
`;

export default Layout;