import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';
import {  momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavigationLinks from '../NavigationLinks';
import CalendarioPilates from './CalendarioDeClases/CalendarioPilates';

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
  background-image: url('/pilates2.jpg');
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
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #171616;
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

moment.locale('es');
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


function ReservarClasePilates () {
  const classes = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];
  const currentClassIndex = classes.indexOf('Yoga');
  const [showCalendar, setShowCalendar] = useState(false); 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { register, handleSubmit, setValue, getValues } = useForm();


  const navigate = useNavigate();

  const handleReservarClick = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el registro
    console.log(`Registrando con usuario: ${username}, email: ${email} y contraseña: ${password}`);
    navigate('/PaginaUsuario');
  };

  const onClassClick = (day, time, classType, instructor) => {
    setSelectedDate({ day, time, classType, instructor }); // establece la clase seleccionada
    setModalIsOpen(false); 
  };
  

  const handleSelectEvent = event => {
    console.log('Before setModalIsOpen: ', modalIsOpen);
    setModalIsOpen(true);
    console.log('After setModalIsOpen: ', modalIsOpen);
  
    console.log('Before setValue: ', getValues('date'));
    setValue('date', event.start);
    console.log('After setValue: ', getValues('date'));
  };


  const handleOpenModal = () => {
    setModalIsOpen(true);
    setShowCalendar(true);
  };

   
  return (
    <>
    <NavigationLinks classes={classes} currentClassIndex={currentClassIndex} />
    <BackgroundContainer> 
      <FormContainer>
      {!showCalendar && <StyledH1>RESERVA TU CLASE DE PILATES </StyledH1>}  
    <Form onSubmit={handleSubmit}>
  <StyledLabel>
    Usuario:
    <StyledInput {...register('usuario')} required />
  </StyledLabel>
  <StyledLabel>
    Contraseña:
    <StyledInput {...register('password')} type="password" required />
  </StyledLabel>
  <StyledLabel>
    Instructor:
    <StyledSelect {...register('clase')} required>
            <option value="">Selecciona un instructor</option>
            <option value="Marta">Marta</option>
            <option value="Laura">Laura</option>
            <option value="Cualquiera">Cualquiera</option>
    </StyledSelect>
  </StyledLabel>
        <StyledLabel>
        Fecha y hora:
        <br />
        <br />
            <Button type="button" onClick={handleOpenModal}>
            Seleccionar
            </Button>
          <br />
          <br />
          <StyledInput type="text" value={selectedDate ? `${selectedDate.day} / ${selectedDate.time}/ ${selectedDate.classType}/ ${selectedDate.instructor}` : ''} readOnly />            
            <Modal
    isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  style={{
    content: {
      padding: '0', // Elimina el padding
      margin: 'auto', // Centra el modal
      display: 'flex', // Asegura que el contenido se estira para llenar el espacio disponible
      flexDirection: 'column', // Asegura que el contenido se estira en la dirección correcta
      height: '70vh', // Ajusta la altura del modal al 60% de la altura de la ventana
      width: '70vw', // Ajusta la anchura del modal al 60% de la anchura de la ventana
      overflow: 'auto', // Añade barras de desplazamiento si el contenido es demasiado grande
      position: 'absolute', // Permite centrar el modal
      top: '90%', // Centra el modal verticalmente
      left: '50%', // Centra el modal horizontalmente
      transform: 'translate(-50%, -50%)', // Asegura que el modal está centrado
    },
  }}
>
  {showCalendar && (
   <CalendarioPilates
   localizer={localizer}
   events={events}
   startAccessor="start"
   endAccessor="end"
   style={{ height: 200 }}
   views={['week', 'day']}
   defaultView='week'
   messages={messages}
   onClassClick={onClassClick}
 />
  )}
</Modal>
            </StyledLabel>
            <Button type="submit" onClick={handleReservarClick}>Reservar</Button>
             </Form>
            </FormContainer>
            </BackgroundContainer>
            </>
      
  );

}

export default ReservarClasePilates; 
