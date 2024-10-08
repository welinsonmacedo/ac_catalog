import React from 'react';
import styled from 'styled-components';
import ProductList from './components/ProductList';
import Title from './components/Tittle';
import'./global.css'
const Container = styled.div`
padding:5px;

  @media (max-width: 768px) {
 
    padding: 20px;
  }
`;
function App() {
  return (
    <Container className="App">
      <Title/>
      <ProductList />
    </Container>
  );
}

export default App;
