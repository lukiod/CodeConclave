import { format, formatDistanceToNow, isValid } from 'date-fns';

/**
 * Format a date to a string
 * @param {Date|string|number} date - Date to format
 * @param {string} formatStr - Format string
 * @returns {string} Formatted date string
 */
export const formatDate = (date, formatStr = 'MMM dd, yyyy') => {
  if (!date) return 'N/A';
  
  const parsedDate = new Date(date);
  if (!isValid(parsedDate)) return 'Invalid date';
  
  return format(parsedDate, formatStr);
};

/**
 * Format a date to a relative time string (e.g. "2 days ago")
 * @param {Date|string|number} date - Date to format
 * @param {Object} options - Options for formatDistanceToNow
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (date, options = { addSuffix: true }) => {
  if (!date) return 'N/A';
  
  const parsedDate = new Date(date);
  if (!isValid(parsedDate)) return 'Invalid date';
  
  return formatDistanceToNow(parsedDate, options);
};

/**
 * Format a file size to a human-readable string
 * @param {number} bytes - File size in bytes
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Truncate a string to a maximum length
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add if truncated
 * @returns {string} Truncated string
 */
export const truncateString = (str, maxLength = 50, suffix = '...') => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  
  return str.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Format a programming language name
 * @param {string} language - Language identifier
 * @returns {string} Formatted language name
 */
export const formatLanguage = (language) => {
  if (!language) return 'Plain Text';
  
  const languageMap = {
    'js': 'JavaScript',
    'jsx': 'React JSX',
    'ts': 'TypeScript',
    'tsx': 'React TSX',
    'py': 'Python',
    'java': 'Java',
    'c': 'C',
    'cpp': 'C++',
    'cs': 'C#',
    'go': 'Go',
    'rb': 'Ruby',
    'php': 'PHP',
    'html': 'HTML',
    'css': 'CSS',
    'json': 'JSON',
    'md': 'Markdown',
    'sql': 'SQL',
    'sh': 'Shell',
    'yaml': 'YAML',
    'yml': 'YAML',
    'xml': 'XML',
    'ipynb': 'Jupyter Notebook'
  };
  
  return languageMap[language.toLowerCase()] || language;
};

/**
 * Format a user's name for display
 * @param {Object} user - User object
 * @returns {string} Formatted user name
 */
export const formatUserName = (user) => {
  if (!user) return 'Unknown User';
  
  if (user.username) return user.username;
  if (user.name) return user.name;
  if (user.email) return user.email.split('@')[0];
  
  return 'User';
};