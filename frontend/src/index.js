import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UtilsProvider } from './contexts/UtilsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UtilsProvider>
        <App />
      </UtilsProvider>
    </AuthProvider>
  </BrowserRouter>
    
);
