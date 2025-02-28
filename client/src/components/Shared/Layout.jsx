// client/src/components/Shared/Layout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
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
  transition: margin-left 0.3s;
  margin-left: ${props => props.sidebarOpen ? '250px' : '0'};
`;

export default Layout;