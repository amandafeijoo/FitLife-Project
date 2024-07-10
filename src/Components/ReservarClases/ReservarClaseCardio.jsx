import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavigationLinks from '../NavigationLinks';
import CalendarioCardio from './CalendarioDeClases/CalendarioCardio';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { KJUR } from 'jsrsasign';
import axios from 'axios';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2em; 
  color: #efeff6;
  margin: 10px;
  padding: 10px;
  position: relative;
  z-index: 1;
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-image: url('/cardio3.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;  
  overflow: auto;
`;
const StyledTextarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
  padding: 0 10px;
  height: 40px;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
  height: 40px;
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #222121;
  font-size: 14px;
  font-weight: 200;
`;



const Button = styled.button`
  position: relative;
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
const Alert = styled.div.withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop)
})`
  border: 2px solid;
  padding: 1rem 2rem;  // Reduce el padding vertical y aumenta el padding horizontal
  width: 100%;  // Ajusta esto según tus necesidades
  margin: 0 auto;  // Centra la alerta horizontalmente
  color: black;
  background-color: ${props => props.error ? '#FFC1C1' : '#D4EDDA'};  // Rosa claro para error, verde claro para éxito
  border-color: ${props => props.error ? '#f44336' : '#80e86d'};  // Rojo para error, verde para éxito
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #6ee8ad;
  background: rgba(105, 106, 108, 0.5); // Ajusta el último valor (0.5) para cambiar la transparencia
  border-radius: 10px;
  flex-basis: 50%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-width: 850px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 20px;
  color: #ecf0ed;

`;

const Form = styled.form`
   max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(229, 226, 226, 0.8); // Cambia el último valor para ajustar la transparencia

  


  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 900px;
  }
`;

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title"
  }
];
const messages = {
  next: "Siguiente",
  previous: "Anterior",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día"
};


Modal.setAppElement('#root');

function ReservarClaseCardio ({ classInfo, handleClassClick, setSelectedDate}) {
  const classes = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];
  const currentClassIndex = classes.indexOf('Yoga');
  const [showCalendar, setShowCalendar] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [instructorId, setInstructorId] = useState(null);
  const [subClaseId, setSubClaseId] = useState(null);
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [selectedClass, setSelectedClass] = useState([null]);
  const [alert, setAlert] = useState({ show: false, message: '', error: false });
  const [hasRedirected, setHasRedirected] = useState(false);

  
  const navigate = useNavigate();

  const token = localStorage.getItem('authToken');
  if (!token || typeof token !== 'string' || token.trim() === '') {
    navigate('/Inciar Sesion');
  } else {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  const handleSelectEvent = event => {
    console.log('Before setModalIsOpen: ', modalIsOpen);
    setModalIsOpen(true);
    console.log('After setModalIsOpen: ', modalIsOpen);
  
    console.log('Before setValue: ', getValues('date'));
    setValue('date', event.start);
    console.log('After setValue: ', getValues('date'));
  };

  const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('authToken');
  
    if (!token || typeof token !== 'string') {
      throw new Error('No valid token found');
    }
  
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
  
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      const body = await response.text();
      console.error(`Body: ${body}`);
      throw new Error(`Error: ${response.status}`);
    }
  
    return response.json();
  };
  
  const getUserId = async () => {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('authToken');
      if (!token || typeof token !== 'string') {
        navigate('/IniciarSesion');
        reject('No valid token found');
      } else {
        try {
          const decoded = KJUR.jws.JWS.parse(token);
          console.log('userId', decoded.payloadObj._id);
          resolve(decoded.payloadObj._id);
        } catch (error) {
          console.error('Error decoding token:', error);
          reject(error);
        }
      }
    });
  };
  
  // Use getUserId in your component
  useEffect(() => {
    getUserId().then(userId => {
      // Use userId here
    }).catch(error => {
      // Handle error here
    });
  }, []);



  const handleReservarClick = async () => {
const { day: fecha, time: hora, classId: claseId, subClassId: subClaseId, instructor, classType:classType } = selectedClass;    
    console.log('selectedClass:', selectedClass);
    console.log('Enviando solicitud de reserva...');
  
    // Obtén el userId
    let userId;
    try {
      userId = await getUserId();
    } catch (error) {
      console.error('Error getting user ID:', error);
      return;  // Sal de la función si no se puede obtener el userId
    }
  
    // Datos que se enviarán en la solicitud POST
    const postData = {
      user: userId,
      claseId,
      classType: classType,
      subClassId: subClaseId,  // Cambiado de 'subClaseId: subClaseId' a 'subClassId: subClaseId'
      instructorId: instructor.id,
      fecha,
      hora
    };
    console.log(postData); 
  
    console.log('Datos enviados:', postData);
  
    
    try {
      const response = await fetchWithAuth('http://localhost:3000/reservas/', {
        method: 'POST',
        body: JSON.stringify(postData),
      });
    
      console.log('Solicitud de reserva enviada, respuesta:', response);
    
      const reserva = response;
      console.log('Reserva creada con éxito:', reserva);
    
      // Muestra la alerta de éxito
      setAlert({ show: true, message: 'Reserva creada con éxito', error: false });
    
      // Accede a los datos de la subclase desde la prop selectedClass
      const subclaseReservada = selectedClass.subClase;
      console.log('Subclase reservada:', subclaseReservada);
    
      // Espera 2 segundos antes de navegar a la página de usuario
      setTimeout(() => {
        navigate('/PaginaUsuario');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    
      // Muestra la alerta de error
      setAlert({ show: true, message: 'Error al crear la reserva', error: true });
    }
  };
  
  const handleOpenModal = () => {
    console.log('Opening modal...');
    setModalIsOpen(true);
    setShowCalendar(true);
  };
  
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
 

  useEffect(() => {
    console.log('modalIsOpen:', modalIsOpen);
  }, [modalIsOpen]);

  
 
    
  return (
    <> 
    <NavigationLinks classes={classes} currentClassIndex={currentClassIndex} />
    <BackgroundContainer>
    <FormContainer> 
      {!modalIsOpen && <StyledH1>RESERVA TU CLASE DE CARDIO </StyledH1>}  
      {alert.show && <Alert error={alert.error}>{alert.message}</Alert>}  
          <Form onSubmit={handleReservarClick}>           
           <StyledLabel>
              Fecha y hora:
            </StyledLabel>
            <Button type="button" onClick={handleOpenModal}>
              Seleccionar
            </Button>
            <br />
            <StyledInput 
                  type="text" 
                  value={
                    selectedClass && selectedClass.day && selectedClass.time 
                      ? `${selectedClass.day} / ${selectedClass.time} / ${selectedClass.instructor ? selectedClass.instructor.name : 'No instructor'} / ${selectedClass.classType || 'No class type'} / ${selectedClass.subClase || 'No subclase'}`
                      : ''
                  }              
                  readOnly 
                />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              style={{
                content: {
                  padding: '0',
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '70vh',
                  width: '70vw',
                  overflow: 'auto',
                  position: 'absolute',
                  top: '90%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                },
              }}
            >
                {showCalendar && (
              <CalendarioCardio
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 200 }}
                views={['week', 'day']}
                defaultView='week'
                messages={messages}
                // onClassSelected={handleClassSelected}
                // setSelectedDate={setSelectedDate}
                handleCloseModal={handleCloseModal}
                handleClassClick={handleClassClick}
                setSelectedClass={setSelectedClass}

              />
            )}
           </Modal>
           <Button type="button" onClick={handleReservarClick}>Reservar</Button>
        </Form>
      </FormContainer>
    </BackgroundContainer>
  </>
);
}


export default ReservarClaseCardio; 
