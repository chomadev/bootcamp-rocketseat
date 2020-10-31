import React from 'react';
import GlobalStyle from './styles/global';
import SingUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SingUp />
    </>
  );
}

export default App;
