import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(56, 55, 54, 0.691);
  }
`;


const TopContainer = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
`;

const TextContainerBelow = styled.div`
    color: black;
    text-align: center;
    padding: 20px;
    font-size: 1.2em;
    font-family: monospace;
    background: rgba(70, 103, 157, 0.4);
    position: absolute;
    z-index: 2;

`;
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 7em;    
  color: #c9c9eb;
   margin: 20px;
   font-family: 'monospace';
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
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



const images = ["instalaciones1.jpg", "instalaciones2.jpg"]; // Reemplaza con las rutas a tus imágenes

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
    <GlobalStyle />
    <div>
      <TopContainer>
      <img src={images[currentImageIndex]} alt="Imagen del gimnasio" />       
       <Overlay />
        <TextContainerBelow>
        <StyledH1>FITLIFE</StyledH1>
      <p>
        En FitLife Gym, nuestra misión es proporcionar un entorno de entrenamiento seguro, inclusivo y motivador para todos, independientemente de su nivel de habilidad o experiencia en el gimnasio. Nos esforzamos por ayudar a nuestros miembros a alcanzar sus metas de salud y fitness, ofreciendo una variedad de clases, equipos de última generación y entrenadores altamente capacitados. Creemos en el poder del fitness para mejorar la calidad de vida y nos comprometemos a hacer del fitness una parte accesible y agradable de la vida cotidiana.
      </p>
        <h2>Servicios Adicionales e Instalaciones Modernas</h2>
        <StyledUl>
          <li>Clases premium</li>
          <li>Entrenadores personales</li>
          <li>Rocódromo</li>
          <li>Ring de boxeo</li>
          <li>Bar de jugos</li>
          <li>Nutrición personal</li>
          <li>Pases mensuales para invitados</li>
          <li>Canchas de baloncesto</li>
          <li>Taquillas</li>
        </StyledUl>
        </TextContainerBelow>
      </TopContainer>
      </div>
    </>
  );
}

export default Mision;