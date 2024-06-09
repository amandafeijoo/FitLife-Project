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
const HorarioFuerza = { 
    Martes: [
      { time: '8:30', endTime: '9:30', instructor: 'Diego', class: 'Total' }
    ],
    Jueves: [
      { time: '8:30', endTime: '9:30', instructor: 'Natalia', class: 'Resistencia' }
    ],
    Viernes: [
      { time: '7:00', endTime: '8:00', instructor: 'Natalia', class: 'Total del Cuerpo' },
      { time: '12:00', endTime: '13:00', instructor: 'Natalia', class: 'Acondicionamiento' }
    ],
    Domingo: [
      { time: '13:00', endTime: '14:00', instructor: 'Diego', class: 'Total del Cuerpo' }
    ],
  };


const ClassCell = styled.td`
  background-color: ${props => props.color};
    cursor: pointer;
    transition: 0.3s all;
    
`;

function CalendarioFuerza({ onClassClick }) {
    const colors = {
    'Total': 'lightpink',
    'Resistencia': 'lightblue',
    'Total del Cuerpo': 'lightgreen',
    'Acondicionamiento': 'lightyellow',
    
   
  };


const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = ['7:00','8:30', '10:00','12:00', '12:30','13:00','13:30'];

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
  const classesForThisDay = HorarioFuerza[day];
  const classAtThisTime = classesForThisDay ? classesForThisDay.find(schedule => schedule.time === time) : undefined;
  return (
    <ClassCell 
        key={`${day}-${time}`} 
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

export default CalendarioFuerza;