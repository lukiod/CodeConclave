import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaShareAlt, FaCog, FaQuestionCircle } from 'react-icons/fa';

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
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  z-index: 5;
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

  /* Desktop: always visible */
  @media (min-width: 768px) {
    transform: translateX(0);
    position: static;
    box-shadow: none;
  }
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
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      background-color: var(--color-background);
    }

    &.active {
      color: var(--color-primary);
      background-color: var(--color-surface-light);
      border-left: 3px solid var(--color-primary);
      padding-left: 17px;

      svg {
        color: var(--color-primary);
      }
    }

    svg {
      font-size: 16px;
      margin-right: 12px;
      color: var(--color-text-tertiary);
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
  background-color: var(--color-border);
  margin: 10px 0;
`;

const SidebarFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid var(--color-border);
`;

const FooterText = styled.div`
  font-size: 12px;
  color: var(--color-text-tertiary);
  text-align: center;
`;

export default Sidebar;
