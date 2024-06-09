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



const HorarioCardio ={ 
     
        Lunes: [
        { time: '19:00', endTime: '20:00', instructor: 'Andrea', class: 'Cardio Intenso' }
        ],
        Miércoles: [
        { time: '12:00', endTime: '13:00', instructor: 'Andrea', class: 'Cardio y Tonificación' }
        ],
        Domingo: [   
        { time: '11:30', endTime: '12:30', instructor: 'Andrea', class: 'Cardio Kickboxing' },
        { time: '9:00', endTime: '10:00', instructor: 'Andrea', class: 'Cardio Dance' }
        ],
    };


const ClassCell = styled.td`
  background-color: ${props => props.color};
    cursor: pointer;
    transition: 0.3s all;
    
`;

function CalendarioCardio({ onClassClick }) {
    const colors = {
        'Cardio Intenso': 'lightpink',
        'Cardio y Tonificación': 'lightblue',
        'Cardio Kickboxing': 'lightgreen',
        'Cardio Dance': 'lightyellow',
      };
 
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = [ '9:00','9:30','10:00', '11:30', '12:00', '12:30', '15:00', '16:00', '18:00', '19:00'];return (
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
  const classesForThisDay = HorarioCardio[day];
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
export default CalendarioCardio;