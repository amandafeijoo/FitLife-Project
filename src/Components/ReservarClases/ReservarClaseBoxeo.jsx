import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';


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


const StyledH1 = styled.h1`
  text-align: center;
  font-size: 5em; 
  font-family: monospace;
  color: #525252;
  margin: 10px;
  padding: 10px;
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f5f5;
  border-radius: 10px;
  width: 1000px;
  height: 600px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 90%;
  height: 80%;
  padding: 20px;
  background-color: #fbf0d9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: monospace;
  font-size: 1.2em;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
  font-size: 16px;
  color: #333;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  text-align: right;
  color: #333;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background-color: #f8a1a1;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f77;
  }
`;

const StyledSelectButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  background-color: #f8a1a1;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f77;
  }
`;

const StyledImage = styled.img`
  display: flex;
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;

  /* Mueve la tarjeta hacia arriba cuando pasas el mouse por encima */
  &:hover {
    transform: translateY(-10px);
  }
`;

const StyledBigCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a19797;
  border-radius: 10px;
  width: 1200px; // Ajusta esto a la anchura que desees
  height: 800px; // Ajusta esto a la altura que desees
  position: relative;
`;

function ReservarClaseBoxeo () {
  const { register, handleSubmit, setValue } = useForm();
  const [showCalendar, setShowCalendar] = useState(false); 

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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
  


  const onSubmit = data => {
    console.log(data);
    // Aquí puedes manejar la presentación del formulario, por ejemplo, enviando los datos a Firebase
  };

  

  const events = [];

for (let week = 0; week < 52; week++) {
  events.push(
    {
        start: new Date(moment().weekday(1).add(week, 'weeks').year(), moment().weekday(1).add(week, 'weeks').month(), moment().weekday(1).add(week, 'weeks').date(), 12, 0), 
        end: new Date(moment().weekday(1).add(week, 'weeks').year(), moment().weekday(1).add(week, 'weeks').month(), moment().weekday(1).add(week, 'weeks').date(), 13, 0), 
        title: 'Intermedio',
      },

      {
        start: new Date(moment().weekday(2).add(week, 'weeks').year(), moment().weekday(2).add(week, 'weeks').month(), moment().weekday(2).add(week, 'weeks').date(), 18, 0), 
        end: new Date(moment().weekday(2).add(week, 'weeks').year(), moment().weekday(2).add(week, 'weeks').month(), moment().weekday(2).add(week, 'weeks').date(), 19, 30), 
        title: 'Principiantes',
      },
  
      {
        start: new Date(moment().weekday(3).add(week, 'weeks').year(), moment().weekday(3).add(week, 'weeks').month(), moment().weekday(3).add(week, 'weeks').date(), 17,30),
        end: new Date(moment().weekday(3).add(week, 'weeks').year(), moment().weekday(3).add(week, 'weeks').month(), moment().weekday(3).add(week, 'weeks').date(), 18, 30), 
        title: 'Alta Intensidad',
      },
  
      {
        start: new Date(moment().weekday(4).add(week, 'weeks').year(), moment().weekday(4).add(week, 'weeks').month(), moment().weekday(4).add(week, 'weeks').date(), 18, 0), 
        end: new Date(moment().weekday(4).add(week, 'weeks').year(), moment().weekday(4).add(week, 'weeks').month(), moment().weekday(4).add(week, 'weeks').date(), 19, 0), 
        title: 'Avanzado',
      },
      {
        start: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 17, 30), 
        end: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 18, 30), 
        title: 'Para Todos los Niveles',
      },
  
      {
        start: new Date(moment().weekday(6).add(week, 'weeks').year(), moment().weekday(6).add(week, 'weeks').month(), moment().weekday(6).add(week, 'weeks').date(), 12, 0), 
        end: new Date(moment().weekday(6).add(week, 'weeks').year(), moment().weekday(6).add(week, 'weeks').month(), moment().weekday(6).add(week, 'weeks').date(), 13, 0), 
        title: 'Entrenamiento en Circuito',
      },
    );
  }

  
  return (
    <> 
    <StyledH1>RESERVA TU CLASE</StyledH1>
    <StyledContainer>
    <StyledBigCard>
      <StyledCard>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
  <label>
    Usuario:
    <StyledInput {...register('usuario')} required />
  </label>
  <label>
    Contraseña:
    <StyledInput {...register('password')} type="password" required />
  </label>
  <label>
    Instructor:
    <StyledSelect {...register('clase')} required>
            <option value="">Selecciona un instructor</option>
            <option value="Javier">Javier</option>
            <option value="Diego">Diego</option>
            <option value="Cualquiera">Cualquiera</option>
    </StyledSelect>
  </label>
        <label>
        Fecha y hora:
        <br />
        <br />
            <StyledSelectButton type="button" onClick={handleOpenModal}>
            Seleccionar
            </StyledSelectButton>
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
          </label>
          <StyledButton type="submit">Reservar</StyledButton>
        </StyledForm>
      <StyledImage src="/boxeo.jpg" alt="Clase de Fuerza" />
    </StyledCard>
   </StyledBigCard>
  </StyledContainer>
      </>
  );

}

export default ReservarClaseBoxeo; 