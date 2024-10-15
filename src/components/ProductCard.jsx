import React, { useState } from 'react';
import styled from 'styled-components';

// Definindo os componentes estilizados
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 15px;
  gap: 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items:center;
    padding: 5px;


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
    padding-left: 10px;
  }
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  text-transform: uppercase;
  color: #000000;
`;
const ProductSubTitle = styled.h2`
  font-size: 1.1em;
  text-transform: uppercase;
  color: #000000;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
  color: #ff0606;
  
`;

const ProductPriceDesc = styled.p`
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  color: #4CAF50;
`;

const ProductSize = styled.p`
padding-left:1em;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 400;
  color: #070404;
`;
const ProductDescription= styled.p`
padding-left:1em;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 400;
  color: #070404;
`;const ProductComposition= styled.p`
padding-left:1em;
font-size: 1em;
text-transform: uppercase;
font-weight: 400;
color: #070404;
`;

const ProductColor = styled.p`
padding-left:1em;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 400;
  color: #000000;
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
  max-width: 370px;
  min-width:370px;
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
width: 50%;
  &:hover {
    background-color: #0056b3;
  }
`;

// Estilos para o modal
const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: top;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed; /* Fixa o modal na tela */
  top: 0;
  left: 0;
  width: 100vw; /* Faz o modal cobrir toda a largura da tela */
  height: 100vh; /* Faz o modal cobrir toda a altura da tela */
  z-index: 1000; /* Garante que o modal fique acima de outros elementos */
`;


const ModalContent = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
`;

const ModalImage = styled.img`
  width: 100%;
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
    const message = `Olá! Gostaria de comprar: 
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
          <ProductSubTitle>Tamanho:</ProductSubTitle>
          <ProductSize> {product.size}</ProductSize>
          <ProductSubTitle>Cor:</ProductSubTitle>
          <ProductColor> {product.color}</ProductColor>
          <ProductSubTitle>Descrição:</ProductSubTitle>
          <ProductDescription> {product.description}</ProductDescription>
          <ProductSubTitle>Composição:</ProductSubTitle>
          <ProductComposition>{product.composition}</ProductComposition>
         <ProductPrice> <strike>R$  {product.price}</strike> </ProductPrice>
          <ProductPriceDesc>R$ {product.priceDesc}</ProductPriceDesc>
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
