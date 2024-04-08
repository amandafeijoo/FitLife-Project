import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavigationLinks from '../NavigationLinks';

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
  background-image: url('/fuerza1.jpg');
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
  color: #222222;
  font-size: 14px;
  font-weight: 200;
`;



const Button = styled.button`
  position: relative;
  background: #ec5990;
  color: #111111;
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

const messages = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  showMore: total => `+ Ver más (${total})`,
  noEventsInRange: 'No hay eventos en este rango',
  showMore: total => `+ ${total} más`,
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
};

Modal.setAppElement('#root');

function ReservarClaseFuerza () {
  const classes = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];
  const currentClassIndex = classes.indexOf('Fuerza');

  const { register, handleSubmit, setValue } = useForm();
  const [showCalendar, setShowCalendar] = useState(false); 

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleReservarClick = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el registro
    console.log(`Registrando con usuario: ${username}, email: ${email} y contraseña: ${password}`);
    navigate('/PaginaUsuario');
  };


  const handleSelectEvent = event => {
    setSelectedDate(event.start);
    setModalIsOpen(false);
    setShowCalendar(true);
    setValue('date', event.start);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
    setShowCalendar(true);
  };
  


  // const onSubmit = data => {
  //   console.log(data);
  //   // Aquí puedes manejar la presentación del formulario, por ejemplo, enviando los datos a Firebase
  // };

  

  const events = [];

for (let week = 0; week < 52; week++) {
  events.push(
   
    {
      start: new Date(moment().weekday(2).add(week, 'weeks').year(), moment().weekday(2).add(week, 'weeks').month(), moment().weekday(2).add(week, 'weeks').date(), 8, 30), 
      end: new Date(moment().weekday(2).add(week, 'weeks').year(), moment().weekday(2).add(week, 'weeks').month(), moment().weekday(2).add(week, 'weeks').date(), 9, 30), 
      title: 'Total',
    },

    {
      start: new Date(moment().weekday(4).add(week, 'weeks').year(), moment().weekday(4).add(week, 'weeks').month(), moment().weekday(4).add(week, 'weeks').date(), 8, 30), 
      end: new Date(moment().weekday(4).add(week, 'weeks').year(), moment().weekday(4).add(week, 'weeks').month(), moment().weekday(4).add(week, 'weeks').date(), 9, 30), 
      title: 'Resistencia',
    },
    {
      start: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 7, 0), 
      end: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 8, 0), 
      title: 'Total del Cuerpo',
    },

    {
        start: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 12, 0),
        end: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 13, 0), 
        title: 'Acondicionamiento',
      },

    {
      start: new Date(moment().weekday(7).add(week, 'weeks').year(), moment().weekday(7).add(week, 'weeks').month(), moment().weekday(7).add(week, 'weeks').date(), 13, 0), 
      end: new Date(moment().weekday(7).add(week, 'weeks').year(), moment().weekday(7).add(week, 'weeks').month(), moment().weekday(7).add(week, 'weeks').date(), 14, 0), 
      title: 'Total del Cuerpo',
    },
  );
}
  
  return (
    <> 
    <NavigationLinks classes={classes} currentClassIndex={currentClassIndex} />
    <BackgroundContainer>
    <FormContainer>
      {!showCalendar && <StyledH1>RESERVA TU CLASE DE FUERZA</StyledH1>}  
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
            <option value="Natalia">Natalia</option>
            <option value="Diego">Diego</option>
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
            <StyledInput type="text" {...register('date')} readOnly />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                >
              {showCalendar && (
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  views={['week', 'day']}
                  defaultView='week'
                  messages={messages}
                  onSelectEvent={handleSelectEvent}
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

export default ReservarClaseFuerza; 
