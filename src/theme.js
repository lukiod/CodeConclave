// src/theme.js

export const lightTheme = {
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
  },
  typography: { /* keep same as before */ },
  space: { /* keep same as before */ },
  borderRadius: { /* keep same as before */ },
  shadows: { /* keep same as before */ },
  transitions: { /* keep same as before */ },
  breakpoints: { /* keep same as before */ },
  zIndices: { /* keep same as before */ },

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

export const darkTheme = {
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    background: '#0b1220',
    surface: '#111827',
    surfaceLight: '#1f2937',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    border: '#1f2937',
    danger: '#f87171',
    success: '#4ade80',
    warning: '#fbbf24',
    info: '#60a5fa',
    accent: '#3b82f6',
  },
  typography: lightTheme.typography,
  space: lightTheme.space,
  borderRadius: lightTheme.borderRadius,
  shadows: lightTheme.shadows,
  transitions: lightTheme.transitions,
  breakpoints: lightTheme.breakpoints,
  zIndices: lightTheme.zIndices,

  editor: {
    background: '#1e293b',
    foreground: '#f1f5f9',
    lineNumber: '#64748b',
    lineNumberActive: '#f1f5f9',
    selection: 'rgba(59, 130, 246, 0.3)',
    cursor: '#f1f5f9',
    gutterBackground: '#111827',
    highlightBackground: 'rgba(59, 130, 246, 0.2)',
  }
};
