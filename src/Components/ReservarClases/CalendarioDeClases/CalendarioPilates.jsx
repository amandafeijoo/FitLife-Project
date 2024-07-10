import React from 'react';
import styled from 'styled-components'
import ReservarClasePilates from '../ReservarClasePilates';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRef } from 'react';




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

const ClassCell = ({ color, onClick, children }) => (
  <td 
    style={{ backgroundColor: color, cursor: 'pointer' }} 
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    {children}
  </td>
);

const ClassCellWrapper = ({ color, onClick, children }) => (
  <ClassCell color={color} onClick={onClick}>
    {children}
  </ClassCell>
);

const transformData = (classesData, instructorsData) => {
  let obj = { prop: 'some value' };
  console.log(obj.prop);  // Imprime 'some value'
  const transformedData = {};
  const uniqueClasses = new Set();

  classesData.forEach((classData) => {
    if (classData.nombre !== 'Pilates') {
      return;
    }

    classData.subclases.forEach((subclase) => {
      subclase.horarios.forEach((horario) => {
        if (horario.tipo !== 'pilates') {
          return;
        }

        horario.dias.forEach((dia) => {
          if (!transformedData[dia]) {
            transformedData[dia] = [];
          }

          const instructor = instructorsData.find((instructor) =>
            instructor.subclases.map(id => id.toString()).includes(subclase._id.toString())
          );

          if (!instructor) {
            console.log(`No se encontró instructor para la subclase con ID ${subclase._id}`);
          }

          const [time, endTime] = horario.horario.split(" - ");

          // Creamos una clave única para cada clase basada en los ID únicos
          const classKey = `${classData._id}-${subclase._id}-${instructor ? instructor._id : "Unknown"}-${dia}-${time}`;
          if (!uniqueClasses.has(classKey)) {
            uniqueClasses.add(classKey);
            transformedData[dia].push({
              time,
              endTime,
              instructor: instructor ? instructor.nombre : "Unknown",
              class: subclase.nombre,
              maxCapacity: horario.maxCapacity,
              instructorId: instructor ? instructor._id : "Unknown",
              classId: classData._id,
              subClassId: subclase._id,
            });
          }
        });
      });
    });
  });

  return transformedData;
};


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
        { time: '19:00', endTime: '20:00', instructor: 'Laura', class: 'Flexibilidad' }
        ],
        Sábado: [
        { time: '16:00', endTime: '17:00', instructor: 'Martha', class: 'Para la Postura' }
        ],
        Domingo: [
            
        { time: '15:00', endTime: '16:00', instructor: 'Laura', class: 'Con Equipo' }
        ],

 };


