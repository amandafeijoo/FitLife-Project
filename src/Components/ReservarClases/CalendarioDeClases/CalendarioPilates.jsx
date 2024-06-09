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


const HorarioPilates ={ 
     
    Lunes: [
        { time: '17:30', endTime: '18:30', instructor: 'Laura', class: 'Principiante' }
      ],
        Martes: [
        { time: '19:30', endTime: '20:30', instructor: 'Martha', class: 'Avanzado' }
        ],
        Miércoles: [
        { time: '19:00', endTime: '20:00', instructor: 'Martha', class: 'Intermedio' }
        
        ],
        Jueves: [
        { time: '10:00', endTime: '11:00', instructor: 'Laura', class: 'Mat' }
        
        ],
        Viernes: [
        { time: '19:00', endTime: '20:00', instructor: 'Laura', class: 'Intermedio' }
        ],
        Sábado: [
        { time: '16:00', endTime: '17:00', instructor: 'Martha', class: 'Para la Postura' }
        ],
        Domingo: [
            
        { time: '15:00', endTime: '16:00', instructor: 'Laura', class: 'Con Equipo' }
        ],

 };


const ClassCell = styled.td`
  background-color: ${props => props.color};
    cursor: pointer;
    transition: 0.3s all;
    
`;



function CalendarioPilates({ onClassClick }) {
    const colors = {
    'Con Equipo': 'lightpink',
    'Para la Postura': 'lightblue',
    'Intermedio': 'lightgreen',
    'Mat': 'lightpink',
    'Avanzado': 'lightyellow',
    'Principiante': 'lightblue',
   
  };


const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = ['7:00','8:30', '10:00','12:00', '12:30', '15:00', '16:00','17:00','17:30','18:00', '19:00', '19:30', '20:00'];

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
  const classesForThisDay = HorarioPilates[day];
  const classAtThisTime = classesForThisDay.find(schedule => schedule.time === time);
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

export default CalendarioPilates;