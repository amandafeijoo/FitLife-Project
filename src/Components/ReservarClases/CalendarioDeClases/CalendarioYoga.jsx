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
        { time: '7:00', endTime: '8:00', instructor: 'Laura', class: 'Matutino' },
        { time: '19:00', endTime: '20:00', instructor: 'Martha', class: 'Suave y Meditación' }
      ],
        Martes: [
        { time: '10:00', endTime: '11:00', instructor: 'Martha', class: 'Restaurativo' }
        ],
        Miércoles: [
        { time: '7:00', endTime: '8:00', instructor: 'Martha', class: 'Dinámico' }
        
        ],
        Jueves: [
        { time: '19:30', endTime: '20:30', instructor: 'Laura', class: 'Flexibilidad' }
        
        ],
        Viernes: [
        { time: '12:00', endTime: '13:00', instructor: 'Laura', class: 'Hatha Yoga' }
        ],
        Sábado: [
        { time: '10:30', endTime: '11:30', instructor: 'Martha', class: 'Al Aire Libre' }
        ],
        Domingo: [
            
        { time: '10:00', endTime: '11:00', instructor: 'Laura', class: 'Relajación y Estiramiento' }
        ],

 };


const ClassCell = styled.td`
  background-color: ${props => props.color};
    cursor: pointer;
    transition: 0.3s all;
    
`;



function CalendarioPilates({ onClassClick }) {
    const colors = {
    'Matutino': 'lightpink',
    'Suave y Meditación': 'lightblue',
    'Restaurativo': 'lightgreen',
    'Dinámico': 'lightblue',
    'Flexibilidad': 'lightyellow',
    'Hatha Yoga': 'lightyellow',
    'Al Aire Libre': 'lightpink',
    'Relajación y Estiramiento': 'lightgreen',
   
  };


const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = ['7:00','8:30', '10:00','10:30','11:00','11:30','12:00', '16:00','18:00', '19:00', '19:30', '20:00', '20:30'];

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