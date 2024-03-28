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


function Pilates() {
  return (
    <div>
      <StyledH1>PILATES</StyledH1>
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
            <p>Reducción del Estrés y la Tensión:
                El Pilates incorpora técnicas de respiración profunda y concentración mental, lo que ayuda a reducir el estrés y la tensión en el cuerpo y la mente. Esto puede conducir a una sensación general de relajación y bienestar.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/pilates1.jpg" alt="Yoga 1" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Fortalecimiento del Centro del Cuerpo:
                Las clases de Pilates se centran en fortalecer los músculos del centro del cuerpo, incluyendo los músculos abdominales, lumbares, pelvis y glúteos. Esto ayuda a mejorar la estabilidad y el equilibrio, así como a prevenir lesiones en la espalda y mejorar la postura.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/pilates2.jpg" alt="Yoga 2" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Mejora de la Flexibilidad y la Movilidad:
                El Pilates incluye una serie de ejercicios diseñados para mejorar la flexibilidad y la movilidad articular. Esto ayuda a aumentar el rango de movimiento en las articulaciones, reducir la rigidez muscular y mejorar la coordinación.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/pilates3.jpg" alt="Yoga 3" />
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

export default Pilates;