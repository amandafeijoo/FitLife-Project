import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ProfileImage from './ProfileImage';
import Calendario from './Calendario';
import Reservas from './Reservas';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone,faBars } from '@fortawesome/free-solid-svg-icons';




const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const PageContainer = styled.div`
  animation: 1s ${fadeIn} ease-in;
`;

const StyledH1 = styled.h1`
  font-size: 4em;
  color: #eceaea;
  text-align: center;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  border-radius: 10px;
  width: 100%;
  padding: 150px;
  margin: 50px;
`;

const StyledP = styled.p`
  font-size: 2em;
  color: #4c4b4b;
  text-align: left;
  padding: 5px;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid #80e86d;
  box-shadow: 5px 5px 5px #333;
  transition: transform 0.5s;
    &:hover {
        transform: scale(1.1);
    }

  
 
`;

const MainContainer = styled.div`
  padding-top: 100px;
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #cabf59, #cca940, #d699a2, #80CBC4); // Crea un degradado de amarillo claro a naranja claro a rosa claro a verde claro */
    background-size: cover;
    background-position: center;
    background-attachment: scroll; 
    min-height: 100vh; // esto ayuda a que el background se vea en toda la pantalla
    padding: 5px;
    padding-bottom: 50px;
    overflow: auto;

`;


const StyledButton = styled.button`
  position: relative;
  background: #dd7f7f;
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
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;
  `;
  
const TableContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Button1 = styled.button`
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
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
    cursor: pointer;
`;

const MenuLink = styled.a`
  font-size: 1.2rem;  // Aumenta este valor para hacer las letras más grandes
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #6dade8;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #FFC1C1;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;  // Asegura que los elementos estén en columnas
  justify-content: center;
  background: gray; 
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 40px;  // Aumenta este valor para mover el menú más abajo
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 9;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const MenuBackground = styled.div`
  display: flex;
  flex-direction: column;  
  background: #505050;  
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 9;
  border-radius: 10px;
  border: 2px solid #80e86d;
`;
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;  // Agrega relleno a la izquierda
`;

const StyledBurger = styled.button`
  position: fixed;
  top: 25%;
  right: 2rem;
  background: transparent;
  color: #808080;
  border: none;
  cursor: pointer;
  padding: 40px;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;


function PaginaUsuario() {
  const navigate = useNavigate();
  const location = useLocation();
  const { correo, suscripcion } = location.state || {};
  const [reservedClasses, setReservedClasses] = useState([]);
  const [user, setUser] = useState(null);
  const [suscripcionState, setSuscripcion] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Obtener los datos del usuario
      fetch('http://localhost:3000/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      })
      .then(response => response.json())
      .then(data => {
        setUser({
          nombre: data.nombre,
          apellidos: data.apellidos,
          correo: data.correo,
          suscripcion: data.suscripcion,
          telefono: data.telefono, 
        });
        setSuscripcion(data.suscripcion);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      // Obtener las reservas del usuario
      fetch('http://localhost:3000/reservas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      })
      .then(response => response.json())
      .then(data => {
        setReservedClasses(data.reservas);
      })
      .catch((error) => {
        console.error('Error:', error);
        setReservedClasses([]);
      });
    }
  }, []);

  const handleCancelClick = (idReserva) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Cancelar la reserva
      fetch(`http://localhost:3000/reservas/cancelar/${idReserva}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.reserva) {
          const updatedReserva = data.reserva;
          setReservedClasses(reservedClasses.map(reserva => reserva._id === idReserva ? updatedReserva : reserva));
        } else {
          console.error('Error al cancelar la reserva');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem('authToken');
    navigate('/IniciarSesion');
  };

  if (!user) {
    return <p>Cargando...</p>;
  }

return (
  <PageContainer>
    <StyledBurger onClick={handleClick}>
  <FontAwesomeIcon icon={faBars} size="3x" />
</StyledBurger>
    
    <Menu right isOpen={open} onClose={() => setOpen(false)}>
    <MenuBackground> 
      <DropdownMenu>
      <MenuLink id="home" className="menu-item" href="/Inicio">Inicio</MenuLink>
      <MenuLink id="about" className="menu-item" href="/Clases">Reservar</MenuLink>
      <MenuLink id="contact" className="menu-item" href="/Contacto">Contacto</MenuLink>
      <MenuLink onClick={ cerrarSesion } className="menu-item--small" href="">Cerrar Sesión</MenuLink>
     </DropdownMenu>
      </MenuBackground>
    </Menu>
    
    <MainContainer>
      <StyledH1 $image="/perfil.jpg">¡Hola, Bienvenido, {user.nombre} {user.apellidos}!</StyledH1>
      <StyledP>Información General:</StyledP>
      <StyledP>
      <FontAwesomeIcon icon={faEnvelope} /> Tu email es: {user.correo} </StyledP>
      <StyledP>
        <FontAwesomeIcon icon={faUser} /> Tu suscripción: {user.suscripcion}
      </StyledP>
      <StyledP>
        <FontAwesomeIcon icon={faPhone} /> Tu teléfono: {user.telefono}
      </StyledP>
      <TableContainer>
      <Reservas reservedClasses={reservedClasses} setReservedClasses={setReservedClasses} handleCancelClick={handleCancelClick} />        
      <Button1 onClick={cerrarSesion}>Cerrar Sesión</Button1>
      </TableContainer>
    </MainContainer>
  </PageContainer>
);
}

export default PaginaUsuario;