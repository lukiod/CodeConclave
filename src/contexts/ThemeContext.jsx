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

// Function to detect system color scheme preference
const getSystemTheme = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  }
  return 'light'; // Default fallback
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    // Check localStorage for saved theme preference
    const saved = localStorage.getItem('theme');
    return saved || 'auto'; // Default to auto if nothing is saved
  });

  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  // Determine the actual theme to use
  const actualTheme = themeMode === 'auto' ? systemTheme : themeMode;
  const isDarkMode = actualTheme === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Set initial value
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setThemeMode(prev => {
      let newMode;
      if (prev === 'light') {
        newMode = 'dark';
      } else if (prev === 'dark') {
        newMode = 'auto';
      } else {
        newMode = 'light';
      }
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  const setTheme = (themeName) => {
    setThemeMode(themeName);
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
    currentTheme: actualTheme,
    themeMode, // 'light', 'dark', or 'auto'
    systemTheme, // The detected system theme
    isAutoMode: themeMode === 'auto'
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