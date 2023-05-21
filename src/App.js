import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { styled } from 'styled-components';

const Global = styled.div`
background-color: black;
`

function App() {
  return (
    <Global className="App">
      <Header />
      <Main />
      <Footer />
    </Global>
  );
}

export default App;