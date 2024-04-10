import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Acerca from './Acerca';
import { useNavigate } from 'react-router-dom';
import Precios from './Precios';
import Mision from './Mision';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const PageContainer = styled.div`
  animation: 1s ${fadeIn} ease-in;
`;

const StyledButton = styled.button`
  position: relative;
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  margin-top: 20px;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;
  `;

const StyledSection = styled.section`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #6f6e6e, #333333, #808080, #6f6e6e, #333333, #808080); // Crea un degradado de blanco a gris claro a gris medio a gris oscuro a gris
  /* background: linear-gradient(to right, #f8ec87, #f7cc4d, #FFB6C1, #80CBC4); // Crea un degradado de amarillo claro a naranja claro a rosa claro a verde claro */
  border: 1px solid #6dade8;
  width: auto;
  height: 60%;

`;
const CarouselText = styled.p`
  position: absolute; // Posiciona este elemento en relación a su contenedor más cercano con posición relativa
  bottom : 0; // Posiciona en la parte inferior
  left: 0; // Posiciona a la izquierda
  color: #6dade8;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  font-size: 8em;
  width: auto;          
`;

const StyledH2 = styled.h2`
  font-size: 2em;
  color: #007bff;
  text-align: center;
`;

const StyledP = styled.p`
  font-size: 3.1em;
  text-align: center;
  color: #0d0e0d;
  background: rgba(70, 103, 157, 0.4);
  border: px solid #51aed2;
  position: absolute; // Posiciona este elemento en relación a su contenedor más cercano con posición relativa
  top: 50%; // Centra verticalmente
  left: 0%; // Centra horizontalmente
  width: 100%; // Asegura que ocupe todo el ancho
padding: 10% 0;  
`;

const CarouselSlide = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #333;
  transition: transform 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 576px) {
        width: 100%;
    }

    @media (max-width: 320px) {
        width: 100%;
    }
`;

const StyledCarousel = styled(Carousel)`
    width: 70%; // Cambia esto para ajustar el tamaño del carrusel
    margin: auto; // Centra el carrusel
    border: 1px solid #6dbde8;// Agrega un borde al carrusel
    border-radius: 10px; // Agrega bordes redondeados
    overflow: hidden; // Oculta el contenido que se sale del carrusel
    box-shadow: 5px 5px 5px #333; // Agrega sombra al carrusel
    background-color: #fff; // Cambia el color de fondo del carrusel
    cursor: pointer; // Cambia el cursor al pasar sobre el carrusel
    transition: transform 0.5s; // Agrega una transición al carrusel
    &:hover {
        transform: scale(1.05); // Cambia el tamaño del carrusel al pasar el mouse
    }

    .carousel .slide {
        background-color: #333; // Cambia el color de fondo de las diapositivas
    }

    .carousel .control-dots {
        bottom: 10px; // Cambia la posición de los puntos de control
    }

    .carousel .control-dots .dot {
        background-color: #333; // Cambia el color de los puntos de control
    }

    .carousel .control-dots .dot.selected {
        background-color: #e98757; // Cambia el color del punto de control seleccionado
    }

    .carousel .thumbs-wrapper {
        display: none; // Oculta las miniaturas
    }

    .carousel .legend {
        background-color: #333; // Cambia el color de fondo de la leyenda
    }
    
`;

function Inicio() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <StyledButton onClick={() => navigate("/Clases")}>RESERVA TU CLASE</StyledButton> 
      <StyledSection>
        <StyledCarousel autoPlay infiniteLoop>
          <div>
            <StyledImg src="/Imagen1.jpg" alt="Imagen 1" />
            <CarouselText>FITLIFE</CarouselText>
            <StyledButton onClick={() => navigate("/Registrarse")}>REGISTRESE AHORA</StyledButton> 
          </div>
          <div>
            <StyledImg src="/yoga3.jpg" alt="Imagen 2" />
            <CarouselText>FITLIFE</CarouselText>
            <StyledP> ¡APROVECHA 2X1 CLASES DE YOGA!</StyledP>
            <StyledButton onClick={() => navigate("/Registrarse")}>REGISTRESE AHORA</StyledButton>
          </div> 
          <div>
            <StyledImg src="/boxeo1.jpg" alt="Imagen 3" />
            <CarouselText>FITLIFE</CarouselText>
            <StyledButton onClick={() => navigate("/Registrarse")}>REGISTRESE AHORA</StyledButton>
          </div> 
        </StyledCarousel>
      </StyledSection>
      <Precios />
      <Acerca />
      <Mision />
    </PageContainer>
  );
}

export default Inicio;
