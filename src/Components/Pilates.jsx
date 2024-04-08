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
    border-radius: 10px;
    box-shadow: 5px 5px 5px #333;
    
`;

const TextContainerInside = styled.div`
    position: absolute;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 1.5em;
    z-index: 1;`;

const StyledH1 = styled.h1`
   margin-top: 10px;
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
    background: rgba(31, 30, 30, 0.5); //  el último valor para cambiar la opacidad
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

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);

    }
`;

const images = ["pilates1.jpg", "pilates3.jpg"]; 


function Pilates() { 
  const classes = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];
  const currentClassIndex = classes.indexOf('Pilates');
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
      <StyledH1>PILATES</StyledH1>
    <StyledLink to="/ReservarClases/ReservarClasePilates">
            <Button>Reservar Clase</Button>
        </StyledLink>
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
            <h2>Instructores</h2>
        <p> Marta y Laura.</p>
            </TextContainerInside>
      </TopContainer>
      <ClaseGratuita/>
    </div>
  );
}

export default Pilates;