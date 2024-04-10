import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ProfileImage from './ProfileImage';
import Calendario from './Calendario';
import Reservas from './Reservas';

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
  text-align: center;
  padding: 5px;
`;

const MainContainer = styled.div`
  padding-top: 100px;
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #d1c875, #cca940, #d699a2, #80CBC4); // Crea un degradado de amarillo claro a naranja claro a rosa claro a verde claro */
    background-size: cover;
    background-position: center;
    background-attachment: scroll; 
    min-height: 100vh; // esto ayuda a que el background se vea en toda la pantalla
    padding: 5px;
    padding-bottom: 50px;
    overflow: auto;

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


function PaginaUsuario() {
    const location = useLocation();
    const navigate = useNavigate();
    let formData = location.state ? location.state.formData : {};
    const username = location.state?.username || 'Usuario';
    const initialMembresia = location.state?.membresia || 'Membresía Usuario';
    const [membresia, setMembresia] = useState(initialMembresia);
    const [usuario, setUsuario] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [reservedClasses, setReservedClasses] = useState([
      { day: 'Lunes', class: 'Yoga', time: '10:00 ', instructor: 'Laura' },
      { day: 'Martes', class: 'Pilates', time: '14:00 ', instructor: 'Martha' }
  ]);
  const [instructors, setInstructors] = useState({});

  const handleCancelClick = (index) => {
      setReservedClasses(reservedClasses.filter((_, i) => i !== index));
  };

  function onClassClick(day, time, className, instructor) {
    setReservedClasses(prevClasses => [
      ...prevClasses,
      { day, class: className, time, instructor }
    ]);
  }
    useEffect(() => {
      setUsuario({ nombre: username, email: `${username}@example.com` });
      setMembresia(membresia);
  }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/IniciarSesion');
    };

    if (!usuario) {
        return <p>Cargando...</p>;
    }

    return (
        <PageContainer>
        <MainContainer>
           <div>
                <ProfileImage image={profileImage} />
          </div>
            <StyledH1 $image="/perfil.jpg">¡Hola, Bienvenido, {usuario.nombre}!</StyledH1>            <StyledP>¡Gracias por ser parte de nuestra comunidad FITLIFE!
                <br/>
                  <br/>
                  Estos son tus datos:
                <br/>
                  Tu email es: {usuario.email}
                  <br/>
                  Tu membresía: {membresia}</StyledP>
                <StyledP>Reserva tus clases</StyledP>
            <TableContainer>
            <Calendario onClassClick={onClassClick} setInstructors={setInstructors} />   
            <Reservas reservedClasses={reservedClasses} handleCancelClick={handleCancelClick} />
        <Button1 onClick={cerrarSesion}>Cerrar Sesión</Button1>
      </TableContainer>
    </MainContainer>
    </PageContainer>
  );
    
}

export default PaginaUsuario;