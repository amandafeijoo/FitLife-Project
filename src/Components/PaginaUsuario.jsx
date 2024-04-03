import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { ReservacionesContext } from '../Components/ReservacionesContext';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(56, 55, 54, 0.691);
  }
`;

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
    font-family: monospace;
    background: rgba(101, 101, 170, 0.4);
    position: absolute;
    z-index: 2;

`;
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 5em;    
  color: #1e1e1f;
   margin: 20px;
   font-family: 'monospace';
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
    background: rgba(31, 30, 30, 0.5); // Ajusta el último valor para cambiar la opacidad
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
  width: 200px;  /* Ajusta el tamaño según tus necesidades */
  height: 200px; /* Ajusta el tamaño según tus necesidades */
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


const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Celda = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Fila = styled.tr`
  &:nth-child(even) {background-color: #f2f2f2;}
`;

function PaginaUsuario() {
    // const { 
    //   reservacionesYoga, 
    //   reservacionesBoxeo, 
    //   reservacionesCardio, 
    //   reservacionesPilates 
    // } = React.useContext(ReservacionesContext);
  
    // // Ahora puedes usar las variables de reservaciones en cualquier lugar de tu componente
    // console.log(reservacionesYoga);
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 12000); // Cambia la imagen cada 12 segundos
    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex]);

  const [usuario, setUsuario] = useState(null);
  const [membresia, setMembresia] = useState(null);
  const [clases, setClases] = useState([]);


  const [reservaciones, setReservaciones] = useState([
    // Ejemplo de cómo podrían verse  reservaciones
    { id: 1, nombre: 'Clase 1', horario: '10:00 - 11:00' },
    { id: 2, nombre: 'Clase 2', horario: '11:00 - 12:00' },
    // Agrega más clases aquí
  ]);
  const cancelarClase = (id) => {
    // Filtra las reservaciones para quitar la clase con el id dado
    const nuevasReservaciones = reservaciones.filter((reservacion) => reservacion.id !== id);
    setReservaciones(nuevasReservaciones);
  };

  const [imagenPerfil, setImagenPerfil] = useState(usuario ? usuario.imagenPerfil : '');

  const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenPerfil(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

const navigate = useNavigate();

const cerrarSesion = () => {
  // Aquí va el código para cerrar la sesión del usuario.
  // Por ejemplo, puedes borrar el token de autenticación del almacenamiento local:
  localStorage.removeItem('token');

  // Luego, redirige al usuario a la página de inicio de sesión:
  navigate('/PaginaUsuario');
};


  useEffect(() => {
    // Aquí debes cargar los datos del usuario, la membresía y las clases
    // desde tu servidor o desde donde los estés almacenando.
    // Por ahora, solo estableceremos algunos datos de prueba.
    setUsuario({ nombre: 'Juan', email: 'juan@example.com' });
    setMembresia('Membresía Premium');
    setClases(['Yoga', 'Pilates', 'Spinning']);

    console.log('useEffect ha terminado');
  }, []);

  if (usuario === null || membresia === null || clases.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <> 
      <GlobalStyle />
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
            <h2>Clases reservadas</h2>
            <Tabla>
            <thead>
              <tr>
                <th>Clase</th>
                <th>Horario</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {reservaciones.map((reservacion) => (
                <Fila key={reservacion.id}>
                  <Celda>{reservacion.nombre}</Celda>
                  <Celda>{reservacion.horario}</Celda>
                  <Celda><StyledButton onClick={() => cancelarClase(reservacion.id)}>Cancelar clase</StyledButton></Celda>
                </Fila>
              ))}
            </tbody>
          </Tabla>
            {/* <StyledUl>
                {clases.map((clase, index) => <li key={index}>{clase}</li>)}
            </StyledUl> */}
            <StyledButton onClick={cerrarSesion}>Cerrar Sesión</StyledButton>

            </TextContainerBelow>
      </TopContainer>
    </div>
    </>
  );
}

export default PaginaUsuario;