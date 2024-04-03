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

const images = ["pilates1.jpg", "pilates3.jpg"]; // Reemplaza con las rutas a tus imágenes


function Pilates() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex]);

  return (
    <div>
      <StyledH1>PILATES</StyledH1>
      <ButtonContainer>
    <ButtonWrapper>
    <StyledLink to="/ReservarClases/ReservarClasePilates">
            <StyledButton>Reservar Clase</StyledButton>
        </StyledLink>
    </ButtonWrapper>
</ButtonContainer>
<TopContainer>
        <BackgroundImage src={images[currentImageIndex]} alt="Pilates" />
        <Overlay />
        <TextContainerInside>
          <h2>Horario de las clases</h2>
          <p>Lunes: 17:30 - 18:30 
            <br />
            Martes: 19:30 - 20:30  
              <br />
            Miércoles: 19:00 - 20:00 
              <br />
            Jueves: 10:00 - 11:00 AM 
              <br />
            Viernes: 19:00 - 20:00 
              <br />
            Sábado: 16:00 - 17:00 
              <br />
            Domingo: 15:00 - 16:00 </p>
            </TextContainerInside>
      </TopContainer>

      <TextContainerBelow>
        <h2>Instructores</h2>
        <p>Las clases de Pilates son impartidas por los instructores Marta y Laura.</p>
        <h2>Beneficios</h2>
        <p>Las clases de Pilates se centran en fortalecer los músculos del centro del cuerpo, incluyendo los músculos abdominales, lumbares, pelvis y glúteos. Esto ayuda a mejorar la estabilidad y el equilibrio, así como a prevenir lesiones en la espalda y mejorar la postura.</p> 
      </TextContainerBelow>

    </div>
  );
}

export default Pilates;