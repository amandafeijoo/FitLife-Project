import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


// import { ReservacionesContext } from '../Components/ReservacionesContext';


const TopContainer = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
`;

const TextContainerBelow = styled.div`
    color: black;
    text-align: center;
    padding: 20px;
    font-size: 1.2em;
    background: rgba(101, 101, 170, 0.4);
    position: absolute;
    z-index: 2;

`;
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 5em;    
  color: #1e1e1f;
   margin: 20px;
   &:hover {
    color: #2951d5;
    }
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
    
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(31, 30, 30, 0.5); //  el último valor para cambiar la opacidad
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const images = ["perfil1.jpg", "perfil2.jpg"];


const ContenedorImagen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 70%;
  width: 200px;  
  height: 200px; 
  background-color: #ccc; /* Color de fondo para cuando no hay imagen */
  overflow: hidden;
  position: relative;
`;

const ContenedorPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagenPerfil = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Esto asegura que la imagen cubra todo el espacio disponible sin distorsionarse */
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s;
    &:hover {
    transform: scale(1.1);
    }

`;

const TextoPerfil = styled.span`
  position: absolute;
  color: #0e71a7;
  font-size: 1em;
`;
const InputFile = styled.input`
  display: none;
`;

const LabelFile = styled.label`
  padding: 10px 20px;
  background-color: #363738;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #235d98;
    color: white;
   margin: 10px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const StyledTableContainer = styled.div`
   max-height: 60vh;  // Ajusta este valor según tus necesidades
  overflow-y: auto;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 2px;
`;

const StyledHeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 2px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #235d98;
  color: white;

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


// Funciones para manejar la adición y cancelación de clases
const handleAddClass = (className) => {
  switch (className) {
    case 'Yoga':
      setYoga(true);
      break;
    case 'Boxeo':
      setBoxeo(true);
      break;
    case 'Cardio':
      setCardio(true);
      break;
    case 'Fuerza':
      setFuerza(true);
      break;
    case 'Pilates':
      setPilates(true);
      break;
    default:
      break;
  }
};

const handleCancelClass = (className) => {
  switch (className) {
    case 'Yoga':
      setYoga(false);
      break;
    case 'Boxeo':
      setBoxeo(false);
      break;
    case 'Cardio':
      setCardio(false);
      break;
    case 'Fuerza':
      setFuerza(false);
      break;
    case 'Pilates':
      setPilates(false);
      break;
    default:
      break;
  }
};

  function PaginaUsuario() {
      const location = useLocation();
      const navigate = useNavigate();
      let formData = location.state ? location.state.formData : {};
      const username = location.state?.username || 'Usuario';
      const initialMembresia = location.state?.membresia || 'Membresía Usuario';
      const [membresia, setMembresia] = useState(initialMembresia);
      const [clases, setClases] = useState([]);
      const [usuario, setUsuario] = useState(null);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [imagenPerfil, setImagenPerfil] = useState(null);
      const [yoga, setYoga] = useState(false);
      const [boxeo, setBoxeo] = useState(false);
      const [cardio, setCardio] = useState(false);
      const [fuerza, setFuerza] = useState(false);
      const [pilates, setPilates] = useState(false);
      
      
      useEffect(() => {
        setUsuario({ nombre: username, email: `${username}@example.com` });
        setMembresia(membresia);
        setClases([]);
        console.log('useEffect ha terminado');
      }, []);

      const handleAddClass = (clase) => {
        setClases([...clases, clase]);
      };
      
      const handleCancelClass = (clase) => {
        setClases(clases.filter(c => c !== clase));
      };
      
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 12000); // Cambia la imagen cada 12 segundos
        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
      }, [currentImageIndex]);
      
      if (!usuario) {
        return <p>Cargando...</p>;
      }
      
      const handleImageChange = (event) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagenPerfil(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
  
      }
  
const cerrarSesion = () => {
  // Aquí va el código para cerrar la sesión del usuario.
  // Por ejemplo, borrar el token de autenticación del almacenamiento local:
  localStorage.removeItem('token');

  // Luego, redirige al usuario a la página de inicio de sesión:
  navigate('/IniciarSesion');
  
};

  return (
    <> 
      <div>
        <TopContainer>
          <img src={images[currentImageIndex]} alt="Imagen del gimnasio" />       
          <Overlay />
          <TextContainerBelow>
          <ContenedorPerfil>
            <ContenedorImagen>
                {imagenPerfil ? <ImagenPerfil src={imagenPerfil} alt="Imagen de perfil" /> : <TextoPerfil>Foto de perfil</TextoPerfil>}
            </ContenedorImagen>
                    <InputFile id="file" type="file" onChange={handleImageChange} />
                 <LabelFile htmlFor="file">Seleccionar archivo</LabelFile>           
                        </ContenedorPerfil> 
                        <StyledH1> FITLIFE</StyledH1>
                        <h2>¡Hola, Bienvenido, {usuario.nombre}!</h2>
                        <p>¡Gracias por ser parte de nuestra comunidad FITLIFE!</p>
                        <p>Estos son tus datos:</p>
                        <p>Tu email es: {usuario.email}</p>
                        <p>Tu membresía: {membresia}</p>
                        <h2>Reserva tus clases</h2>
                              <StyledButton type="button" onClick={() => handleAddClass('Yoga')}>
                                Reservar Yoga
                              </StyledButton>
                              <StyledButton type="button" onClick={() => handleAddClass('Boxeo')}>
                                Reservar Boxeo
                              </StyledButton>
                              <StyledButton type="button" onClick={() => handleAddClass('Cardio')}>
                                Reservar Cardio
                              </StyledButton>
                              <StyledButton type="button" onClick={() => handleAddClass('Fuerza')}>
                                Reservar Fuerza
                              </StyledButton>
                              <StyledButton type="button" onClick={() => handleAddClass('Pilates')}>
                                Reservar Pilates
                              </StyledButton> 
                        <StyledTableContainer>
                        <StyledTable>
                        <thead>
                          <tr>
                            <StyledHeaderCell>Clase Reservada</StyledHeaderCell>
                            <StyledHeaderCell>Cancelar Clase</StyledHeaderCell>
                          </tr>
                        </thead>
                        <tbody>
                      {clases.map((clase, index) => (
                    <StyledRow key={index}>
                      <StyledCell>{clase}</StyledCell>
                      <StyledCell>
                        <StyledButton type="button" onClick={() => handleCancelClass(clase)}>
                          Cancelar
                        </StyledButton>
                      </StyledCell>
                    </StyledRow>
                  ))}
              </tbody>
            </StyledTable>
          </StyledTableContainer>
            <StyledButton onClick={cerrarSesion}>Cerrar Sesión</StyledButton>
            </TextContainerBelow>
      </TopContainer>
    </div>
    </>
  );
}

export default PaginaUsuario;