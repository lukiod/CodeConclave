// client/src/components/Shared/Navbar.jsx
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCode, FaBars, FaUserCircle, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = ({ toggleSidebar }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
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
            <LogoText>Code Editor</LogoText>
          </Logo>
        </Link>
      </NavbarLeft>
      
      <NavbarRight>
        <UserDropdown>
          <UserButton onClick={() => setShowUserMenu(!showUserMenu)}>
            <FaUserCircle />
            <UserName>
              {currentUser?.username || 'User'}
            </UserName>
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
  background-color: #1a202c;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: white;
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const LogoText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const UserDropdown = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
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
  background-color: white;
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
    color: #2d3748;
    font-size: 14px;
  }
  
  small {
    color: #718096;
    font-size: 12px;
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background-color: #e2e8f0;
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
  color: #4a5568;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 14px;
    color: #718096;
  }
`;

export default Navbar;