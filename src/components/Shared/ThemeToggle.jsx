import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import { FaMoon, FaSun, FaCog } from 'react-icons/fa';

const ThemeToggle = () => {
  const { themeMode, systemTheme, toggleTheme, isAutoMode } = useTheme();

  const getIcon = () => {
    if (isAutoMode) {
      return <FaCog />;
    }
    return themeMode === 'dark' ? <FaSun /> : <FaMoon />;
  };

  const getTitle = () => {
    if (isAutoMode) {
      return `Auto mode (following system: ${systemTheme})`;
    }
    return `Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`;
  };

  const getLabel = () => {
    if (isAutoMode) {
      return `Auto (${systemTheme})`;
    }
    return themeMode === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <ToggleButton 
      onClick={toggleTheme} 
      title={getTitle()}
      $isAuto={isAutoMode}
      $currentTheme={themeMode}
    >
      <IconWrapper $isAuto={isAutoMode}>
        {getIcon()}
      </IconWrapper>
      <ThemeLabel>{getLabel()}</ThemeLabel>
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 12px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  font-weight: 500;
  
  &:hover {
    background: var(--color-surface);
    border-color: var(--color-primary);
  }

  ${props => props.$isAuto && `
    border-color: var(--color-warning);
    
    &:hover {
      border-color: var(--color-warning);
      background: rgba(245, 158, 11, 0.1);
    }
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  
  svg {
    font-size: 14px;
    ${props => props.$isAuto && `
      animation: spin 2s linear infinite;
      color: var(--color-warning);
    `}
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ThemeLabel = styled.span`
  font-size: 12px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default ThemeToggle; 