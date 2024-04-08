
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
    margin: 0 auto;
    max-width: 1300px;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: rgba(145, 146, 147, 0.691);

`;
    
const Card = styled.div`
    background-color:rgba(59, 134, 233, 0.691) ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 10px;
    border: 1px solid #9ce297;
    height: 90%;
    width: 80%;
    padding: 1rem;
    perspective: 1000px;

  /* Mueve la tarjeta hacia arriba cuando pasas el mouse por encima */
  &:hover {
    transform: translateY(-10px);
  }
`;
const CardInner = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  /* position: relative; */
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'none'};
`;
const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  /* ...estilos para el frente de la tarjeta... */
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #363737;
  /* ...estilos para el dorso de la tarjeta... */
`;

const BackText = styled.p`
  font-size: 1.2em;
  text-align: justify;
  color: #beacac;
  padding: 5rem;
  /* ...otros estilos que quieras aplicar... */
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h2`
    font-size: 2em;
    text-align: center;
  color: #d6d4d4;
`;

const Text = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: #a7ebb2;
  margin-top: -1rem;

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

const FlippableCard = ({ children }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <Card onClick={() => setIsFlipped(!isFlipped)}>
        <CardInner isFlipped={isFlipped}>
          {children}
        </CardInner>
      </Card>
    );
};

 function Instructores() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <Grid>
            <FlippableCard>
                <CardFront>
                <div className="space-y-2">
                    <Image
                        alt="MARTHA"
                        className="w-full h-auto"
                        height="500"
                        src="/pilates.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>MARTHA</Title>
                    <Text>Pilates, Yoga</Text>
                </div>
                </CardFront>
                    <CardBack>
                    <BackText>MARTHA: 
                        <br />
                        es una instructora de pilates y yoga 
                        con más de 10 años de experiencia. 
                        <br/>
                         Su enfoque es ayudar a sus 
                        estudiantes a mejorar su fuerza, flexibilidad y equilibrio. 
                        <br/>
                        <br/>
                        RESERVA TU CLASE HOY CON MARTHA
                        <br/>
                        <br/>
                        Horarios:
                        <br/>
                         lunes a viernes 
                         <br/>
                        8am-6pm ,sala 1
                        </BackText>
                    </CardBack>
                    </FlippableCard>
   
            <FlippableCard>
                <CardFront>
                <div className="space-y-2">
                    <Image
                        alt="JAVIER"
                        className="w-full h-auto"
                        height="500"
                        src="/boxeo.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>JAVIER</Title>
                    <Text> Boxeo </Text>
                </div>
                </CardFront>
                    <CardBack>
                    <BackText>JAVIER: 
                        <br />
                        es un instructor de boxeo con más de 15 años de experiencia. 
                        <br/>
                        Su enfoque es ayudar a sus 
                        estudiantes a mejorar su técnica, fuerza y resistencia. 
                        <br/>
                        <br/>
                        RESERVA TU CLASE HOY CON JAVIER
                        <br/>
                        <br/>
                        Horarios:
                        <br/>
                         lunes a viernes 
                         <br/>
                        6am-8pm ,sala 2
                        </BackText>
                    </CardBack>
                    </FlippableCard>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="ANDREA"
                        className="w-full h-auto"
                        height="500"
                        src="/cardio.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>ANDREA</Title>
                    <Text>Cardio </Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="NATALIA"
                        className="w-full h-auto"
                        height="500"
                        src="/Fuerza.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>NATALIA</Title>
                    <Text>Fuerza</Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="LAURA"
                        className="w-full h-auto"
                        height="500"
                        src="/yoga.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>LAURA</Title>
                    <Text>Yoga, Pilates</Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="DIEGO"
                        className="w-full h-auto"
                        height="500"
                        src="/boxeo2.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>DIEGO</Title>
                    <Text>Boxeo, Fuerza</Text>
                </div>
            </Card>
        </Grid>
    );
}

export default Instructores;
