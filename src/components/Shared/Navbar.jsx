import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCode, FaBars, FaUserCircle, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ toggleSidebar }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <NavbarContainer>
      <NavbarLeft>
        <MenuButton onClick={toggleSidebar}>
          <FaBars />
        </MenuButton>
        <Link to="/">
          <Logo>
            <FaCode />
            <LogoText>CodeConclave</LogoText>
          </Logo>
        </Link>
      </NavbarLeft>

      <NavbarRight>
        <ThemeToggle />
        <UserDropdown>
          <UserButton onClick={() => setShowUserMenu(!showUserMenu)}>
            <FaUserCircle />
            <UserName>{currentUser?.username || 'User'}</UserName>
            <FaChevronDown size={12} />
          </UserButton>

          {showUserMenu && (
            <DropdownMenu>
              <UserInfo>
                <strong>{currentUser?.username}</strong>
                <small>{currentUser?.email}</small>
              </UserInfo>
              <DropdownDivider />
              <DropdownItem onClick={handleLogout}>
                <FaSignOutAlt />
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          )}
        </UserDropdown>
      </NavbarRight>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--color-border);
  position: relative;
  z-index: 10;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  background: transparent;
  color: var(--color-text-primary);
  padding: 12px;
  border: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 15px;

  &:hover {
    background-color: var(--color-background);
  }

  @media (min-width: 768px) {
    display: none; 
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-primary);
`;

const LogoText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserDropdown = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: var(--color-text-primary);
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-background);
  }

  svg:first-child {
    font-size: 20px;
  }
`;

const UserName = styled.span`
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  overflow: hidden;
  z-index: 100;
`;

const UserInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    color: var(--color-text-primary);
    font-size: 14px;
  }

  small {
    color: var(--color-text-secondary);
    font-size: 12px;
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background-color: var(--color-border);
`;

const DropdownItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
  color: var(--color-text-secondary);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-background);
  }

  svg {
    font-size: 14px;
    color: var(--color-text-tertiary);
  }
`;

export default Navbar;
