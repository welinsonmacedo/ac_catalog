import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

function ProductImagePage() {
  const { id, image } = useParams();
  const decodedImageUrl = decodeURIComponent(image); // Decodifica a URL da imagem

  return (
    <ImageContainer>
      <Image src={decodedImageUrl} alt={`Produto ${id}`} />
    </ImageContainer>
  );
}

export default ProductImagePage;