function CalendarioPilates({ setSelectedClass,selectedClass, setModalIsOpen, handleCloseModal }) {

  const [classes, setClasses] = useState(HorarioPilates);

  console.log(classes);

    const colors = {
    'Con Equipo': 'lightpink',
    'Para la Postura': 'lightblue',
    'Intermedio': 'lightgreen',
    'Mat': 'lightpink',
    'Avanzado': 'lightyellow',
    'Principiante': 'lightblue',
    'Flexibilidad': 'coral',
   
  };
const fetchClassesAndInstructors = async () => {
    try {
      const [classesResponse, instructorsResponse] = await Promise.all([
        axios.get('http://localhost:3000/reservas/clases'),
        axios.get('http://localhost:3000/reservas/instructores')
      ]);
  
      const classesData = classesResponse.data;
      const instructorsData = instructorsResponse.data;
  
      console.log('Datos de la API:', classesData, instructorsData);
  
      const transformedData = transformData(classesData, instructorsData);
  
      console.log('Datos transformados:', transformedData);
  
      console.log('fetchClassesAndInstructors se está llamando');
      
      setClasses(transformedData);
    } catch (error) {
      console.error('Failed to fetch classes and instructors', error);
    }
  };
  
  useEffect(() => {
    fetchClassesAndInstructors();
  }, []); // Array de dependencias vacío
  
  // Nuevo useEffect para loggear el estado de las clases cada vez que cambia
  useEffect(() => {
    console.log('Estado de las clases:', classes);
  }, [classes]);


  const handleClassClick = async (day, time, classAtThisTime, instructorId, subclassId) => {
    console.log('handleClassClick was called');
  
    try {
      // Calculate the date of the next class on the selected day of the week
      let currentDate = new Date();
      let currentDayOfWeek = currentDate.getDay();
      let daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
      let selectedDayOfWeek = daysOfWeek.indexOf(day);
      let daysUntilSelectedDay = (selectedDayOfWeek - currentDayOfWeek + 7) % 7;
      let selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + daysUntilSelectedDay);
  
      // Make a request to your API to get the class information
      let classResponse = await axios.get(`http://localhost:3000/reservas/clases/${classAtThisTime.classId}`);
      let data = classResponse.data;
      console.log(data); // Print the data to see what they contain
  
      let horario;
      if (data && data.subclases) {
        data.subclases.forEach(subclase => {
          if (subclase._id === classAtThisTime.subClassId && subclase.horarios) {
            horario = subclase.horarios.find(h => h.horario === classAtThisTime.time);
          }
        });
      }
  
      // Now you can access the main class type
      let classType;
      if (data && data.nombre) {
        classType = data.nombre;
      }
  
      const instructorResponse = await axios.get(`http://localhost:3000/reservas/instructores/${instructorId}`);
      console.log('Instructor Response:', instructorResponse.data);
  
      const instructorData = instructorResponse.data;
  
      let subClase;
      if (data && data.subclases) {
        subClase = data.subclases.find(subclase => subclase._id === classAtThisTime.subClassId);
      }
  
      // Only make requests to the API if data.subclases has any elements
      let subclassData = null;
if (Array.isArray(data.subclases) && data.subclases.length > 0) {
  const subclass = data.subclases.find(subclass => subclass._id === subclassId);
  if (subclass) {
    const subclassResponse = await axios.get(`http://localhost:3000/reservas/subclases/${subclass._id}`);
    subclassData = subclassResponse.data;
  }
}
      console.log('classAtThisTime:', classAtThisTime);
      console.log('subclassData:', subclassData);
      console.log('instructorData:', instructorData);
  
      let subClassId = null; // Initialize subClassId as null
  
      // Only access subclassData[0] if it is not undefined
      if (subclassData && subclassData[0]) {
        subClassId = subclassData[0].id;
      }
  
      const selectedClassData = {
        date: selectedDate,
        day,
        time,
        classType: classType,
        classId: classAtThisTime.classId,
        subClase: subClase ? subClase.nombre : null, // Use the name of the subclass if it exists
        subClassId: classAtThisTime.subClassId, // Use the id from classAtThisTime
        instructor: {
          name: instructorData.nombre,
          id: instructorData._id,
          specialty: instructorData.especialidad,
          subClasses: subclassData // This is now an array of subclass objects
        },
      };
      console.log('Selected Class Data:', selectedClassData);
      setSelectedClass(selectedClassData);
    } catch (error) {
      console.error('An error occurred in handleClassClick', error);
    }
  };


const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const times = ['10:00','12:00', '12:30', '15:00', '16:00','17:00','17:30','18:00', '19:00', '19:30', '20:00'];


return (
  <>
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
      const classesForThisDay = classes[day];
      const classAtThisTime = classesForThisDay && classesForThisDay.length > 0 ? classesForThisDay.find(clase => {
        const classStartTime = moment(clase.time, 'HH:mm');
        const currentTime = moment(time, 'HH:mm');
      
        return currentTime.isSame(classStartTime);
      }) : null;
  
      return (
        <ClassCellWrapper 
  key={`${day}-${time}`} 
  color={colors[classAtThisTime?.class]} 
  
    onClick={() => {
      console.log('classAtThisTime:', classAtThisTime);
      console.log('Before if:', classAtThisTime, 'subClassId' in classAtThisTime, 'instructorId' in classAtThisTime);
      if (classAtThisTime && 'subClassId' in classAtThisTime && 'instructorId' in classAtThisTime) {
      console.log('Inside if');
      handleClassClick(day, classAtThisTime.time, classAtThisTime, classAtThisTime.instructorId, classAtThisTime.subClassId);
        handleCloseModal();
}
    }}
>
  {classAtThisTime && (
    <div>
      <strong>{classAtThisTime.class}</strong>
      <div>{classAtThisTime.time} - {classAtThisTime.endTime || 'Unknown'}</div>
      <div>{classAtThisTime.instructor || 'Unknown'}</div>
    </div>
  )}
</ClassCellWrapper>
      );
              
    })}
  </tr>
))}
      </tbody>
    </StyledTable>
    {selectedClass && <ReservarClaseYoga classInfo={selectedClass} handleClassClick={handleClassClick} setModalIsOpen={setModalIsOpen} />}  </>
);
 }

export default CalendarioPilates;