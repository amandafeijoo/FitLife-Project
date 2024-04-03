import React, { useState,useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ContentContainer = styled.div`
  padding-top: 80px; // Ajusta este valor según la altura de tu barra de navegación
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => props.$scrolled ? 'transparent' : 'rgba(72, 72, 71, 0.691)'};
  position: fixed;
  z-index: 100;
  gap: 15px;
  align-items: center;
  font-family: monospace;
  font-size: 1.5em; 
  color: #b2b1b1; 
  backdrop-filter: blur(10px);
  transition: background-color 0.5s;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${props => props.$scrolled ? '0 0 10px 0 rgba(0,0,0,0.15)' : 'none'};
  `;
  

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none; 

  &:hover {
    color:  rgba(46, 132, 237, 0.691); // Cambia el color al pasar el mouse
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
  `;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: visible;
`;

const Dropdown = styled.div`
position: absolute;
display: flex;
flex-direction: column;
gap: 5px;
background-color: rgba(245, 135, 135, 0.691);
border-radius: 5px;
padding: 10px;
top: 100%;
left: 50%; // Centra el menú desplegable horizontalmente
transform: translateX(-45%); // Ajusta la posición para que el centro del menú desplegable esté alineado con el centro del enlace "Acerca"
z-index: 1;
&:hover {
  display: block;
}
div {
  color: #b2b1b1;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    color: rgba(68, 135, 212, 0.691);
  }
}
`;

function Header() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

    return (
  <StyledHeader $scrolled={scrolled}>
        <h1>FitLife Gym</h1>
        <StyledNav>
        <StyledLink to="/Inicio">Inicio</StyledLink>
    <DropdownContainer 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledLink to="/Acerca">Acerca</StyledLink>
      {isHovered && (
        <Dropdown>
          <div onClick={() => navigate('/Acerca/Instructores')}>Instructores</div>
          <div onClick={() => navigate('/Acerca/Clases')}>Clases</div>
        </Dropdown>
      )}
    </DropdownContainer>
    <StyledLink to="/Precios">Precios</StyledLink>
    <StyledLink to="/InciarSesion">Inciar Sesión</StyledLink>
    <StyledLink to="/Contacto">Contacto</StyledLink>
  </StyledNav>
      </StyledHeader>
    );

}

export default Header;