// client/src/components/Shared/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaShareAlt, FaBook, FaCog, FaQuestionCircle } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarNav>
        <NavItem>
          <NavLink to="/dashboard" end>
            <FaHome />
            <NavText>Dashboard</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/shared">
            <FaShareAlt />
            <NavText>Shared with me</NavText>
          </NavLink>
        </NavItem>
        <NavDivider />
        <NavItem>
          <NavLink to="/settings">
            <FaCog />
            <NavText>Settings</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/help">
            <FaQuestionCircle />
            <NavText>Help</NavText>
          </NavLink>
        </NavItem>
      </SidebarNav>
      
      <SidebarFooter>
        <FooterText>Code Editor v1.0.0</FooterText>
      </SidebarFooter>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: #f8f9fa;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  z-index: 5;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
`;

const SidebarNav = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: #4a5568;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      background-color: #edf2f7;
    }
    
    &.active {
      color: #3182ce;
      background-color: #ebf8ff;
      border-left: 3px solid #3182ce;
      padding-left: 17px; /* 20px - 3px border */
      
      svg {
        color: #3182ce;
      }
    }
    
    svg {
      font-size: 16px;
      margin-right: 12px;
      color: #718096;
    }
  }
`;

const NavText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NavDivider = styled.div`
  height: 1px;
  background-color: #e2e8f0;
  margin: 10px 0;
`;

const SidebarFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e2e8f0;
`;

const FooterText = styled.div`
  font-size: 12px;
  color: #a0aec0;
  text-align: center;
`;

export default Sidebar;