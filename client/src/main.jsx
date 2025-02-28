// client/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { EditorProvider } from './contexts/EditorContext';
import './styles/global.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EditorProvider>
          <App />
        </EditorProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);