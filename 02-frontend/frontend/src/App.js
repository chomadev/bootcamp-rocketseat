import React from 'react';
import Header from './components/Header';

// import { Container } from './styles';

function App() {
  return (
    <>
      <Header title="HomePage">
        <ul><li>Menu 1</li><li>Menu 2</li></ul>
      </Header>
      <Header title="Titles">
        <ul><li>Menu 1</li><li>Menu 2</li></ul>
      </Header>
    </>
  )
}

export default App;