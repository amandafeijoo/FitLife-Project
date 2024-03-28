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

    font-size: 1.4em;
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
    box-shadow: 2px 2px 6px rgba(20, 20, 20, 0.1);

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


function Fuerza() {
  return (
    <div>
      <StyledH1>FUERZA</StyledH1>
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
          <p>Martes: 8:30 - 9:30 AM (Total)
            <br />
            Jueves: 8:30 - 9:30 AM (Y Resistencia)
            <br />
            Viernes: 7:00 - 8:00 AM (Total del Cuerpo), 12:00 - 13:00 PM (Acondicionamiento)
            <br />
            Domingo: 1:00 - 14:00  (Total del Cuerpo)</p>
          <h2>Instructores</h2>
          <p>Las clases de yoga son impartidas por los instructores Natalia y Diego.</p>
        </InfoCard>
      </InfoCardContainer>
      <GridContainer>
        <Card>
          <TextContainer>
            <p>Desarrollo Muscular y Fuerza Funcional:
                Nuestras clases de fuerza están diseñadas para ayudar a nuestros miembros a desarrollar músculos fuertes y funcionales en todo el cuerpo. A través de una variedad de ejercicios de resistencia, como levantamiento de pesas, entrenamiento con bandas de resistencia y ejercicios corporales, nuestros miembros pueden aumentar su fuerza y resistencia muscular.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/fuerza1.jpg" alt="Yoga 1" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Quema de Grasa y Aumento del Metabolismo:
                El entrenamiento de fuerza es una forma efectiva de aumentar la masa muscular magra y acelerar el metabolismo. Nuestras clases están diseñadas para maximizar la quema de calorías durante y después del ejercicio, ayudando a nuestros miembros a perder grasa corporal y alcanzar sus objetivos de composición corporal.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/fuerza2.jpg" alt="Yoga 2" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Mejora de la Salud Ósea y Articular:
                El entrenamiento de fuerza también puede mejorar la salud ósea y articular, reduciendo el riesgo de osteoporosis y lesiones articulares. Al fortalecer los músculos que rodean las articulaciones y aumentar la densidad ósea, nuestros miembros pueden mejorar su salud musculoesquelética a largo plazo.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/fuerza3.jpg" alt="Yoga 3" />
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

export default Fuerza;