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

const HorarioBoxeo = { 
    Lunes: [
        { time: '12:00', endTime: '13:00', instructor: 'Diego', class: 'Intermedio' }
      ],
        Martes: [
        { time: '18:00', endTime: '19:00', instructor: 'Javier', class: 'Principiantes' }
        ],
        Miércoles: [
        { time: '17:30', endTime: '18:30', instructor: 'Diego', class: 'Alta Intensidad' }
        
        ],
        Jueves: [
        { time: '18:00', endTime: '19:00', instructor: 'Diego', class: 'Avanzado' }
        
        ],
        Viernes: [
        { time: '17:30', endTime: '18:30', instructor: 'Javier', class: 'Todos los Niveles' }
        ],
        Sábado: [
        { time: '12:00', endTime: '13:00', instructor: 'Diego', class: 'Entrenamiento en Circuito' }
        ],
       
    };

const ClassCell = styled.td`
  background-color: ${props => props.color};
    cursor: pointer;
    transition: 0.3s all;
    
`;



function CalendarioBoxeo ({ onClassClick }) {
    const colors = {
        'Intermedio': 'lightpink',
        'Principiantes': 'lightblue',
        'Alta Intensidad': 'lightgreen',
        'Avanzado': 'lightyellow',
        'Todos los Niveles': 'lightpink',
        'Entrenamiento en Circuito': 'lightblue',
    
   
  };


const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = ['10:00','12:00','17:00','17:30','18:00', '19:00'];

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
  const classesForThisDay = HorarioBoxeo[day];
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

export default CalendarioBoxeo;