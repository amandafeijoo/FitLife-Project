import { Content } from "antd/es/layout/layout";
import styled, { keyframes } from 'styled-components';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const PageContainer = styled.div`
  animation: 1s ${fadeIn} ease-in;
`;

const StyledLink = styled(Link)`
  position: relative;
   background: rgba(94, 94, 94, 0.5); // Ajusta el último valor (0.5) para cambiar la transparencia
  color: #cecaca;
  text-transform: uppercase;
  text-decoration: none;
  border: solid 1px #24afeb;
  font-weight: 600;
  padding: 20px;
  font-size: 90px;
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 90%;
  margin: auto;
  font-weight: 400;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;


  &:hover {
    color: #56ebaf;
  }

  &:hover div {
    visibility: visible;
    opacity: 1;
  }

`;

const StyledLi = styled.li`
  list-style: none;
  text-align: center;
  margin: 15px;

  &:first-child {
    margin-top: 110px; // Ajusta valor de el primer enlace
  }
`;


const ImageContainer = styled.div`
  visibility: hidden;
  width: 200px;// Ajusta el tamaño de la imagen
  height: 200px;// Ajusta el tamaño de la imagen
  border-radius: 50%;
  position: absolute;
  top: -220px;
  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

function Clases() {
  const [image, setImage] = useState();
  const clases = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];
    return (
        <PageContainer>
        <section>
            <ul>
                {clases.map((clase, index) => (
                    <StyledLi key={clase}>
                        <StyledLink 
                            to={{
                                pathname: `/${clase.toLowerCase()}`,
                                state: { claseIndex: index }
                            }} 
                            onMouseOver={() => setImage(`/images/${clase.toLowerCase()}.jpg`)}
                            onMouseOut={() => setImage(null)}
                        >
                            {clase}
                            <ImageContainer style={{backgroundImage: `url(${image})`}} />
                        </StyledLink>
                    </StyledLi>
                ))}
            </ul>
        </section>
        </PageContainer>
    );
}

export default Clases;