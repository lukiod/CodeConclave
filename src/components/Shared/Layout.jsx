import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <LayoutContainer>
      <Navbar toggleSidebar={toggleSidebar} />
      <MainContainer>
        <Sidebar isOpen={sidebarOpen} />
        <ContentContainer sidebarOpen={sidebarOpen}>
          <Outlet />
        </ContentContainer>
      </MainContainer>
      {/* Backdrop for mobile */}
      {sidebarOpen && <Backdrop onClick={toggleSidebar} />}
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
  padding: 20px;
  transition: margin-left 0.3s ease;

  /* On desktop, push content */
  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

/* Backdrop (only visible on mobile when sidebar open) */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Layout;
