import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { createGlobalStyle } from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Acerca from './Acerca';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgba(244, 189, 150, 0.691); // Reemplaza #yourColor con el color que desees
    }
`;

const StyledSection = styled.section`
  padding: 20px;
  background-color: rgba(246, 169, 76, 0.691);
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const StyledH2 = styled.h2`
  font-size: 2em;
  color: #007bff;
`;

const StyledP = styled.p`
  font-size: 1.2em;
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

const CarouselText = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: rgba(236, 158, 158, 0.691);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  font-size: 10em;
`;

const StyledCarousel = styled(Carousel)`
    width: 100%; // Cambia esto para ajustar el tamaño del carrusel
    margin: auto; // Centra el carrusel
    border: 1px solid #333; // Agrega un borde al carrusel
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


const StyledButton = styled.button`
  position: absolute;
  bottom: 100px;
  left: 80%;
  transform: translateX(-50%);
  padding: 10px 20px;
  color: #fff;
  background-color: #333;
  border: none;
  font-size: 1.5em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgba(236, 158, 158, 0.691);
  }
`;


function Inicio() {
    return (
        <> 
        <GlobalStyle />
      <StyledSection>
        <StyledH2></StyledH2>
        <StyledP></StyledP>
        <StyledCarousel autoPlay infiniteLoop>
          <div>
            <img src="/Imagen1.jpg" alt="Imagen 1" />
            <CarouselText>FITLIFE</CarouselText>
            <StyledButton>REGISTRESE AHORA</StyledButton> {/* Aquí está tu nuevo botón */}
          </div>
          {/* <div>
            <img src="/Imagen2.jpg" alt="Imagen 2" />
            <CarouselText>  MI ESTILO DE VIDA</CarouselText>
          </div> */}
          {/* <div>
            <img src="Imagen3.jpg" alt="Imagen 3" />
            <CarouselText>Texto para la imagen 3</CarouselText>
          </div> */}
        </StyledCarousel>
      </StyledSection>
      <Acerca />

    </>
    );
  }


export default Inicio;