import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

.slick-dots li.slick-active button:before {
    color: #80e86d !important;
  }
  
  
.slick-dots li button:before {
      color: #80e86d !important;
  }
`;



const StyledH2 = styled.h2` 
    font-size: 2em;
    text-align: center;
    margin: 10px;
    padding: 5px;
    color: #e1f5e6;
    text-shadow: 2px 2px 2px #333;
    border-radius: 10px;
    background: rgba(198, 235, 180, 0.5); 
    box-shadow: 5px 5px 5px #333;
    transition: transform 0.5s;
    border: 1px solid #80e86d;
    &:hover {
        transform: scale(1.1);
    }
    
`;
const CarouselContainer = styled.div`
  margin: 20px;
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  width: 420px;
  height: 550px;
  margin: 60px auto;
  border-radius: 15px;
  perspective: 2000px;
  cursor: pointer;
  border: 1px solid #FF6384;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

.card:hover {
  transform: rotateY(180deg);
}
`;


const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #679e99;
  border-radius: 15px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button1 = styled.button`
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    font-weight: 600;
    margin-top: 20px;
    padding: 20px;
    font-size: 12px;
    letter-spacing: 2px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 40%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
    cursor: pointer;
`;

const FlippableCard = ({ instructor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const navigate = useNavigate();

  return (
    <> 
    <GlobalStyle />
    <CarouselContainer>
    <Card onClick={() => setIsFlipped(!isFlipped)}>
    <CardInner $isFlipped={isFlipped}>
      <CardFront $image={instructor.image} />
        <CardBack>
          {instructor.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <Button1 onClick={(event) => {
                event.stopPropagation();
                navigate(instructor.route);
                }}>Reservar</Button1>        
        </CardBack>
      </CardInner>
    </Card>
    <StyledH2>{instructor.name}</StyledH2>

    </CarouselContainer>
    </>
  );
};

const Instructores = () => {
  const instructorsData = [
    {
        name: "MARTHA",
        image: "/yoga.jpg",
        classes: "Pilates, Yoga",
        route: "/Clases",
        description: [
          "MARTHA",
          "Es una instructora de pilates y yoga con más de 10 años de experiencia.",
          "Está certificada por la Yoga Alliance y ha obtenido su Certificación de Pilates de la Federación Internacional de Pilates.",
          "Su enfoque es ayudar a sus estudiantes a mejorar su fuerza, flexibilidad y equilibrio.",
            "Martha se caracteriza por su estilo amigable y su capacidad para adaptar las clases a las necesidades individuales de cada alumno."          
        ]
      },
      {
        name: "DIEGO",
        image: "/boxeo2.jpg",
        classes: "Boxeo, Fuerza",
        route: "/Clases",
        description: [
          "DIEGO", 
          "Es un instructor de boxeo y fuerza con más de 8 años de experiencia en el entrenamiento de alta intensidad y circuitos.",
          "Está certificado por la National Academy of Sports Medicine (NASM) y posee una Certificación en Entrenamiento Funcional.",
          "Ha participado en campeonatos regionales de boxeo y ha sido coach en diversos eventos de fitness.",
          "Diego se destaca por su energía contagiosa y su dedicación a ver progresar a cada uno de sus alumnos."
        ]
      },
      
      {
        name: "NATALIA",
        image: "/Fuerza.jpg",
        classes: "Resistencia, Acondicionamiento del Cuerpo",
        route: "/Clases",
        description: [
          "NATALIA",
          "Es una instructora de resistencia y acondicionamiento del cuerpo con más de 7 años de experiencia.",
          "Está certificada en Entrenamiento Funcional por la International Sports Sciences Association (ISSA) y ha obtenido una Certificación en Nutrición y Bienestar Holístico.",
          "Combina técnicas de entrenamiento funcional con ejercicios de fuerza para ofrecer sesiones equilibradas y efectivas.",
          "Su compromiso con el desarrollo personal y el bienestar de sus alumnos se refleja en cada clase, donde siempre busca inspirar y empoderar a todos los participantes."
        ]
      },
      {
        name: "LAURA",
        image: "/pilates1.jpg",
        classes: "Yoga, Pilates",
        route: "/Clases",
        description: [
          "LAURA",
          "Es una instructora de yoga y pilates con más de 7 años de experiencia.",
          "Está certificada por la Yoga Alliance y la Federación Internacional de Pilates.",
          "Ha completado cursos avanzados en Anatomía del Movimiento y Mindfulness para el Bienestar.",
            "Laura se especializa en clases de yoga restaurativo y pilates terapéutico, adaptando los ejercicios a las necesidades individuales de sus alumnos.",
        ]
      },
    
      {
        name: "JAVIER",
        image: "/boxeo.jpg",
        classes: "Principiantes, Intermedios",
        route: "/Clases",
        description: [
          "JAVIER",
            "Es un instructor especializado en clases para principiantes y niveles intermedios con más de 5 años de experiencia.",
          "Está certificado por la American Council on Exercise (ACE) y ha completado cursos en Entrenamiento Personal y Nutrición Deportiva.",
          "Su enfoque pedagógico y su habilidad para adaptar los entrenamientos a las necesidades individuales hacen que cada alumno se sienta cómodo y motivado.",
          "Javier imparte clases de nivel general, asegurando que todos, sin importar su nivel de experiencia, puedan beneficiarse de sus conocimientos."
        ]
      }
        
    ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2700,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {instructorsData.map((instructor, index) => (
        <FlippableCard key={index} instructor={instructor} />
      ))}
    </Slider>
  );
}

export default Instructores;
