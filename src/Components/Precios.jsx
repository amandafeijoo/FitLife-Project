import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledSection = styled.section`
  padding: 10px;
  border: 1px solid #6dbde8;
  color: #000000; 
  width: 100%;
  height: 30%;
  font-size: 1.2em;
  background: rgba(107, 128, 163, 0.4);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5; 
  color: #161616; 
  margin-bottom: 20px;
  border-bottom: 2px solid #e86d6d;
  padding-bottom: 10px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  display: block;
  appearance: none;
  

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;


const Price = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.5em;
  color: #080808;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
`;

const Benefits = styled.ul`
  font-family: 'Oswald', sans-serif;
  font-size: 1em;
  color: #212222;

  margin-bottom: 20px;
  font-weight: 400;
`;
const StyledH1 = styled.h1`
  font-size: 4em;
  color: #6dade8;
  text-align: center;
`;

const StyledP = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #353536;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #eb7377;
  background-color: #f3f0f0;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  &:hover {
    transform: translateY(-10px);
  }  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
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
  width: 300%;
  font-weight: 400;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;
  `;

const MembresiaCard = ({ titulo, precio, beneficios }) => {
  const membresia = { titulo, precio, beneficios };
  const navigate = useNavigate();

  return (
    <Card>
    <Title>{membresia.titulo}</Title>
    <Price>{membresia.precio}€ al mes</Price>
    <Benefits>
      {membresia.beneficios.map(beneficio => (
        <li key={beneficio}>{beneficio}</li>
      ))}
    </Benefits>
    <ButtonContainer>
      <Button onClick={() => navigate('/registrarse')}>Elegir</Button>
    </ButtonContainer>
  </Card>
  );
};

const MembresiasPage = () => {
  const membresias = [
    {
      titulo: 'Abono Básico',
      precio: 25,
      beneficios: [
        'MATRICULA GRATIS',
        'Acceso ilimitado al gimnasio durante horas hábiles.',
        'Reserva de clases grupales hasta con 24 horas de antelación.',
        'Asesoramiento inicial de un entrenador personal.',
        'Acceso a áreas de cardio y pesas.',
        'Descuentos en productos seleccionados del gimnasio.',
        'Descuento en la tarifa de parking.'
      ],
    },
    {
      titulo: 'Abono Premium',
      precio: 35,
      beneficios: [
        'MATRICULA GRATIS',
        'Todos los beneficios del abono básico.',
        'Acceso ilimitado al gimnasio las 24 horas del día.',
        'Sesiones de entrenamiento personalizadas dos veces al mes.',
        'Acceso a clases grupales hasta con 12 horas de antelación.',
        'Descuentos en productos y servicios seleccionados del gimnasio.',
        'Descuento en la tarifa de parking.'
      ],
    },
    {
      titulo: 'Abono Gold',
      precio: 55,
      beneficios: [
        'MATRICULA GRATIS',
        'Todos los beneficios del abono premium.',
        'Acceso exclusivo a clases avanzadas y eventos especiales.',
        'Sesiones de entrenamiento personalizadas una vez por semana.',
        'Acceso a las clases grupales sin límite de antelación.',
        'Asesoramiento nutricional personalizado.',
        'Uso gratuito de las instalaciones para un invitado una vez al mes.',
        'Parking gratuito',
        'Descuentos exclusivos en productos y servicios seleccionados del gimnasio.'
      ],
    },
  ];

  return (
    <div>
      <StyledSection>
      <StyledH1>CUOTAS FITLIFE</StyledH1>
      <StyledP>Hazte socio hoy y aprovecha nuestra promoción especial
        <br />
      ¡TODO EL MES DE ABRIL MATRICULA GRATIS!
      </StyledP>
      <CardContainer>
      {membresias.map((membresia, index) => (
        <MembresiaCard key={index} {...membresia} />
      ))}
      </CardContainer>
      </StyledSection>
    </div>
  );
};

export default MembresiasPage;