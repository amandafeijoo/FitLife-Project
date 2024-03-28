import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
`;


const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color:  rgba(246, 169, 76, 0.691);
    color: #333;
    font-size: 1.5em;
    font-family: monospace;
    text-align: center;
    /* line-height: 1.5;
    letter-spacing: 1px; */
    text-transform: uppercase;
    width: 500px;
    height: 500px;
`;
const StyledH1 = styled.h1`
    text-align: center;
    font-size: 5em; 
    font-family: monospace;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    width: 500px;
    height: 500px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    transition: 0.3s;

  /* Mueve la tarjeta hacia arriba cuando pasas el mouse por encima */
  &:hover {
    transform: translateY(-10px);
  }
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    display: block;
    margin:  auto;
    justify-content: center;
    font-size: 1.2em;
    margin: 1em;
    padding: 0.70em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: palevioletred;
    background-color: white;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
`;


function Cardio() {
  return (
    <div>
      <StyledH1>CARDIO</StyledH1>
      <ButtonContainer>
    <ButtonWrapper>
        <StyledLink to="/reserva">
            <StyledButton>Reservar Clase</StyledButton>
        </StyledLink>
    </ButtonWrapper>
</ButtonContainer>
      <GridContainer>
        <Card>
          <TextContainer>
            <p>Quema de Calorías y Pérdida de Peso:
                El entrenamiento cardiovascular es altamente efectivo para quemar calorías y perder peso. Las clases de cardio en FitLife ofrecen una combinación de ejercicios de alta intensidad y de bajo impacto que ayudan a acelerar el metabolismo y a quemar una gran cantidad de calorías durante y después del ejercicio.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/cardio1.jpg" alt="Yoga 1" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Mejora de la Salud Cardiovascular:
                Las clases de cardio en FitLife están diseñadas para elevar la frecuencia cardíaca y mejorar la salud del corazón. Los ejercicios aeróbicos como correr, saltar y bailar ayudan a fortalecer el músculo cardíaco y a mejorar la circulación sanguínea, lo que reduce el riesgo de enfermedades cardíacas y accidentes cerebrovasculares.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/cardio2.jpg" alt="Yoga 2" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Aumento de la Resistencia y la Energía:
                El cardio ayuda a mejorar la resistencia cardiovascular y la capacidad pulmonar, lo que significa que puedes realizar actividades físicas durante más tiempo sin fatigarte. Participar en clases de cardio regularmente en FitLife te ayudará a aumentar tu resistencia y energía en la vida cotidiana.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/cardio3.jpg" alt="Yoga 3" />
          </ImageContainer>
        </Card>
      </GridContainer>
        <ButtonWrapper>
            <StyledLink to="/reserva">
                <StyledButton>Reservar Clase</StyledButton>
        </StyledLink>
    </ButtonWrapper>
    </div>
  );
}

export default Cardio;