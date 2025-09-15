import { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCode, FaBars, FaUserCircle, FaSignOutAlt, FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

// Custom hook for click outside detection
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};

const Navbar = ({ toggleSidebar }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useClickOutside(userDropdownRef, () => setShowUserMenu(false));

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showUserMenu) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showUserMenu]);

  const handleLogout = () => {
    setShowUserMenu(false); // Close dropdown first
    logout();
    navigate('/home');
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
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
        <UserDropdown ref={userDropdownRef}>
          <UserButton 
            onClick={toggleUserMenu}
            $isOpen={showUserMenu}
            aria-expanded={showUserMenu}
            aria-haspopup="true"
            aria-label="User menu"
          >
            <FaUserCircle />
            <UserName>{currentUser?.username || 'User'}</UserName>
            <ChevronIcon $isOpen={showUserMenu}>
              <FaChevronDown size={12} />
            </ChevronIcon>
          </UserButton>

          {showUserMenu && (
            <DropdownMenu>
              <UserInfo>
                <strong>{currentUser?.username}</strong>
                <small>{currentUser?.email}</small>
              </UserInfo>
              <DropdownDivider />
              <DropdownItem as={Link} to="/help">
                <FaQuestionCircle />
                Help & Support
              </DropdownItem>
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
  background-color: ${props => props.$isOpen ? 'var(--color-background)' : 'transparent'};
  color: var(--color-text-primary);
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-background);
  }

  ${props => props.$isOpen && `
    background-color: var(--color-background);
    box-shadow: 0 0 0 2px var(--color-primary-light);
  `}

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

const ChevronIcon = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
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
  
  /* Animation */
  animation: dropdownSlideIn 0.2s ease-out;
  
  @keyframes dropdownSlideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-background);
  }

  svg {
    font-size: 14px;
    color: var(--color-text-tertiary);
  }
`;

export default Navbar;