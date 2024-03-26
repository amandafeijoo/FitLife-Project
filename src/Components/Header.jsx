import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Arial', sans-serif; // Agrega tu fuente aquí
  font-size: 1.1em; // Agrega tu tamaño de fuente aquí
  color: #333; // Agrega tu color aquí
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none; // Esto elimina la línea debajo de los enlaces

  &:hover {
    color: orange; // Cambia el color al pasar el mouse
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>FitLife</h1>
      <StyledNav>
        <StyledLink to="/Inicio">Inicio</StyledLink>
        <StyledLink to="/AcercaDe">Acerca de</StyledLink>
        <StyledLink to="/Horarios">Horarios</StyledLink>
        <StyledLink to="/Precios">Precios</StyledLink>
        <StyledLink to="/Registro">Registro</StyledLink>
        <StyledLink to="/Contacto">Contacto</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;