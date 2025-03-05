// client/src/config/constants.js
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://codeconclaveserver.onrender.com/api' 
  : 'https://codeconclaveserver.onrender.com/api';

export const SUPPORTED_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', extensions: ['.js', '.jsx'] },
  { id: 'typescript', name: 'TypeScript', extensions: ['.ts', '.tsx'] },
  { id: 'python', name: 'Python', extensions: ['.py'] },
  { id: 'java', name: 'Java', extensions: ['.java'] },
  { id: 'csharp', name: 'C#', extensions: ['.cs'] },
  { id: 'cpp', name: 'C++', extensions: ['.cpp', '.h'] },
  { id: 'go', name: 'Go', extensions: ['.go'] },
  { id: 'rust', name: 'Rust', extensions: ['.rs'] },
  { id: 'ruby', name: 'Ruby', extensions: ['.rb'] },
  { id: 'php', name: 'PHP', extensions: ['.php'] },
  { id: 'html', name: 'HTML', extensions: ['.html', '.htm'] },
  { id: 'css', name: 'CSS', extensions: ['.css'] },
  { id: 'markdown', name: 'Markdown', extensions: ['.md'] },
  { id: 'json', name: 'JSON', extensions: ['.json'] },
  { id: 'yaml', name: 'YAML', extensions: ['.yaml', '.yml'] },
  { id: 'ipynb', name: 'Jupyter Notebook', extensions: ['.ipynb'] }
];

export const FILE_ICONS = {
  'folder': 'folder',
  'js': 'javascript',
  'jsx': 'react',
  'ts': 'typescript',
  'tsx': 'react',
  'py': 'python',
  'ipynb': 'notebook',
  'html': 'html',
  'css': 'css',
  'json': 'json',
  'md': 'markdown',
  'default': 'file'
};