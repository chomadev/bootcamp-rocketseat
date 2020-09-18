import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import CreateGlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <CreateGlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);
export default App;
