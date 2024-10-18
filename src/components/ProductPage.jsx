import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para a página do produto
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductName = styled.h1`
  font-size: 2em;
  color: #230420;
`;

const ProductDescription = styled.p`
  font-size: 1.2em;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #ff0606;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

function ProductPage({ products }) {
  const { id } = useParams(); // Captura o ID do produto da URL
  const product = products.find((prod) => prod.id === id); // Busca o produto na lista

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <ProductContainer>
      <ProductName>{product.name}</ProductName>
      <ProductImage src={product.images[0]} alt={product.name} />
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>R$ {product.priceDesc}</ProductPrice>
      <BackButton to="/">Voltar</BackButton>
    </ProductContainer>
  );
}

export default ProductPage;
