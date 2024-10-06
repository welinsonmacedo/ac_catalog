import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;
const products = [
  {
    id: 1,
    name: 'Vestido Barbara',
    price: '9.949,99',
    priceDesc:' 5.969,99',
    size: '38',
    color: 'cinza',
    images: [
      'Vestidos/barbara.jpg',
      'Vestidos/barbara2.jpg'
    ]
  }, 
   {
    id: 1,
    name: 'Vestido Anne',
    price: '3.499,99',
    priceDesc:' 2.099,99',
    size: '44',
    color: 'verde abacate ',
    images: [
      'Vestidos/Anne.jpg',
      'Vestidos/Anne.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Nataly',
    price: '11.999,99',
    priceDesc:' 7.199,99',
    size: '38',
    color: 'Rose  ',
    images: [
      'Vestidos/nataly.png',
      'Vestidos/nataly.png',
    ]
  },
  {
    id: 1,
    name: 'Vestido Lia',
    price: '3.499,99',
    priceDesc:' 2.099,99',
    size: '38',
    color: 'Roxo ',
    images: [
      'Vestidos/lia.jpg',
      'Vestidos/lia2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Agatha',
    price: '3.499,99',
    priceDesc:' 1.699,99',
    size: '38',
    color: 'Verde Bandeira ',
    images: [
      'Vestidos/Agatha.jpg',
      'Vestidos/Agatha2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Sophia',
    price: '2.799,99',
    priceDesc:' 1.679,99',
    size: '38',
    color: 'Preta ',
    images: [
      'Vestidos/Sophia.jpg',
      'Vestidos/Sophia.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Lyra',
    price: '499,99',
    priceDesc:' 269,99',
    size: '38',
    color: 'Branca',
    images: [
      'Vestidos/Lyra.jpg',
      'Vestidos/Lyra2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Carolina',
    price: '2.599,99',
    priceDesc:' 1.214,99',
    size: '38',
    color: 'Branca',
    images: [
      'Vestidos/Carolina.jpg',
      'Vestidos/Carolina2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Stefany',
    price: '9.499,99',
    priceDesc:' 5.079,99',
    size: '38',
    color: 'vermelho',
    images: [
      'Vestidos/Stefany.jpg',
      'Vestidos/Stefany2.jpg',
    ]
  },
 
];

function ProductList() {
  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default ProductList;
