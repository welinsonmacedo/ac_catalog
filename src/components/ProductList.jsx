
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
padding: 15px;
padding-bottom: 50px;
background-color: #fcf8f8;

`;
const products = [
  {
    id: 1,
    name: 'Vestido Barbara',
    description:'Este vestido de alça bordado é uma peça deslumbrante e cheia de charme. Com detalhes bordados que adicionam um toque de sofisticação, ele é ideal para ocasiões especiais. As alças delicadas conferem um visual leve e feminino, enquanto o caimento fluido proporciona conforto e elegância. Perfeito para festas, jantares ou passeios, esse vestido é uma escolha irresistível para quem deseja brilhar!',
    composition:'bordado',
    price: '9.949,99',
    priceDesc:' 4.774,99',
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
    description:'Este vestido de crepe com detalhe de flor no ombro é uma peça encantadora e cheia de sofisticação. O tecido leve proporciona um caimento fluido, enquanto o detalhe floral adiciona um toque romântico e único. Ideal para eventos especiais, esse vestido combina elegância e conforto, tornando-o perfeito para quem deseja brilhar com um estilo delicado. Uma escolha maravilhosa para qualquer ocasião!',
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
    description:'Este vestido  bordado é uma peça única que combina estilo e elegância. Os detalhes bordados e realçados , trazem um toque sofisticado e moderno, enquanto o corte fluido garante conforto e liberdade de movimento. Ideal para eventos especiais ou jantares, esse vestido é perfeito para quem deseja se destacar com charme e classe. Uma adição indispensável ao guarda-roupa!',
    composition:'bordado',
    price: '11.999,99',
    priceDesc:' 5.399,99',
    size: '38',
    color: 'Rose  ',
    images: [
      'Vestidos/nataly.png',
      'Vestidos/nataly2.jpg',
    ]
  },
  {
    id: 1,
    name: 'Vestido Lia',
    description:'Este vestido depreado com lenço nas mangas é uma peça moderna e cheia de estilo. O efeito depreado traz um toque de descontração, enquanto os lenços nas mangas adicionam um charme especial e único. Ideal para compor looks casuais ou mais elaborados, esse vestido combina conforto e personalidade, garantindo que você se destaque em qualquer ocasião. Uma escolha versátil para o seu guarda-roupa!',
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
    description:'Este vestido  bordado é a definição de elegância e sofisticação. Com um caimento fluido, ele se ajusta perfeitamente ao corpo, enquanto os detalhes bordados acrescentam um toque de glamour. Ideal para eventos especiais, esse vestido é uma escolha encantadora que combina conforto e estilo, garantindo que você brilhe em qualquer ocasião. Uma peça indispensável no seu guarda-roupa!',
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
    description:'Este elegante vestido  é perfeito para ocasiões especiais. Confeccionado em crepe suave, proporciona um caimento impecável. As laterais em renda adicionam sofisticação e realçam as curvas de forma delicada. Versátil e atemporal, é ideal para festas e jantares, combinando conforto e glamour em uma única peça',
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
    description:'Este vestido listrado é uma peça charmosa e versátil, perfeito para qualquer ocasião. Com botões frontais que adicionam um toque vintage e um cinto que destaca a cintura, ele combina estilo e conforto. As listras elegantes criam uma silhueta alongada, tornando-o ideal para passeios ou eventos informais. Uma escolha prática e cheia de personalidade!',
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
    description:'Este vestido de lisie é a escolha perfeita para quem busca estilo e conforto. Com um corte fluido e leve, ele se adapta ao corpo de maneira elegante. O cinto destaca a cintura, criando uma silhueta feminina e sofisticada. Ideal para ocasiões informais ou passeios, esse vestido é versátil e cheio de charme. Uma peça indispensável no guarda-roupa!',
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
    description:'Este vestido de manga 3/4 bordado é uma peça charmosa e elegante, perfeita para diversas ocasiões. O bordado delicado traz um toque de sofisticação, enquanto as mangas 3/4 oferecem um caimento confortável e versátil. Com um design que valoriza a silhueta, esse vestido é ideal para eventos casuais ou mais formais, garantindo que você esteja sempre impecável. Uma escolha atemporal para o seu guarda-roupa!',
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
    description:'Este vestido de crepe é a definição de elegância e versatilidade. Com um caimento fluido, ele se adapta ao corpo de forma leve e confortável. O tecido de crepe é ideal para diversas ocasiões, desde eventos formais até passeios casuais. Com um design atemporal, esse vestido pode ser facilmente acessorizado, garantindo que você esteja sempre chic e pronta para qualquer situação. Uma peça essencial no guarda-roupa!',
    composition:'crepe',
    price: '3.499,99',
    priceDesc:' 1.679,99',
    size: '38',
    color: 'verde abacate ',
    images: [
      'Vestidos/lidia.png',
     
      'Vestidos/lidia3.png',
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anne',
    description:'Este vestido de crepe com detalhe de flor no ombro é uma peça encantadora e cheia de sofisticação. O tecido leve proporciona um caimento fluido, enquanto o detalhe floral adiciona um toque romântico e único. Ideal para eventos especiais, esse vestido combina elegância e conforto, tornando-o perfeito para quem deseja brilhar com um estilo delicado. Uma escolha maravilhosa para qualquer ocasião!',
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
    description:'Este vestido de crepe com detalhe de flor no ombro é uma peça encantadora e cheia de sofisticação. O tecido leve proporciona um caimento fluido, enquanto o detalhe floral adiciona um toque romântico e único. Ideal para eventos especiais, esse vestido combina elegância e conforto, tornando-o perfeito para quem deseja brilhar com um estilo delicado. Uma escolha maravilhosa para qualquer ocasião!',
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
    description:'Este vestido de manga única com lenço, confeccionado em crepe, é a perfeita combinação de elegância e modernidade. O design assimétrico valoriza a silhueta, enquanto o lenço adiciona um toque de estilo e sofisticação. O tecido leve e fluido proporciona conforto, tornando-o ideal para festas ou eventos especiais. Uma escolha irresistível para quem busca se destacar com charme!',
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
    description:'Este vestido de manga única com lenço, confeccionado em crepe, é a perfeita combinação de elegância e modernidade. O design assimétrico valoriza a silhueta, enquanto o lenço adiciona um toque de estilo e sofisticação. O tecido leve e fluido proporciona conforto, tornando-o ideal para festas ou eventos especiais. Uma escolha irresistível para quem busca se destacar com charme!',
    composition:'crepe',
    price: '3.499,98',
    priceDesc:' 1.784,99',
    size: '42 ,44',
    color: 'verde água  ',
    images: [
      'Vestidos/orfeliaV.png',
      'Vestidos/orfeliaV2.png',
    
      
      
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Julia ',
    description:'Este vestido de alça bordado é uma peça deslumbrante e cheia de charme. Com detalhes bordados que adicionam um toque de sofisticação, ele é ideal para ocasiões especiais. As alças delicadas conferem um visual leve e feminino, enquanto o caimento fluido proporciona conforto e elegância. Perfeito para festas, jantares ou passeios, esse vestido é uma escolha irresistível para quem deseja brilhar!',
    composition:'bordado',
    price: '9.499,99 ',
    priceDesc:' 4.774,99',
    size: '38 ',
    color: 'Vinho ',
    images: [
      'Vestidos/julia3.png',
      'Vestidos/julia2.png',
     
     
     
    ]
  },
  {
    id: 1,
    name: 'Vestido Anastácia',
    description:'Este deslumbrante vestido com decote lateral em renda é a definição de elegância. Com um design que destaca a silhueta, ele combina a delicadeza da renda com um toque de ousadia. Ideal para eventos sofisticados, sua leveza e caimento perfeito garantem conforto e estilo. Uma escolha irresistível para brilhar em qualquer ocasião.',
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
    description:'Este vestido  de linho é a epitome do frescor e da sofisticação. Com um corte fluido e leve, ele é perfeito para os dias ensolarados. O linho respirável proporciona conforto, enquanto a tonalidade rica traz um toque de elegância. Ideal para passeios ou eventos casuais, este vestido é uma escolha encantadora e prática para o verão.',
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
    description:'Este vestido depreado tomara que caia é uma peça ousada e cheia de charme. O design sem alças valoriza os ombros e o colo, enquanto o efeito depreado proporciona um toque moderno e despojado. Ideal para festas ou eventos especiais, ele combina conforto e elegância, garantindo que você se destaque com estilo. Uma escolha perfeita para quem busca um look único e marcante!',
    composition:'crepe',
    price: '3499,99',
    priceDesc:' 1.784,99 ',
    size: '42',
    color: 'lilás',
    images: [
      'Vestidos/ariel.jpg',
      'Vestidos/ariel2.jpg',
    
    ]
  },
  {
    id: 1,
    name: 'Chemise Amara',
    description:'Esta chemise de algodão com botões e mangas longas é uma peça clássica e versátil para qualquer guarda-roupa. Confeccionada em algodão macio, oferece conforto e respirabilidade. O design atemporal, com botões frontais e corte solto, permite diversas combinações, desde looks casuais até produções mais elegantes. Ideal para o dia a dia!',
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
    description:'Esta chemise de algodão com botões e mangas longas é uma peça clássica e versátil para qualquer guarda-roupa. Confeccionada em algodão macio, oferece conforto e respirabilidade. O design atemporal, com botões frontais e corte solto, permite diversas combinações, desde looks casuais até produções mais elegantes. Ideal para o dia a dia!',
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
    description:'Esta chemise de algodão com botões e mangas longas é uma peça clássica e versátil para qualquer guarda-roupa. Confeccionada em algodão macio, oferece conforto e respirabilidade. O design atemporal, com botões frontais e corte solto, permite diversas combinações, desde looks casuais até produções mais elegantes. Ideal para o dia a dia!',
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
    description:'Este conjunto de linho é a escolha ideal para quem busca conforto e estilo. Composto por uma blusa leve e uma calça fluida, o tecido de linho garante frescor e respirabilidade. A paleta de cores naturais traz um toque de sofisticação, tornando-o perfeito para dias ensolarados ou passeios informais. Versátil e elegante, esse conjunto é essencial para um guarda-roupa prático e chique!',
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
    description:'Este conjunto de linho é a escolha ideal para quem busca conforto e estilo. Composto por uma blusa leve e uma calça fluida, o tecido de linho garante frescor e respirabilidade. A paleta de cores naturais traz um toque de sofisticação, tornando-o perfeito para dias ensolarados ou passeios informais. Versátil e elegante, esse conjunto é essencial para um guarda-roupa prático e chique!',
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
    description:'Este conjunto de linho é a escolha ideal para quem busca conforto e estilo. Composto por uma blusa leve e uma calça fluida, o tecido de linho garante frescor e respirabilidade. A paleta de cores naturais traz um toque de sofisticação, tornando-o perfeito para dias ensolarados ou passeios informais. Versátil e elegante, esse conjunto é essencial para um guarda-roupa prático e chique!',
    composition:'linho',
    price: '824,99',
    priceDesc:' 439,99',
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
    description:'Este conjunto de linho é a escolha ideal para quem busca conforto e estilo. Composto por uma blusa leve e uma calça fluida, o tecido de linho garante frescor e respirabilidade. A paleta de cores naturais traz um toque de sofisticação, tornando-o perfeito para dias ensolarados ou passeios informais. Versátil e elegante, esse conjunto é essencial para um guarda-roupa prático e chique!',
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
    description:'Esta blusa  combina estilo e modernidade. O tecido leve e arejado oferece conforto, enquanto o zíper frontal adiciona um toque contemporâneo. Com um corte ajustado e detalhes sutis, ela é perfeita para compor looks casuais ou mais elaborados. Versátil e chic, essa blusa é uma adição prática e elegante ao guarda-roupa.',
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
    description:'',
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
    description:'Esta camisa de crepe com punhos drapeados é a mistura perfeita de sofisticação e estilo contemporâneo. O drapeado nos punhos cria um efeito visual interessante, enquanto o tecido leve garante conforto e fluidez. Ideal para compor looks elegantes ou casuais, essa camisa é uma peça versátil que acrescenta um toque de charme ao seu guarda-roupa. Perfeita para diversas ocasiões!',
    composition:'crepe ',
    price: '629,99',
    priceDesc:' 374,99',
    size: '38',
    color: 'Verde',
    images: [
      'Camisas/rafa.png',
      
   
    ]
  },
  {
    id: 1,
    name: 'Camisa Rafa',
    description:'Esta camisa de crepe com punhos drapeados é a mistura perfeita de sofisticação e estilo contemporâneo. O drapeado nos punhos cria um efeito visual interessante, enquanto o tecido leve garante conforto e fluidez. Ideal para compor looks elegantes ou casuais, essa camisa é uma peça versátil que acrescenta um toque de charme ao seu guarda-roupa. Perfeita para diversas ocasiões!',
    composition:'crepe ',
    price: '629,99',
    priceDesc:' 374,99',
    size: '38',
    color: 'cinza',
    images: [
      'Camisas/rafac.png',
      'Camisas/rafac2.png',
      
   
    ]
  },
  
  {
    id: 1,
    name: 'Blusa Nathalia ',
    description:'Esta blusa de crepe com punhos desfiados é uma peça contemporânea e cheia de personalidade. O tecido leve e fluido garante conforto, enquanto os punhos desfiados adicionam um toque moderno e descontraído. Ideal para compor looks casuais ou mais elaborados, essa blusa traz versatilidade e estilo para o seu guarda-roupa. Uma escolha perfeita para qualquer ocasião!',
    composition:'crepe',
    price: '724,99',
    priceDesc:' 289,99',
    size: '38',
    color: 'verde água',
    images: [
      'Blusas/nataliav.png',
      'Blusas/nataliav2.png',
     
    
    ]
  },
  {
    id: 1,
    name: 'Blusa Nathalia ',
    description:'Esta blusa de crepe com punhos desfiados é uma peça contemporânea e cheia de personalidade. O tecido leve e fluido garante conforto, enquanto os punhos desfiados adicionam um toque moderno e descontraído. Ideal para compor looks casuais ou mais elaborados, essa blusa traz versatilidade e estilo para o seu guarda-roupa. Uma escolha perfeita para qualquer ocasião!',
    composition:'crepe',
    price: '724,99',
    priceDesc:' 289,99',
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
    description:'Esta blusa de crepe com punhos desfiados é uma peça contemporânea e cheia de personalidade. O tecido leve e fluido garante conforto, enquanto os punhos desfiados adicionam um toque moderno e descontraído. Ideal para compor looks casuais ou mais elaborados, essa blusa traz versatilidade e estilo para o seu guarda-roupa. Uma escolha perfeita para qualquer ocasião!',
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
    description:'Esta blusa de crepe com punhos desfiados e bordados é uma peça única e cheia de estilo. O tecido leve proporciona um caimento fluido, enquanto os detalhes desfiados adicionam um toque descontraído e moderno. Os bordados delicados enriquecem a blusa, tornando-a perfeita para compor looks sofisticados ou casuais. Uma escolha versátil que eleva qualquer guarda-roupa!',
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
    description:'Esta calça feita de brim com elástano é a combinação perfeita de conforto e praticidade. Com um corte moderno e bolsos funcionais, ela é ideal para o dia a dia. O elastano proporciona flexibilidade e liberdade de movimento, enquanto o tecido de brim garante durabilidade e um visual despojado. Versátil, pode ser usada em diversas ocasiões, do trabalho a passeios casuais. Uma peça indispensável no guarda-roupa!',
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
    description:'Esta blusa em V com mangas estilo princesa, confeccionada em jersey, é a perfeita combinação de elegância e conforto. O decote em V valoriza o colo, enquanto as mangas bufantes trazem um charme romântico ao look. O tecido de jersey proporciona um caimento fluido e leve, ideal para o dia a dia ou ocasiões especiais. Uma peça versátil que agrega estilo a qualquer guarda-roupa!',
    composition:'jersey',
    price: '214,99 ',
    priceDesc:' 128,99',
    size: '38,40',
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
    description:'Esta blusa em V com mangas estilo princesa, confeccionada em jersey, é a perfeita combinação de elegância e conforto. O decote em V valoriza o colo, enquanto as mangas bufantes trazem um charme romântico ao look. O tecido de jersey proporciona um caimento fluido e leve, ideal para o dia a dia ou ocasiões especiais. Uma peça versátil que agrega estilo a qualquer guarda-roupa!',
    composition:'jersey',
    price: '214,99 ',
    priceDesc:' 128,99',
    size: '38,40',
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
