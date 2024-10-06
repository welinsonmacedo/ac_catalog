import React from 'react';
import ProductList from './components/ProductList';
import Title from './components/Tittle';
import'./global.css'
function App() {
  return (
    <div className="App">
      <Title/>
      <ProductList />
    </div>
  );
}

export default App;
