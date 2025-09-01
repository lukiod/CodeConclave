import { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useRef(null);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  }, [location.pathname, closeSidebar]);

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle clicks on mobile
      if (window.innerWidth >= 768) return;
      
      // If sidebar is open and click is on overlay
      if (sidebarOpen && overlayRef.current && event.target === overlayRef.current) {
        closeSidebar();
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [sidebarOpen, closeSidebar]);

  // Close sidebar on escape key (mobile)
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && sidebarOpen && window.innerWidth < 768) {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [sidebarOpen, closeSidebar]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Close sidebar on mobile when resizing to mobile
      if (window.innerWidth < 768 && sidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen, closeSidebar]);

  return (
    <LayoutContainer>
      <Navbar 
        toggleSidebar={toggleSidebar}
        isSidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />
      <MainContainer>
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar}
        />
        
        {/* Mobile overlay */}
        {sidebarOpen && (
          <MobileOverlay 
            ref={overlayRef}
          />
        )}
        
        <ContentContainer $sidebarOpen={sidebarOpen}>
          <Outlet />
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
  position: relative;
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  transition: opacity 300ms ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.main.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  flex: 1;
  overflow: auto;
  padding: 20px;
  transition: margin-left 0.3s ease;

  /* On desktop, push content */
  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export default Layout;