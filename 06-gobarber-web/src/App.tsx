import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
import { ToastProvider } from './hooks/ToastContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
          <ToastProvider>
          <Routes />
          </ToastProvider>
      </AuthProvider>


    </Router>
  );
}

export default App;
