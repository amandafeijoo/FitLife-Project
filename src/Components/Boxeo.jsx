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


function Boxeo () {
  return (
    <div>
      <StyledH1>BOXEO</StyledH1>
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
          <p>Lunes: 12:00 - 13:00 PM (Intermedia)
            <br />
            Martes: 18:00 - 19:00  (Principiantes)
            <br />
            Miércoles: 17:30 - 18:30  (Alta Intensidad)
            <br />
            Jueves: 18:00 - 19:00 PM (Avanzado)
            <br />
            Viernes: 17:30 - 18:30 PM (Para Todos los Niveles)
            <br />
            Sábado: 12:00 - 13:00 PM (Entrenamiento en Circuito)</p>
          <h2>Instructores</h2>
          <p>Las clases de yoga son impartidas por los instructores Diego y Javier.</p>
        </InfoCard>
      </InfoCardContainer>
      <GridContainer>
        <Card>
          <TextContainer>
            <p>Acondicionamiento Cardiovascular:
                  Las clases de boxeo ofrecen un entrenamiento cardiovascular intenso que ayuda a mejorar la resistencia y la capacidad pulmonar. Los ejercicios de alta intensidad como el trabajo de saco y los sprints mejoran la salud del corazón y los pulmones, promoviendo una mejor salud cardiovascular en general.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/boxeo1.jpg" alt="Yoga 1" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Fortalecimiento Muscular y Tono Corporal:
                  El entrenamiento de boxeo implica una amplia variedad de movimientos que trabajan diferentes grupos musculares en todo el cuerpo. Esto ayuda a fortalecer y tonificar los músculos, especialmente los brazos, hombros, espalda, abdomen y piernas, promoviendo una apariencia física más definida y atlética.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/boxeo2-1.jpg" alt="Yoga 2" />
          </ImageContainer>
        </Card>
        <Card>
          <TextContainer>
            <p>Mejora de la Coordinación y la Agilidad:
                  El boxeo requiere movimientos rápidos y precisos que mejoran la coordinación mano-ojo y la agilidad corporal. Los ejercicios de golpear el saco y esquivar los golpes ayudan a mejorar la coordinación y los reflejos, lo que puede ser beneficioso tanto en el deporte como en la vida cotidiana.</p>
            </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <StyledImg src="/boxeo3.jpg" alt="Yoga 3" />
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

export default Boxeo;