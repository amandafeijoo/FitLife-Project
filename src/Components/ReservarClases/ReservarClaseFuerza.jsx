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
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(56, 55, 54, 0.691);
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4em; 
  font-family: monospace;
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
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent; 
  border-radius: 20px;  
  overflow: auto;
`;
 
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  background-color: rgba(242, 241, 241, 0.8); // Cambia el último valor para ajustar la transparencia
  width: 300px; // Ajusta esto a lo que necesites
  margin: 0 auto;
  font-family: monospace;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-family: monospace;
`;

const Button = styled.button`
  width: 300px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  font-family: monospace;

  &:hover {
    background-color: #9a7bee;
  }
`;

const StyledSelect = styled.select`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-family: monospace;
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
    setShowCalendar(false);
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
    <BackgroundContainer>
    <FormContainer>
      <FormWrapper> 
    <StyledH1>RESERVA TU CLASE </StyledH1>  
    <Form onSubmit={handleSubmit}>
  <label>
    Usuario:
    <Input {...register('usuario')} required />
  </label>
  <label>
    Contraseña:
    <Input {...register('password')} type="password" required />
  </label>
  <label>
    Instructor:
    <StyledSelect {...register('clase')} required>
            <option value="">Selecciona un instructor</option>
            <option value="Natalia">Natalia</option>
            <option value="Diego">Diego</option>
            <option value="Cualquiera">Cualquiera</option>
    </StyledSelect>
  </label>
        <label>
        Fecha y hora:
        <br />
        <br />
            <Button type="button" onClick={handleOpenModal}>
            Seleccionar
            </Button>
          <br />
          <br />
            <Input type="text" {...register('date')} readOnly />
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
            </label>
            <Button type="submit" onClick={handleReservarClick}>Reservar</Button>
             </Form>
              </FormWrapper>
            </FormContainer>
            </BackgroundContainer>
     
  );

}

export default ReservarClaseFuerza; 
