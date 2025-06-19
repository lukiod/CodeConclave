import { createContext, useState, useContext, useEffect } from 'react';

// Theme configurations
const lightTheme = {
  colors: {
    primary: '#60a5fa',
    primaryDark: '#3b82f6',
    background: '#ffffff',
    surface: '#f8fafc',
    surfaceLight: '#f1f5f9',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textTertiary: '#64748b',
    border: '#e2e8f0',
    danger: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
    info: '#3b82f6',
    accent: '#60a5fa',
    error: '#ef4444',
    errorLight: '#fef2f2',
    errorDark: '#991b1b',
    successLight: '#f0fdf4',
    successDark: '#166534',
  },
  editor: {
    background: '#ffffff',
    foreground: '#1e293b',
    lineNumber: '#94a3b8',
    lineNumberActive: '#64748b',
    selection: 'rgba(96, 165, 250, 0.2)',
    cursor: '#1e293b',
    gutterBackground: '#f8fafc',
    highlightBackground: 'rgba(96, 165, 250, 0.1)',
  }
};

const darkTheme = {
  colors: {
    primary: '#60a5fa',
    primaryDark: '#3b82f6',
    background: '#0f172a',
    surface: '#1e293b',
    surfaceLight: '#334155',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    border: '#334155',
    danger: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
    info: '#3b82f6',
    accent: '#60a5fa',
    error: '#ef4444',
    errorLight: '#7f1d1d',
    errorDark: '#fca5a5',
    successLight: '#14532d',
    successDark: '#86efac',
  },
  editor: {
    background: '#0f172a',
    foreground: '#f8fafc',
    lineNumber: '#64748b',
    lineNumberActive: '#94a3b8',
    selection: 'rgba(96, 165, 250, 0.2)',
    cursor: '#f8fafc',
    gutterBackground: '#1e293b',
    highlightBackground: 'rgba(96, 165, 250, 0.1)',
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const setTheme = (themeName) => {
    const newIsDark = themeName === 'dark';
    setIsDarkMode(newIsDark);
    localStorage.setItem('theme', themeName);
  };

  // Update CSS custom properties when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const colors = theme.colors;
    
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-surface-light', colors.surfaceLight);
    root.style.setProperty('--color-text-primary', colors.textPrimary);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-text-tertiary', colors.textTertiary);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-danger', colors.danger);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-info', colors.info);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-error', colors.error);
    root.style.setProperty('--color-error-light', colors.errorLight);
    root.style.setProperty('--color-error-dark', colors.errorDark);
    root.style.setProperty('--color-success-light', colors.successLight);
    root.style.setProperty('--color-success-dark', colors.successDark);
  }, [theme]);

  const value = {
    theme,
    isDarkMode,
    toggleTheme,
    setTheme,
    currentTheme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext; 