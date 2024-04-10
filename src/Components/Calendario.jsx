import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #949697;
  }
`;


const classSchedule ={ 
    Lunes: [
        { time: '7:00', endTime: '8:00', instructor: 'Laura', class: 'Yoga' },
        { time: '12:00', endTime: '13:00', instructor: 'Javier', class: 'Boxeo' },
        { time: '17:30', endTime: '18:30', instructor: 'Laura', class: 'Pilates' },
        { time: '19:00', endTime: '20:00', instructor: 'Javier', class: 'Boxeo' },
      ],
        Martes: [
        { time: '8:30', endTime: '9:30', instructor: 'Diego', class: 'Fuerza' },
        { time: '10:00', endTime: '11:00', instructor: 'Martha', class: 'Yoga' },
        { time: '18:00', endTime: '19:00', instructor: 'Diego', class: 'Boxeo' },
        { time: '19:30', endTime: '20:30', instructor: 'Martha', class: 'Pilates' },
        ],
        Miércoles: [
        { time: '7:00', endTime: '8:00', instructor: 'Martha', class: 'Yoga' },
        { time: '12:00', endTime: '13:00', instructor: 'Andrea', class: 'Cardio' },
        { time: '17:30', endTime: '18:30', instructor: 'Diego', class: 'Boxeo' },
        { time: '19:00', endTime: '20:00', instructor: 'Martha', class: 'Yoga' },
        ],
        Jueves: [
        { time: '8:30', endTime: '9:30', instructor: 'Natalia', class: 'Fuerza' },
        { time: '10:00', endTime: '11:00', instructor: 'Laura', class: 'Pilates' },
        { time: '18:00', endTime: '19:00', instructor: 'Javier', class: 'Boxeo' },
        { time: '19:30', endTime: '20:30', instructor: 'Javier', class: 'Yoga' },
        ],
        Viernes: [
        { time: '7:00', endTime: '8:00', instructor: 'Natalia', class: 'Fuerza' },
        { time: '12:00', endTime: '13:00', instructor: 'Martha', class: 'Yoga' },
        { time: '17:30', endTime: '18:30', instructor: 'Diego', class: 'Boxeo' },
        { time: '19:00', endTime: '20:00', instructor: 'Laura', class: 'Pilates' },
        ],
        Sábado: [
        { time: '9:00', endTime: '10:00', instructor: 'Andrea', class: 'Cardio' },
        { time: '12:00', endTime: '13:00', instructor: 'Laura', class: 'Yoga' },
        { time: '12:00', endTime: '13:00', instructor: 'Laura', class: 'Boxeo' },
        { time: '16:00', endTime: '17:00', instructor: 'Martha', class: 'Pilates' },
        ],
        Domingo: [
        { time: '10:00', endTime: '11:00', instructor: 'Martha', class: 'Yoga' },
        { time: '11:30', endTime: '12:30', instructor: 'Andrea', class: 'Cardio' },
        { time: '13:00', endTime: '14:00', instructor: 'Diego', class: 'Fuerza' },
        { time: '15:00', endTime: '16:00', instructor: 'Laura', class: 'Pilates' },
        ],

 };


const ClassCell = styled.td`
  background-color: ${props => props.color};
    cursor: pointer;
    transition: 0.3s all;
    
`;

function ClassSchedule({ onClassClick }) {
    const colors = {
    'Yoga': 'lightblue',
    'Boxeo': 'lightgreen',
    'Pilates': 'lightpink',
    'Fuerza': 'lightyellow',
    'Cardio': 'lightgray',
  };


  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = ['7:00','8:30', '10:00','12:00', '12:30', '15:00', '16:00','18:00', '19:00'];

return (
  <StyledTable>
    <thead>
      <tr>
        <th>Hora</th>
        {days.map(day => <th key={day}>{day}</th>)}
      </tr>
    </thead>
    <tbody>
    {times.map(time => (
      <tr key={time}>
        <td>{time}</td>
        {days.map(day => {
  const classesForThisDay = classSchedule[day];
  const classAtThisTime = classesForThisDay.find(schedule => schedule.time === time);
  return (
    <ClassCell 
        key={`${day}-${time}`} // Añade una propiedad `key` única aquí
        color={colors[classAtThisTime?.class]} 
        onClick={() => classAtThisTime && onClassClick(day, classAtThisTime.time, classAtThisTime.class, classAtThisTime.instructor)}
      >
        {classAtThisTime?.class && (
          <div>
            <strong>{classAtThisTime.class}</strong>
            <div>{`${classAtThisTime.time}-${classAtThisTime.endTime}`}</div>
            <div>{classAtThisTime.instructor}</div>
          </div>
        )}
    </ClassCell>
  );
})}
      </tr>
    ))}
    </tbody>
  </StyledTable>
);
}

export default ClassSchedule;