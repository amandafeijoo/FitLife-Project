import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const TopContainer = styled.div`
    position: relative;
    width: auto;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px;
    padding: 20px;

    @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }

`;

const TextContainerBelow = styled.div`
    color: black;
    text-align: center;
    padding: 20px;
    font-size: 1.2em;   
    background: rgba(70, 103, 157, 0.4);
    border: 1px solid #6dbde8;
    position: absolute;
    z-index: 2;

    @media (max-width: 768px) {
    position: static;
    font-size: 1em;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 7em;    
  color: #6dade8;
  margin: 20px;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

  
  const StyledH2 = styled.h2`
  text-align: center;
  font-size: 1%.5;
  color: #6dade8;
  margin: 20px;

`;

const StyledP = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: #d0d0d0;
`;

const StyledLi = styled.li`
  font-size: 1.2em;
  text-align: center;
  color: #b6b4b4;
  font-weight: 400;
`;


const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    position: static;
  }
  
`;
    
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(31, 30, 30, 0.5); // Ajusta el último valor para cambiar la opacidad
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;



const images = ["instalaciones1.jpg", "instalaciones2.jpg"]; 

function Mision() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex]);
  return (
    <> 
    <div>
      <TopContainer>
      <img src={images[currentImageIndex]} alt="Imagen del gimnasio" />       
      <Overlay />
        <TextContainerBelow>
        <StyledH1>FITLIFE</StyledH1>
      <StyledP>
        En FitLife Gym, nuestra misión es proporcionar un entorno de entrenamiento seguro, inclusivo y motivador para todos, independientemente de su nivel de habilidad o experiencia en el gimnasio. Nos esforzamos por ayudar a nuestros miembros a alcanzar sus metas de salud y fitness, ofreciendo una variedad de clases, equipos de última generación y entrenadores altamente capacitados. Creemos en el poder del fitness para mejorar la calidad de vida y nos comprometemos a hacer del fitness una parte accesible y agradable de la vida cotidiana.
      </StyledP>
        <StyledH2>Servicios Adicionales e Instalaciones Modernas</StyledH2>
        <StyledUl>
          <StyledLi>Clases premium</StyledLi>
          <StyledLi>Entrenadores personales</StyledLi>
          <StyledLi>Rocódromo</StyledLi>
          <StyledLi>Ring de boxeo</StyledLi>
          <StyledLi>Bar de jugos</StyledLi>
          <StyledLi>Nutrición personal</StyledLi>
          <StyledLi>Pases mensuales para invitados</StyledLi>
          <StyledLi>Canchas de baloncesto</StyledLi>
          <StyledLi>Taquillas</StyledLi>
        </StyledUl>
        </TextContainerBelow>
      </TopContainer>
      </div>
    </>
  );
}

export default Mision;
