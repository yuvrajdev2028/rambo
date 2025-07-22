import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UtilsProvider } from './contexts/UtilsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UtilsProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </UtilsProvider>
    </AuthProvider>
  </BrowserRouter>
    
);
