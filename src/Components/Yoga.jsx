import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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


function Yoga() {
  return (
    <div>
  
      <StyledH1>Yoga</StyledH1>
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
            <p>El yoga ofrece una oportunidad para encontrar paz y serenidad en medio del ajetreo diario. A través de la práctica de posturas, respiración consciente y meditación, nuestros miembros pueden aprender a manejar el estrés y encontrar un equilibrio mental y emocional.</p>
          </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/yoga1.jpg" alt="Yoga 1" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>El yoga es una práctica holística que involucra tanto el cuerpo como la mente. Al sincronizar el movimiento con la respiración y cultivar la atención plena, nuestros miembros pueden experimentar una mayor sensación de conexión mente-cuerpo y vivir con más conciencia en el momento presente.</p>
          </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/yoga2.jpg" alt="Yoga 2" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>En FitLife, creemos en abordar el bienestar de manera integral, y el yoga es una herramienta poderosa para lograrlo. Además de los beneficios físicos, el yoga también puede ayudar a mejorar el bienestar emocional, espiritual y social, promoviendo una sensación general de salud y felicidad.</p>
          </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/yoga3.jpg" alt="Yoga 3" />
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

export default Yoga;