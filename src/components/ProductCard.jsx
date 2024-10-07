import React, { useState } from 'react';
import styled from 'styled-components';

// Definindo os componentes estilizados
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items:flex-start;

  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content:flex-start; 
    padding-left: 40px;
  }
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #ff0606;
  text-decoration: underline;
`;

const ProductPriceDesc = styled.p`
  font-size: 1.5em;
  color: #4CAF50;
`;

const ProductSize = styled.p`
  font-size: 1em;
  color: #555;
`;

const ProductColor = styled.p`
  font-size: 1em;
  color: #888;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  position: relative; /* Adicionando position relative para posicionar as setas */

  & > button {
    position: absolute; /* Posicionando as setas */
    top: 50%;
    transform: translateY(-50%);
    background: none; /* Removendo fundo */
    border: none; /* Removendo borda */
    cursor: pointer;
    font-size: 2em; /* Tamanho das setas */
    z-index: 1; /* Certificando que as setas ficam acima da imagem */
  }

  & > button.left {
    left: 10px; /* Posição da seta esquerda */
  }

  & > button.right {
    right: 10px; /* Posição da seta direita */
  }
`;

const ProductImage = styled.img`
  max-width: 400px;
  min-width: 400px;
  object-fit: cover;
  height: auto;
  border-radius: 8px;
  background-color: #e7e7e7;
  cursor: pointer; /* Muda o cursor para indicar que é clicável */
`;

const Arrow = styled.button`
  color: #3d0808; /* Cor do texto da seta */
  font-size: 2em; /* Tamanho da seta */
  background-color: ${({ direction }) => (direction === 'left' ? '#ddd' : '#ddd')}; /* Cor dependendo da direção */
  border-radius: 50%; /* Tornando as setas circulares */
  padding: 20px; /* Adicionando espaçamento ao redor do texto */
  transition: background-color 0.3s; /* Efeito de transição ao passar o mouse */

  &:hover {
    background-color: ${({ direction }) => (direction === 'left' ? '#ffffff' : '#ffffff')}; /* Cor ao passar o mouse */
  }
`;

const NavButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const BuyButton = styled(NavButton)`
  background-color: #99c9a7;
  margin: 0;
width: 70%;
  &:hover {
    background-color: #0056b3;
  }
`;

// Estilos para o modal
const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000; /* Certificando que o modal fica acima de outros elementos */
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  width: 60%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
`;

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleBuy = () => {
    const message = `Olá! Gostaria de comprar o vestido: 
    \nNome: ${product.name} 
    \nPreço: R$ ${product.priceDesc} 
    \nCor: ${product.color} 
    \nTamanho: ${product.size}`;

    // Substitua '5511998765432' pelo seu número de WhatsApp
    const yourWhatsAppNumber = '5534996717951';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
};

  return (
    <>
      <Card>
        <ImageContainer>
          <ProductImage
            src={product.images[currentImageIndex]}
            alt={`${product.name} - ${currentImageIndex + 1}`}
            onClick={() => setIsModalOpen(true)} // Abre o modal ao clicar na imagem
          />
          <Arrow className="left" direction="left" onClick={handlePrevImage}>&lt;</Arrow>
          <Arrow className="right" direction="right" onClick={handleNextImage}>&gt;</Arrow>
        </ImageContainer>
        <ContainerContent>
          <ProductName>{product.name}</ProductName>
          <ProductSize>Tamanho: {product.size}</ProductSize>
          <ProductColor>Cor: {product.color}</ProductColor>
          <ProductPrice>Preço: De R$ {product.price}</ProductPrice>
          <ProductPriceDesc>Por R$ {product.priceDesc}</ProductPriceDesc>
          <BuyButton onClick={handleBuy}>Comprar</BuyButton>
        </ContainerContent>
      </Card>

      {/* Modal para mostrar a imagem em tamanho maior */}
      <Modal isOpen={isModalOpen}>
        <ModalContent>
          <ModalImage src={product.images[currentImageIndex]} alt={product.name} />
          <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductCard;
