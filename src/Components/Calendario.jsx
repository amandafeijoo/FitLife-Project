// Calendario.jsx
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import styled from 'styled-components';
import Modal from 'react-modal';


const Calendario = ({ events = [], handleSelectEvent }) => {    const localizer = momentLocalizer(moment);    moment.locale('es');
    const messages = {
        next: 'Siguiente',
        previous: 'Anterior',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        allDay: 'Todo el día',
        showMore: total => `+ Ver más (${total})`
    };
    Modal.setAppElement('#root');

    const localEvents = [];

    for (let week = 0; week < 52; week++) {
        events.push(
            {
                start: new Date(moment().weekday(1).add(week, 'weeks').year(), moment().weekday(1).add(week, 'weeks').month(), moment().weekday(1).add(week, 'weeks').date(), 7, 0), // Lunes 7:00 AM
                end: new Date(moment().weekday(1).add(week, 'weeks').year(), moment().weekday(1).add(week, 'weeks').month(), moment().weekday(1).add(week, 'weeks').date(), 8, 0), // Lunes 8:00 AM
                title: 'Matutino',
            },
            {
                start: new Date(moment().weekday(1).add(week, 'weeks').year(), moment().weekday(1).add(week, 'weeks').month(), moment().weekday(1).add(week, 'weeks').date(), 19, 0), // Lunes 7:00 PM
                end: new Date(moment().weekday(1).add(week, 'weeks').year(), moment().weekday(1).add(week, 'weeks').month(), moment().weekday(1).add(week, 'weeks').date(), 20, 0), // Lunes 8:00 PM
                title: 'Suave y Meditación',
            },
            {
                start: new Date(moment().weekday(2).add(week, 'weeks').year(), moment().weekday(2).add(week, 'weeks').month(), moment().weekday(2).add(week, 'weeks').date(), 10, 0), // Martes 10:00 AM
                end: new Date(moment().weekday(2).add(week, 'weeks').year(), moment().weekday(2).add(week, 'weeks').month(), moment().weekday(2).add(week, 'weeks').date(), 11, 0), // Martes 11:00 AM
                title: 'Restaurativo',
            },

            {
                start: new Date(moment().weekday(3).add(week, 'weeks').year(), moment().weekday(3).add(week, 'weeks').month(), moment().weekday(3).add(week, 'weeks').date(), 7, 0),
                end: new Date(moment().weekday(3).add(week, 'weeks').year(), moment().weekday(3).add(week, 'weeks').month(), moment().weekday(3).add(week, 'weeks').date(), 8, 0), 
                title: 'Dinámico',
            },

            {
                start: new Date(moment().weekday(4).add(week, 'weeks').year(), moment().weekday(4).add(week, 'weeks').month(), moment().weekday(4).add(week, 'weeks').date(), 7, 30), 
                end: new Date(moment().weekday(4).add(week, 'weeks').year(), moment().weekday(4).add(week, 'weeks').month(), moment().weekday(4).add(week, 'weeks').date(), 8, 30), 
                title: 'Flexibilidad',
            },
            {
                start: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 12, 0), 
                end: new Date(moment().weekday(5).add(week, 'weeks').year(), moment().weekday(5).add(week, 'weeks').month(), moment().weekday(5).add(week, 'weeks').date(), 13, 0), 
                title: 'Vinyasa Yoga',
            },

            {
                start: new Date(moment().weekday(6).add(week, 'weeks').year(), moment().weekday(6).add(week, 'weeks').month(), moment().weekday(6).add(week, 'weeks').date(), 10, 30), 
                end: new Date(moment().weekday(6).add(week, 'weeks').year(), moment().weekday(6).add(week, 'weeks').month(), moment().weekday(6).add(week, 'weeks').date(), 11, 30), 
                title: 'Aire libre',
            },

            {
                start: new Date(moment().weekday(7).add(week, 'weeks').year(), moment().weekday(7).add(week, 'weeks').month(), moment().weekday(7).add(week, 'weeks').date(), 10, 0), 
                end: new Date(moment().weekday(7).add(week, 'weeks').year(), moment().weekday(7).add(week, 'weeks').month(), moment().weekday(7).add(week, 'weeks').date(), 11, 0), 
                title: 'Relajación y Estiramiento',
            },
        );
        const handleSelectEvent = event => {
            setSelectedDate(event.start);
            setModalIsOpen(false);
            setShowCalendar(true);
            // setValue('date', event.start);
          };
        
        
          const handleOpenModal = () => {
            setModalIsOpen(true);
            setShowCalendar(true);
          };
    }

    return (
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
    );
}

export default Calendario;