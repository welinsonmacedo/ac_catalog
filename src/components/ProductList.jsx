
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:2em;
justify-content:center;
padding: 15px;
padding-bottom: 50px;
background-color: #fcf8f8;

`;
const products = [
  {
    id: 1,
    name: 'Vestido Barbara',
    description:'vestido de tule bordado em pedrarias com bojo, alças, decote nas costas e fechamento em zíper.',
    composition:'bordado',
    price: '9.949,99',
    priceDesc:' 4.774,99',
    size: '38',
    color: 'prata',
    images: [
      'Vestidos/barbara.jpg',
      'Vestidos/barbara2.jpg'
    ]
  }, 
   {
    id: 1,
    name: 'Vestido Anne',
    description:'vestido em crepe com bojo, saia tripla, decote em V, fenda, com detalhe em flor nos ombros e fechamento em zíper nas costas',
    composition:'crepe',
    price: '3.499,99',
    priceDesc:' 1.784,99',
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
    description:'vestido em tule, com bojo, bordado com detalhes em pingente, manga longa e decote.',
    composition:'bordado',
    price: '11.999,99',
    priceDesc:' 5.399,99',
    size: '38',
    color: 'dourada ',
    images: [
      'Vestidos/nataly.png',
      'Vestidos/nataly2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Lia',
    description:'vestido em crepe, com bojo, saia tripla, decote em V, fenda,  drapeado e lenço nos ombros ',
    composition:'crepe',
    price: '3.499,99',
    priceDesc:' 1.679,99',
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
    description:' vestido em crepe e tule bordado em pedrarias, com bojo, saia dupla e mangas',
    composition:' crepe',
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
    description:'vestido em crepe, bojo, fenda, detalhes, renda nas laterais e babado ',
    composition:' Confeccionado em crepe suave',
    price: '2.799,99',
    priceDesc:' 1.679,99',
    size: '38',
    color: 'Preta ',
    images: [
      'Vestidos/Sophia.jpg',
      'Vestidos/Sophia2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Lyra',
    description:'vestido em algodão 100%, manga bufante, cinto e fivela no mesmo tecido, fechamento em botões',
    composition:'algodão',
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
    description:'vestido em lesie forrado, com manga e detalhe nos punhos, cinto e fivela no mesmo tecido',
    composition:'lisie ',
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
    description:'vestido em tule, com manga 3/4, decote em V, bordado em detalhes com franja e fechamento nas costas com zíper',
    composition:'bordado',
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
    description:'vestido em crepe, saia tripla, decote em V, fenda, drapeado na cintura e fechamento em zíper nas costas',
    composition:'crepe',
    price: '3.499,99',
    priceDesc:' 1.679,99',
    size: '40',
    color: 'verde abacate ',
    images: [
      'Vestidos/lidia.png',
     
      'Vestidos/lidia3.png',
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anne',
    description:'vestido em crepe, saia tripla, decote em V, fenda, com detalhe em flor nos ombros e fechamento em zíper nas costas',
    composition:'crepe',
    price: '3.499,98',
    priceDesc:' 1.784,99',
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
    description:'vestido em crepe, saia tripla, decote em V, fenda, com detalhe em flor nos ombros e fechamento em zíper nas costas',
    composition:'crepe',
    price: '3.499,98',
    priceDesc:' 1.784,99',
    size: '42 ,44',
    color: 'verde água ',
    images: [
      'Vestidos/AnneV.png',
     
      
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Ofélia',
    description:'vestido em crepe, saia tripla, fenda, manga única com lenço, drapeado e fechamento em zíper nas costas ',
    composition:'crepe',
    price: '3.499,98',
    priceDesc:' 1.784,99',
    size: '42 ,44',
    color: 'verde folha ',
    images: [
      'Vestidos/orfelia.png',
      'Vestidos/orfelia2.png',
    
      
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Ofélia',
    description:'vestido em crepe, saia tripla, fenda, manga única com lenço, drapeado e fechamento em zíper nas costas ',
    composition:'crepe',
    price: '3.499,98',
    priceDesc:' 1.784,99',
    size: '44',
    color: 'verde água  ',
    images: [
      'Vestidos/orfeliaV.png',
      'Vestidos/orfeliaV2.png',
    
      
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Julia ',
    description:' vestido em tule bordado, com forro, bojo, decote nas costas, fenda e fechamento em zíper nas costas',
    composition:'bordado',
    price: '9.499,99 ',
    priceDesc:' 4.774,99',
    size: '38 ',
    color: 'vermelho',
    images: [
      'Vestidos/julia3.png',
      'Vestidos/julia2.png',
     
     
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anastácia',
    description:'vestido em renda, forrado, sem bojo, recorte na cintura e fechamento em zíper nas costas ',
    composition:' renda',
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
    description:'vestido em linho, drapeado com manga e fechamento frontal em botões ',
    composition:'linho',
    price: '499,99 ',
    priceDesc:' 234,99',
    size: '38 ',
    color: 'verde musgo ',
    images: [
      'Vestidos/vanessap.png',
      'Vestidos/vanessap2.png',
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Ariel',
    description:'vestido em crepe, saia tripla, fenda, manga única com lenço, drapeado, recorte frontal e fechamento em zíper nas costas ',
    composition:'crepe',
    price: '3499,99',
    priceDesc:' 1.784,99 ',
    size: '42,40',
    color: 'lilás,verde água, verde abacate',
    images: [
      'Vestidos/ariel.jpg',
      'Vestidos/ariel2.jpg',
    
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    description:'chemise 100% algodão, fechamento frontal com botões e detalhes em detalhes nos punhos ',
    composition:'algodão ',
    price: '499,99',
    priceDesc:' 254,99 ',
    size: '38',
    color: 'branca ',
    images: [
      'ChemiseAmara/chemisebranca.png',
    
      
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    description:'chemise 100% algodão, fechamento frontal com botões e detalhes em detalhes nos punhos ',
    composition:'algodão ',
    price: '499,99',
    priceDesc:' 254,99 ',
    size: '40',
    color: 'Bege',
    images: [
      'ChemiseAmara/chemisebege.png',

    
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    description:'chemise 100% algodão, fechamento frontal com botões e detalhes em detalhes nos punhos ',
    composition:'algodão ',
    price: '499,99',
    priceDesc:' 254,99 ',
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
    description:' conjunto um linho, blusa em decote quadrado, manga princesa com babado, pregas  e fechamento em zíper nas costas. Calça com bolso frontal, desenho de bolso nas laterais e fechamento em zíper ',
    composition:'linho',
    price: '824,99',
    priceDesc:' 439,99',
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
    description:'conjunto em linho, blusa em decote quadrado, manga princesa com babado, pregas  e fechamento em zíper nas costas. Calça com bolso frontal, detalhe em amarração e fechamento em zíper',
    composition:'linho',
    price: '824,99',
    priceDesc:' 439,99',
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
    description:'conjunto em linho, blusa em decote em V, manga princesa, e fechamento em zíper nas costas. Calça com bolso frontal e fechamento em zíper',
    composition:'linho',
    price: '824,99',
    priceDesc:' 439,99',
    size: '44',
    color: 'rosa seco',
    images: [
      'Conjunto/alicerose.png',
      'Conjunto/alicerose2.png',
     
    ]
  },
  {
    id: 1,
    name: 'Conjuto Alice',
    description:'conjunto em linho, blusa em decote em V e fechamento em zíper nas costas. Calça com bolso frontal e fechamento em zíper',
    composition:'linho',
    price: '824,99',
    priceDesc:' 439,99',
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
    description:'blusa em lesie, manga princesa com babado, decote quadrado e fechamento em zíper nas costas ',
    composition:'lisie',
    price: '264,99',
    priceDesc:' 149,99',
    size: '38,44',
    color: 'Branca',
    images: [
      'Blusas/camila.png',
      
   
    ]
  },
  {
    id: 1,
    name: 'Blusa Mayra',
    description:' blusa em crepe dupla, com detalhe desfiado frontal e nos punhos',
    composition:'',
    price: '524,99',
    priceDesc:' 269,99',
    size: '40',
    color: 'Cinza',
    images: [
      'Blusas/mayra.png',
      
   
    ]
  },
  {
    id: 1,
    name: 'Camisa Rafa',
    description:'camisa em crepe, fechamento em botões e detalhes drapeado na gola e pulsos com fechamento em zíper',
    composition:'crepe ',
    price: '629,99',
    priceDesc:' 318, 99',
    size: '38',
    color: 'Verde',
    images: [
      'Camisas/rafa.png',
      
   
    ]
  },
  {
    id: 1,
    name: 'Camisa Rafa',
    description:'camisa em crepe, fechamento em botões e detalhes drapeado na gola e pulsos com fechamento em zíper',
    composition:'crepe ',
    price: '629,99',
    priceDesc:' 318, 99',
    size: '38',
    color: 'cinza',
    images: [
      'Camisas/rafac.png',
      'Camisas/rafac2.png',
      
   
    ]
  },
  
  {
    id: 1,
    name: 'Blusa Mayra',
    description:'blusa em crepe dupla, com detalhe desfiado frontal e nos punhos',
    composition:'crepe',
    price: '724,99',
    priceDesc:'  269,99',
    size: '38',
    color: 'verde água',
    images: [
      'Blusas/nataliav.png',
      'Blusas/nataliav2.png',
     
    
    ]
  },
  {
    id: 1,
    name: 'Blusa Mayra',
    description:'blusa em crepe dupla, com detalhe desfiado frontal e nos punhos',
    composition:'crepe',
    price: '724,99',
    priceDesc:'  269,99',
    size: '38',
    color: 'azul claro',
    images: [
   
   

      'Blusas/nataliaa3.png', 
      'Blusas/nataliaa2.png',
    
    ]
  },
  {
    id: 1,
    name: 'Blusa Mayra',
    description:' blusa em crepe dupla, com detalhe desfiado frontal e nos punhos',
    composition:'crepe',
    price: '524,99',
    priceDesc:' 269,99',
    size: '40',
    color: 'terracota',
    images: [
      'Blusas/mayrat.png',
      'Blusas/mayrat2.png',
      'Blusas/mayrat3.png',
    
    ]
  },
  {
    id: 1,
    name: 'Blusa Nathalia',
    description:'blusa em crepe bordada, com detalhe desfiado frontal e nos punho',
    composition:'crepe',
    price: '724,99',
    priceDesc:' 394,99 ',
    size: '38',
    color: 'verde água bordada',
    images: [
     
      'Blusas/nataliavb2.png',
      'Blusas/nataliavb.png',
     
    
    ]
  },
  {
    id: 1,
    name: 'Calça Zara',
    description:' calça em brim com elastano, bolso frontal, bolso lateral, fechamento em zíper frontal e detalhe em cinto no mesmo tecido ',
    composition:'brim com elástano',
    price: '384,99',
    priceDesc:' 164,99',
    size: '38',
    color: 'Laranja',
    images: [
      'Calças/zara.png',
    
     
    
    ]
  },
  {
    id: 1,
    name: 'Blusa Zoe',
    description:'blusa em Jersey, decote V e manga princesa',
    composition:'jersey',
    price: '214,99 ',
    priceDesc:'  109,99',
    size: ' 36, 38 ,40',
    color: 'roxa',
    images: [
      'Blusas/zoe.png',
      'Blusas/zoe2.png',
      'Blusas/zoe3.png',
    ]
  },
  {
    id: 1,
    name: 'Blusa Zoe',
    description:'blusa em Jersey, decote V e manga princesa',
    composition:'jersey',
    price: '214,99 ',
    priceDesc:'  109,99',
    size: ' 36, 38 ,40',
    color: 'preto',
    images: [
      'Blusas/zoep.png',
    
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
