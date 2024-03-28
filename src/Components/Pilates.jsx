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
    color: #7b7979;
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
  color: #7b7979;
  margin: 20px;
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

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 20px;
  background-color:rgba(250, 193, 122, 0.691);
  border-radius: 10px;
  border: 1px solid #969595;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  width: 80%; // ajustar el tamaño de la tarjeta aquí
  text-align: center; 
  font-size: 1em; 
  font-family: monospace;
  color: #7b7979; 
  transition: 0.3s;

  /* Mueve la tarjeta hacia arriba cuando pasas el mouse por encima */
  &:hover {
    transform: translateY(-10px);
  }
`;

const InfoCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

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
<InfoCardContainer>
        <InfoCard>
          <h2>Horario de las clases</h2>
          <p>Lunes: 17:30 - 18:30  (Principiante)
            <br />
            Martes: 19:30 - 20:30  (Avanzado)
              <br />
            Miércoles: 19:00 - 20:00 (Intermedio)
              <br />
            Jueves: 10:00 - 11:00 AM (Mat)
              <br />
            Viernes: 19:00 - 20:00 (Intermedio)
              <br />
            Sábado: 16:00 - 17:00  (Para la Postura)
              <br />
            Domingo: 15:00 - 16:00 (Con Equipo)</p>
          <h2>Instructores</h2>
          <p>Las clases de yoga son impartidas por los instructores Marta y Laura.</p>
        </InfoCard>
      </InfoCardContainer>

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