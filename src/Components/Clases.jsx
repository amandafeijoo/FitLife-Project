import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #353333;
  text-decoration: none;
  font-size: 8em;
  font-weight: bold;
  font-family: monospace;
  position: relative;

  &:hover {
    color: #b36d84;
  }

  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  text-align: center;
`;

const ImageContainer = styled.div`
  visibility: hidden;
  width: 300px;
  height: 300px;
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
    const [image, setImage] = useState(null);

    const clases = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];

    return (
        <section>
        <ul>
            {clases.map(clase => (
            <StyledLi key={clase}>
                <StyledLink 
                    to={`/${clase.toLowerCase()}`} 
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
    );
}

export default Clases;