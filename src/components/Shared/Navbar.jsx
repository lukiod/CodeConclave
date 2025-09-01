import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FaCode,
  FaBars,
  FaUserCircle,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ toggleSidebar }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <NavbarContainer>
      <NavbarLeft>
        {/* Mobile menu button */}
        <MenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaBars />
        </MenuButton>

        {/* Logo */}
        <Link to="/">
          <Logo>
            <FaCode />
            <LogoText>CodeConclave</LogoText>
          </Logo>
        </Link>

        {/* Desktop Nav Links */}
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/dashboard">Dashboard</StyledLink>
          <StyledLink to="/docs">Docs</StyledLink>
        </NavLinks>
      </NavbarLeft>

      <NavbarRight>
        <ThemeToggle />
        <GradientButton to="/get-started">Get Started</GradientButton>

        {/* User Dropdown */}
        <UserDropdown>
          <UserButton onClick={() => setShowUserMenu(!showUserMenu)}>
            <FaUserCircle />
            <UserName>{currentUser?.username || "User"}</UserName>
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

      {/* Mobile Dropdown Menu */}
      {showMobileMenu && (
        <MobileMenu>
          <Link to="/" onClick={() => setShowMobileMenu(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setShowMobileMenu(false)}>
            About Us
          </Link>
          <Link to="/dashboard" onClick={() => setShowMobileMenu(false)}>
            Dashboard
          </Link>
          <Link to="/docs" onClick={() => setShowMobileMenu(false)}>
            Docs
          </Link>
          <GradientButton to="/get-started">Get Started</GradientButton>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

/* ==================== STYLES ==================== */

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 0 24px;
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  margin: 12px auto;
  width: 95%;
  position: sticky;
  top: 10px;
  z-index: 1000;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: var(--color-text-primary);
  border: none;
  font-size: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
`;

const LogoText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 40px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 15px;
  transition: color 0.3s;

  &:hover {
    color: var(--color-primary);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const GradientButton = styled(Link)`
  background: linear-gradient(90deg, #38bdf8, #9da9c3ff);
  color: #fff;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.4);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const UserDropdown = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: var(--color-text-primary);
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
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
  top: 110%;
  right: 0;
  width: 220px;
  background: rgba(30, 30, 40, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 200;
`;

const UserInfo = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: var(--color-text-primary);
    font-size: 15px;
  }

  small {
    color: var(--color-text-secondary);
    font-size: 12px;
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
`;

const DropdownItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 14px;
    color: var(--color-text-tertiary);
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 70px;
  left: 5%;
  width: 90%;
  background: rgba(20, 20, 30, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px;
  text-align: center;
  z-index: 900;

  a {
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
  }

  a:hover {
    color: var(--color-primary);
  }
`;
