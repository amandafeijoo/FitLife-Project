import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavigationLinks from './NavigationLinks';
import ClaseGratuita from './ClaseGratuita';

const TopContainer = styled.div`
    position: relative;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #9ce297;
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
    z-index: 1;
    `;

  const StyledH1 = styled.h1`
  margin-bottom: 0px;
  margin-top: -50px;
  text-align: center;
  color: white;
  font-size: 100px;
  padding-bottom: 0px;
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
    background: rgba(31, 30, 30, 0.5); // el último valor para cambiar la opacidad
`;


const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
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

const StyledLink = styled(Link)`
    text-decoration: none;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1024px) {
        width: 30%;
    }

    @media (min-width: 1200px) {
        width: 20%;
    }

    @media (min-width: 1400px) {
        width: 15%;
    }
`;
const images = ["boxeo1.jpg", "boxeo3.jpg"]; 


function Boxeo () {
  const classes = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];
  const currentClassIndex = classes.indexOf('Boxeo');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex]);
  return (
    <div>
      <NavigationLinks classes={classes} currentClassIndex={currentClassIndex} />
      <StyledH1>BOXEO</StyledH1>
      <StyledLink to="/ReservarClases/ReservarClaseBoxeo">
            <Button>Reservar Clase</Button>
          </StyledLink>
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
            <h2>Instructores</h2>
          <p> Diego y Javier.</p>
          </TextContainerInside>
      </TopContainer>
      <ClaseGratuita/>
      </div>
  );
}

export default Boxeo;