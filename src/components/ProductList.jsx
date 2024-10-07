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
  {
    id: 1,
    name: 'Vestido Lídia',
    price: '3.499,99',
    priceDesc:' 2.099,99',
    size: '38',
    color: 'verde abacate ',
    images: [
      'Vestidos/lidia.png',
      'Vestidos/lidia2.png',
      'Vestidos/lidia3.png',
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anne',
    price: '3.499,98',
    priceDesc:' 2.099,99',
    size: '46',
    color: 'lilás',
    images: [
      'Vestidos/AnneC.png',
      'Vestidos/AnneC2.png',
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anne',
    price: '3.499,98',
    priceDesc:' 2.099,99',
    size: '42 ,44',
    color: 'verde água ',
    images: [
      'Vestidos/AnneV.png',
      'Vestidos/AnneV2.png',
      'Vestidos/AnneV3.png',
      
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Ofélia',
    price: '3.499,98',
    priceDesc:' 2.099,99',
    size: '42 ,44',
    color: 'verde folha ',
    images: [
      'Vestidos/orfelia.png',
      'Vestidos/orfelia2.png',
    
      
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Julia ',
    price: '9.499,99 ',
    priceDesc:' 5.969,99',
    size: '38 ',
    color: 'Vinho ',
    images: [
      'Vestidos/julia3.png',
      'Vestidos/julia2.png',
      'Vestidos/julia.png',
     
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anastácia',
    price: '529,99  ',
    priceDesc:' 254,99',
    size: '38 ',
    color: 'Azul',
    images: [
      'Vestidos/anastacia.png',
      'Vestidos/anastacia2.png',
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Vanessa ',
    price: '499,99 ',
    priceDesc:' 299,99',
    size: '38 ',
    color: 'verde militar ',
    images: [
      'Vestidos/vanessap.png',
      'Vestidos/vanessap2.png',
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Ariel',
    price: '3499,99',
    priceDesc:' 2099,99 ',
    size: '42',
    color: 'lilás',
    images: [
      'Vestidos/ariel.png',
    
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    price: '499,99',
    priceDesc:' 299,99  ',
    size: '38',
    color: 'branca ',
    images: [
      'ChemiseAmara/chemisebranca.png',
      'ChemiseAmara/chemisebranca2.png',
      
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    price: '499,99',
    priceDesc:' 299,99  ',
    size: '40',
    color: 'Bege',
    images: [
      'ChemiseAmara/chemisebege.png',
      'ChemiseAmara/chemisebege2.png',
    
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    price: '499,99',
    priceDesc:' 299,99  ',
    size: '38',
    color: 'amarela',
    images: [
      'ChemiseAmara/chemiseamarela.png',
      'ChemiseAmara/chemiseamarela2.png',
      'ChemiseAmara/chemiseamarela3.png',
    ]
  },
  {
    id: 1,
    name: 'Conjuto Alice',
    price: '824,99',
    priceDesc:' 499,99 ',
    size: '38',
    color: 'linho cru',
    images: [
      'Conjunto/alice.png',
      'Conjunto/alice2.png',
      'Conjunto/alice3.png',
     
    ]
  },
  {
    id: 1,
    name: 'Conjuto Alice',
    price: '824,99',
    priceDesc:' 499,99 ',
    size: '38,40',
    color: 'linho cru',
    images: [
      'Conjunto/alicem.png',
      'Conjunto/alicem2.png',
      'Conjunto/alicem3.png',
     
    ]
  },
  {
    id: 1,
    name: 'Conjuto Alice',
    price: '824,99',
    priceDesc:' 499,99 ',
    size: '44',
    color: 'Rose',
    images: [
      'Conjunto/alicerose.png',
      'Conjunto/alicerose2.png',
     
    ]
  },
  {
    id: 1,
    name: 'Conjuto Alice',
    price: '824,99',
    priceDesc:' 499,99 ',
    size: '38',
    color: 'Laranja',
    images: [
      'Conjunto/alicelaranja.png',
      'Conjunto/alicelaranja2.png',
      'Conjunto/alicelaranja3.png',
   
    ]
  },
  {
    id: 1,
    name: 'Blusa Camila',
    price: '264,99',
    priceDesc:' 158,99 ',
    size: '38,44',
    color: 'Branca',
    images: [
      'Blusas/camila.png',
      
   
    ]
  },
  {
    id: 1,
    name: 'Blusa Mayra',
    price: '524,99',
    priceDesc:' 314,99',
    size: '40',
    color: 'Cinza',
    images: [
      'Blusas/mayra.png',
      
   
    ]
  },
  {
    id: 1,
    name: 'Camisa Rafa',
    price: '629,99',
    priceDesc:' 374,99',
    size: '38',
    color: 'Verde',
    images: [
      'Blusas/rafa.png',
      
   
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
