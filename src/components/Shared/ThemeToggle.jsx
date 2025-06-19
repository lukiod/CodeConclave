import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: var(--color-surface);
    border-color: var(--color-primary);
  }
  
  svg {
    font-size: 14px;
  }
`;

export default ThemeToggle; 