// src/components/Shared/Sidebar.jsx
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaHome,
  FaShareAlt,
  FaCog,
  FaQuestionCircle,
  FaCode,
  FaBook,
} from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleNavClick = useCallback(() => {
    if (window.innerWidth < 768 && onClose) onClose();
  }, [onClose]);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Small delay to prevent flickering when mouse moves quickly
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 50);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <SidebarContainer 
      $isOpen={isOpen} 
      $isHovered={isHovered} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="navigation" 
      aria-label="Main sidebar"
    >
      <SidebarBrand $isHovered={isHovered}>
        <BrandLink to="/" aria-label="Go to home">
          <BrandIcon title="Code Editor"><FaCode /></BrandIcon>
          <BrandText $isHovered={isHovered}>Code Editor</BrandText>
        </BrandLink>
      </SidebarBrand>

      <SidebarNav>
        <NavItem $isHovered={isHovered}>
          <NavLink to="/getting-started" onClick={handleNavClick}>
            <FaBook />
            <NavText $isHovered={isHovered}>Getting Started</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isHovered={isHovered}>
          <NavLink to="/dashboard" end onClick={handleNavClick}>
            <FaHome />
            <NavText $isHovered={isHovered}>Dashboard</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isHovered={isHovered}>
          <NavLink to="/shared" onClick={handleNavClick}>
            <FaShareAlt />
            <NavText $isHovered={isHovered}>Shared with me</NavText>
          </NavLink>
        </NavItem>

        <NavDivider />

        <NavItem $isHovered={isHovered}>
          <NavLink to="/settings" onClick={handleNavClick}>
            <FaCog />
            <NavText $isHovered={isHovered}>Settings</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isHovered={isHovered}>
          <NavLink to="/help" onClick={handleNavClick}>
            <FaQuestionCircle />
            <NavText $isHovered={isHovered}>Help</NavText>
          </NavLink>
        </NavItem>

        <NavDivider />
      </SidebarNav>

      <SidebarFooter $isHovered={isHovered}>
        <FooterLeft>
          <FooterText $isHovered={isHovered}>Code Editor v1.0.0</FooterText>
        </FooterLeft>
      </SidebarFooter>
    </SidebarContainer>
  );
};

/* Styled components */
const SidebarContainer = styled.div.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  --full-width: 250px;
  --mini-width: 72px;
  width: ${p => (p.$isHovered ? 'var(--full-width)' : 'var(--mini-width)')};
  min-width: ${p => (p.$isHovered ? 'var(--full-width)' : 'var(--mini-width)')};
  transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  z-index: 5;
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  transform: translateX(${p => (p.$isOpen ? '0' : '-100%')});

  @media (min-width: 768px) {
    transform: translateX(0);
    position: static;
    box-shadow: none;
    transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const SidebarBrand = styled.div.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--color-border);
  justify-content: space-between;
  ${p => !p.$isHovered && `padding-left: 12px; padding-right: 8px;`}
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 15px;
`;

const BrandIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--color-surface-light);
  color: var(--color-primary);
  svg { font-size: 16px; }
`;

const BrandText = styled.span.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  white-space: nowrap;
  transition: opacity 120ms ease, transform 120ms ease;
  @media (max-width: 767px) { 
    display: inline; 
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) { 
    opacity: ${p => p.$isHovered ? '1' : '0'};
    transform: ${p => p.$isHovered ? 'translateX(0)' : 'translateX(-10px)'};
    pointer-events: ${p => p.$isHovered ? 'auto' : 'none'};
  }
`;


const SidebarNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
  flex: 1;
  overflow: auto;
`;

const NavItem = styled.li.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 15px;
    border-radius: 8px;
    margin: 4px 8px;
    transition: background 120ms ease;
    &:hover { background-color: var(--color-background); }
    &.active {
      color: var(--color-primary);
      background-color: var(--color-surface-light);
      border-left: 3px solid var(--color-primary);
      padding-left: calc(14px - 3px);
      svg { color: var(--color-primary); }
    }
    svg { font-size: 16px; color: var(--color-text-tertiary); flex-shrink: 0; }
  }
  @media (min-width: 768px) {
    ${p => !p.$isHovered && `a { justify-content: center; padding-left:0; padding-right:0; } a svg { margin-right:0; }`}
  }
`;

const NavText = styled.span.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 120ms ease, transform 120ms ease;
  @media (max-width: 767px) { 
    display: inline; 
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) { 
    opacity: ${p => p.$isHovered ? '1' : '0'};
    transform: ${p => p.$isHovered ? 'translateX(0)' : 'translateX(-10px)'};
    pointer-events: ${p => p.$isHovered ? 'auto' : 'none'};
  }
`;

const NavDivider = styled.div`
  height: 1px;
  background-color: var(--color-border);
  margin: 10px 8px;
`;

const SidebarFooter = styled.div.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px;
  border-top: 1px solid var(--color-border);
  ${p => !p.$isHovered && `padding-left: 8px; padding-right: 8px;`}
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterText = styled.div.withConfig({ shouldForwardProp: prop => !prop.startsWith('$') })`
  font-size: 12px;
  color: var(--color-text-tertiary);
  transition: opacity 120ms ease, transform 120ms ease;
  @media (max-width: 767px) { 
    display: block; 
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) { 
    opacity: ${p => p.$isHovered ? '1' : '0'};
    transform: ${p => p.$isHovered ? 'translateX(0)' : 'translateX(-10px)'};
    pointer-events: ${p => p.$isHovered ? 'auto' : 'none'};
  }
`;


export default Sidebar;
