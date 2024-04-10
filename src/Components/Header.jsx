import React, { useState,useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import SocialMediaLogos from './SocialMediaLogos';


const StyledH1 = styled.h1`
  font-size: 3em;
  color: #6dade8;
  text-align: center;
  margin: 20px;
  &:hover {

    color: #b57075;
  }
`;
const ContentContainer = styled.div`
  padding-top: 80px; // Ajusta este valor según la altura de tu barra de navegación
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: fixed;
  z-index: 100;
  gap: 40px;
  align-items: center;
  font-size: 1.2em; 
  color: #000000; 
  backdrop-filter: blur(10px);
  background-color: ${props => props.$scrolled ? 'rgba(220,220,220,0.5)' : 'transparent'}; // Cambia el color de fondo cuando se desplaza
  transition: background-color 0.3s ease;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${props => props.$scrolled ? '0 0 10px 0 rgba(0,0,0,0.15)' : 'none'};

 
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `;
  

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none; 
  margin-right: 35px; // Ajusta este valor para cambiar el espacio entre los enlaces
  font-size: 1.2em; // Ajusta este valor para cambiar el tamaño del texto
  font-weight: 400;

  &:hover {
    color:  rgba(14, 112, 231, 0.691); // Cambia el color al pasar el mouse
  }
  
`;
const LeftNav = styled.div`
  display: flex;
  justify-content: flex-start;
  gap:10px; // Ajusta este valor para cambiar el espacio entre los enlaces
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  }

`;

const RightNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 70px; // Elimina el margen derecho

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
const CenterNav = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px; // Mueve el contenido al centro

  
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }

  @media (max-width: 320px) {
    display: none;
  }

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
background-color: rgba(108, 176, 240, 0.691);
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
  color: #1b1a1a;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    color: rgba(68, 135, 212, 0.691);
  }
}
`;

const Button = styled.button`
  justify-content: center;
  text-align: center;
  position: relative;
  background: #d65e8a;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 35%;
  height: 35%;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    background: #6eb2d7;
  }
  
  `;
 


function Header({ showCalendar}) {
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
          {!showCalendar && (
            <>
        <StyledH1 onClick={() => navigate('/Inicio')}>FITLIFE</StyledH1>
              {/* <StyledNav> */}
                <LeftNav>
                <StyledLink to="/Inicio">INICIO</StyledLink>
                <DropdownContainer 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <StyledLink to="/Acerca">ACERCA</StyledLink>
                  {isHovered && (
                    <Dropdown>
                      <div onClick={() => navigate('/Acerca/Instructores')}>Instructores</div>
                      <div onClick={() => navigate('/Acerca/Clases')}>Clases</div>
                    </Dropdown>
                  )}
                    </DropdownContainer>
                    <StyledLink to="/Precios">PRECIOS</StyledLink>
                    <StyledLink to="/Contacto">CONTACTO</StyledLink>
                    </LeftNav>

                          <CenterNav>
                          <SocialMediaLogos />
                          </CenterNav>

                          <RightNav>
                          <StyledLink to="/IniciarSesion">
                            <FaUser size={30}  />
                          </StyledLink>
                          <Button onClick={() => navigate("/Registrarse")}>
                              ÚNETE
                            </Button>
                          </RightNav>
            </>
          )}
        </StyledHeader>
      );
}

export default Header;