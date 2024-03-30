import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TopContainer = styled.div`
    position: relative;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
`;

const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
    box-shadow: 5px 5px 5px #333;
    
`;

const TextContainerInside = styled.div`
    position: absolute;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 1.5em;
    font-family: monospace;
    z-index: 1;`;

const TextContainerBelow = styled.div`
    color: black;
    text-align: center;
    padding: 20px;
    font-size: 1.2em;
    font-family: monospace;
    background: rgba(125, 147, 236, 0.4);

`;


const StyledH1 = styled.h1`
  text-align: center;
  font-size: 7em;    
  color: #1e1e1f;
   margin: 20px;
   font-family: 'monospace';
`;


const StyledImg = styled.img`
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


const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background-color: #fc5f5f;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #639ceb;
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
const images = ["boxeo1.jpg", "boxeo3.jpg"]; // Reemplaza con las rutas a tus imágenes
function Boxeo () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex]);
  return (
    <div>
      <StyledH1>BOXEO</StyledH1>
      <ButtonContainer>
    <ButtonWrapper>
    <StyledLink to="/ReservarClases/ReservarClaseBoxeo">
            <StyledButton>Reservar Clase</StyledButton>
        </StyledLink>
    </ButtonWrapper>
</ButtonContainer>
<TopContainer>
        <BackgroundImage src={images[currentImageIndex]} alt="Boxeo" />
        <Overlay />
        <TextContainerInside>
          <h2>Horario de las clases</h2>
          <p>Lunes: 12:00 - 13:00 
            <br />
            Martes: 18:00 - 19:00 
            <br />
            Miércoles: 17:30 - 18:30
            <br />
            Jueves: 18:00 - 19:00 
            <br />
            Viernes: 17:30 - 18:30
            <br />
            Sábado: 12:00 - 13:00</p>
          </TextContainerInside>
      </TopContainer>
      <TextContainerBelow>
      <h2>Instructores</h2>
      <p>Las clases de Boxeo son impartidas por los instructores Diego y Javier.</p>
          <h2>Beneficios</h2>
          <p>Las clases de boxeo ofrecen un entrenamiento cardiovascular intenso que ayuda a mejorar la resistencia y la capacidad pulmonar. Los ejercicios de alta intensidad como el trabajo de saco y los sprints mejoran la salud del corazón y los pulmones, promoviendo una mejor salud cardiovascular en general.</p>
        </TextContainerBelow>
      </div>
  );
}

export default Boxeo;