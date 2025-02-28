// client/src/theme.js
const theme = {
    colors: {
      primary: '#3182ce',
      primaryDark: '#2c5282',
      background: '#f8f9fa',
      surface: '#ffffff',
      textPrimary: '#2d3748',
      textSecondary: '#4a5568',
      textTertiary: '#718096',
      border: '#e2e8f0',
      danger: '#e53e3e',
      success: '#38a169',
      warning: '#ecc94b',
      info: '#4299e1',
    },
    
    typography: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      codeFamily: "'Fira Code', monospace",
      fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem',     // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem',  // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
      },
      fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    
    space: {
      xs: '0.25rem', // 4px
      sm: '0.5rem',  // 8px
      md: '1rem',    // 16px
      lg: '1.5rem',  // 24px
      xl: '2rem',    // 32px
      '2xl': '3rem', // 48px
      '3xl': '4rem', // 64px
    },
    
    borderRadius: {
      sm: '0.25rem',  // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem',   // 8px
      full: '9999px', // For circular elements
    },
    
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
    
    transitions: {
      fast: '0.1s',
      normal: '0.2s',
      slow: '0.3s',
    },
    
    breakpoints: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    
    zIndices: {
      base: 0,
      dropdown: 100,
      sticky: 200,
      fixed: 300,
      modal: 400,
      popover: 500,
      tooltip: 600,
    }
  };
  
  export default theme;