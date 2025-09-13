// src/components/Shared/Sidebar.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  FaHome,
  FaShareAlt,
  FaCog,
  FaQuestionCircle,
  FaCode,
  FaChevronLeft,
  FaChevronRight,
  FaCompressArrowsAlt,
  FaBook,
} from 'react-icons/fa';

const STORAGE_KEY = 'cc_sidebar_mini';

const Sidebar = ({ isOpen, onClose }) => {
  const [mini, setMini] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, mini ? 'true' : 'false');
    } catch {}
  }, [mini]);

  const toggleMini = useCallback(() => {
    setMini(prev => !prev);
  }, []);

  const handleResetMini = useCallback(() => {
    setMini(false);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const isCmd = e.metaKey || e.ctrlKey;
      if (isCmd && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        toggleMini();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [toggleMini]);

  const handleNavClick = useCallback(() => {
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <SidebarContainer
      $isOpen={isOpen}
      $mini={mini}
      role="navigation"
      aria-label="Main sidebar"
    >
      <SidebarBrand $mini={mini}>
        <BrandLink to="/" aria-label="Go to home">
          <BrandIcon title="Code Editor">
            <FaCode />
          </BrandIcon>
          <BrandText $mini={mini}>Code Editor</BrandText>
        </BrandLink>

        <MiniToggle
          onClick={toggleMini}
          aria-pressed={mini}
          title={
            mini
              ? 'Expand sidebar (Ctrl/Cmd + B)'
              : 'Collapse to icons (Ctrl/Cmd + B)'
          }
        >
          {mini ? <FaChevronRight /> : <FaChevronLeft />}
        </MiniToggle>
      </SidebarBrand>

      <SidebarNav>
        <NavItem $mini={mini}>
          <NavLink
            to="/getting-started"
            onClick={handleNavClick}
          >
            <FaBook />
            <NavText $mini={mini}>Getting Started</NavText>
          </NavLink>
        </NavItem>

        <NavItem $mini={mini}>
          <NavLink
            to="/dashboard"
            end
            onClick={handleNavClick}
          >
            <FaHome />
            <NavText $mini={mini}>Dashboard</NavText>
          </NavLink>
        </NavItem>

        <NavItem $mini={mini}>
          <NavLink
            to="/shared"
            onClick={handleNavClick}
          >
            <FaShareAlt />
            <NavText $mini={mini}>Shared with me</NavText>
          </NavLink>
        </NavItem>

        <NavDivider />
        <NavItem $mini={mini}>
          <NavLink
            to="/settings"
            onClick={handleNavClick}
          >
            <FaCog />
            <NavText $mini={mini}>Settings</NavText>
          </NavLink>
        </NavItem>

        <NavItem $mini={mini}>
          <NavLink
            to="/help"
            onClick={handleNavClick}
          >
            <FaQuestionCircle />
            <NavText $mini={mini}>Help</NavText>
          </NavLink>
        </NavItem>
        <NavDivider />
      </SidebarNav>

      <SidebarFooter $mini={mini}>
        <FooterLeft>
          <FooterText $mini={mini}>Code Editor v1.0.0</FooterText>
        </FooterLeft>

        <FooterAction
          onClick={handleResetMini}
          title="Reset to full sidebar"
        >
          <FaCompressArrowsAlt />
        </FooterAction>
      </SidebarFooter>
    </SidebarContainer>
  );
};

/* Styled components with proper prop filtering */
const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  --full-width: 250px;
  --mini-width: 72px;
  width: ${p => (p.$mini ? 'var(--mini-width)' : 'var(--full-width)')};
  min-width: ${p => (p.$mini ? 'var(--mini-width)' : 'var(--full-width)')};
  transition: width 220ms ease, transform 220ms ease;
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
    transition: none;
  }
`;

const SidebarBrand = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--color-border);
  justify-content: space-between;

  ${p =>
    p.$mini &&
    `
    padding-left: 12px;
    padding-right: 8px;
  `}
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
  svg {
    font-size: 16px;
    display: block;
  }
`;

const BrandText = styled.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  white-space: nowrap;

  @media (max-width: 767px) {
    display: inline;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MiniToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;

  &:hover {
    background: var(--color-surface);
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const SidebarNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
  flex: 1;
  overflow: auto;
`;

const NavItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
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

    &:hover {
      background-color: var(--color-background);
    }

    &.active {
      color: var(--color-primary);
      background-color: var(--color-surface-light);
      border-left: 3px solid var(--color-primary);
      padding-left: calc(14px - 3px);
      svg {
        color: var(--color-primary);
      }
    }

    svg {
      font-size: 16px;
      color: var(--color-text-tertiary);
      flex-shrink: 0;
    }
  }

  @media (min-width: 768px) {
    ${p =>
      p.$mini &&
      `
      a { justify-content: center; padding-left: 0; padding-right: 0; }
      a svg { margin-right: 0; }
    `}
  }
`;

const NavText = styled.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${p =>
    p.$mini &&
    `
    @media (min-width: 768px) {
      display: none;
    }
  `}

  @media (max-width: 767px) {
    display: inline;
  }
`;

const NavDivider = styled.div`
  height: 1px;
  background-color: var(--color-border);
  margin: 10px 8px;
`;

const SidebarFooter = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px;
  border-top: 1px solid var(--color-border);

  ${p =>
    p.$mini &&
    `
    padding-left: 8px;
    padding-right: 8px;
  `}
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterText = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  font-size: 12px;
  color: var(--color-text-tertiary);

  ${p =>
    p.$mini &&
    `
    @media (min-width: 768px) {
      display: none;
    }
  `}

  @media (max-width: 767px) {
    display: block;
  }
`;

const FooterAction = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;

  &:hover {
    background: var(--color-surface);
  }
`;

export default Sidebar;
