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
    filter: brightness(100%);
    border-radius: 10px;
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
    background: rgba(247, 137, 137, 0.4);

`;


const StyledH1 = styled.h1`
  text-align: center;
  font-size: 7em;    
  color: #3c61a1;
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

const images = ["yoga1.jpg", "formyoga.jpg"]; // Reemplaza con las rutas a tus imágenes
function Yoga() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex]);

  return (
    <div>
      <StyledH1>Yoga </StyledH1>
      <ButtonContainer>
        <ButtonWrapper>
          <StyledLink to="/ReservarClases/ReservarClaseYoga">
            <StyledButton>Reservar Clase</StyledButton>
          </StyledLink>
        </ButtonWrapper>
      </ButtonContainer>
      <TopContainer>
        <BackgroundImage src={images[currentImageIndex]} alt="Yoga" />
        <Overlay />
        <TextContainerInside>
          <h3>Horario de las clases</h3>
          <p>Lunes: 7:00 - 8:00 / 19:00 - 20:00 
            <br />
            Martes: 10:00 - 11:00 
            <br />
            Miércoles: 7:00 - 8:00  
            <br />
            Jueves: 19:30 - 20:30
            <br />
            Viernes: 12:00 - 13:00 
            <br />
            Sábado: 10:30 - 11:30
            <br />
            Domingo: 10:00 - 11:00</p>
        </TextContainerInside>
      </TopContainer>

      <TextContainerBelow>
        <h2>Instructores</h2>
        <p>Las clases de yoga son impartidas por los instructores Marta y Laura.</p>
        <h2>Beneficios</h2>
        <p>En FitLife, creemos en abordar el bienestar de manera integral, y el yoga es una herramienta poderosa para lograrlo. Además de los beneficios físicos, el yoga también puede ayudar a mejorar el bienestar emocional, espiritual y social, promoviendo una sensación general de salud y felicidad.</p>
      </TextContainerBelow>

    
    </div>
  );
}


export default Yoga;