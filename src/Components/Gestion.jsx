import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledH1 = styled.h1` 
  text-align: center;
  font-size: 3em;
  color: #1e1e1f;
  margin: 20px;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 2em;
  color: #1e1e1f;
  margin: 20px;
`;

const Tabla = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;

`;

const Celda = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Fila = styled.tr`
  &:nth-child(even) {background-color: #f2f2f2;}
`;

const ContenedorBoton = styled.div`
  text-align: center;
`;

const Boton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #235d98;
  color: white;
  margin: 20px;
  padding: 10px 20px;
  cursor: pointer;


  &:hover {
    background-color: #0056b3;
  }


  @media (min-width: 768px) {
    width: 500px;
  }
  
  @media (min-width: 1024px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 900px;
  }
`;


function Gestion() {

const location = useLocation();
const username = location.state?.username;

  const [lunes, setLunes] = useState([
    { hora: '7:00 - 8:00 AM', actividad: 'Yoga matutino (Yoga)', instructor: 'Nombre del instructor', dia: 'Lunes'},
    { hora: '12:00 - 13:00 AM', actividad: 'Clase de boxeo intermedia (Boxeo)', instructor: 'Nombre del instructor',dia: 'Lunes' },
    { hora: '18:00 - 19:00 AM', actividad: 'Pilates de nivel principiante (Pilates)', instructor: 'Nombre del instructor', dia: 'Lunes'},
    { hora: '19:30 - 20:30 AM', actividad: 'Clase de cardio intenso (Cardio)', instructor: 'Nombre del instructor', dia: 'Lunes'},
    // ...resto de actividades del lunes
  ]);

  const [martes, setMartes] = useState([  
    { hora: '8:30 - 9:30 AM', actividad: 'Clase de fuerza total (Fuerza)', instructor: 'Nombre del instructor',dia: 'Martes'},
    { hora: '10:00 - 11:00 AM', actividad: ' Yoga restaurativo (Yoga)', instructor: 'Nombre del instructor',dia: 'Martes'},
    { hora: '18:00 - 19:00 AM', actividad: 'Clase de boxeo para principiantes (Boxeo)', instructor: 'Nombre del instructor', dia: 'Martes'},
    { hora: '19:30 - 20:30 AM', actividad: 'Pilates avanzado (Pilates)', instructor: 'Nombre del instructor', dia: 'Martes'},
    // ...resto de actividades del martes
  ]);

  const [miercoles, setMiercoles] = useState([
    { hora: '7:00 - 8:00 AM', actividad: 'Yoga dinámico (Yoga)', instructor: 'Nombre del instructor',dia: 'Miércoles'},
    { hora: '12:00 - 13:00 AM', actividad: 'Clase de cardio y tonificación (Cardio/Fuerza)', instructor: 'Nombre del instructor',dia: 'Miércoles'},
    { hora: '17:30 - 18:30 AM', actividad: 'Boxeo de alta intensidad (Boxeo)', instructor: 'Nombre del instructor', dia: 'Miércoles'},
    { hora: '19:00 - 20:00 AM', actividad: 'Yoga suave y meditación (Yoga)', instructor: 'Nombre del instructor', dia: 'Miércoles'},
    // ...resto de actividades del miercoles
  ]);

  const [jueves, setJueves] = useState([
    { hora: '8:30 - 9:00 AM', actividad: 'Clase de fuerza y resistencia (Fuerza)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    { hora: '10:00 - 11:00 AM', actividad: 'Pilates mat (Pilates)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    { hora: '18:00 - 19:00 AM', actividad: 'Clase de boxeo avanzado (Boxeo)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    { hora: '19:30 - 20:00 AM', actividad: 'Yoga para la flexibilidad (Yoga)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    // ...resto de actividades del jueves
  ]);

  const [viernes, setViernes] = useState([
    { hora: '7:00 - 8:00 ', actividad: 'Entrenamiento de fuerza y ​​acondicionamiento (Fuerza/Cardio)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    { hora: '12:00 - 13:00 AM', actividad: ' Yoga al aire libre (Yoga)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    { hora: '17:30 - 18:30 AM', actividad: ' Clase de boxeo y entrenamiento en circuito (Boxeo/Fuerza)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    { hora: '19:00 - 20:00 AM', actividad: ' Pilates de nivel intermedio (Pilates)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    // ...resto de actividades del viernes
  ]);

  const [sabado, setSabado] = useState([
    { hora: '9:00 - 10:00 AM', actividad: 'Clase de cardio dance (Cardio)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    { hora: '10:30 - 11:30 AM', actividad: ' Yoga al aire libre (Yoga)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    { hora: '12:00 - 13:00 AM', actividad: ' Clase de boxeo y entrenamiento en circuito (Boxeo/Fuerza)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    { hora: '16:00 - 17:00 AM', actividad: 'Pilates para la postura (Pilates)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    // ...resto de actividades del sabado
  ]);

  const [domingo, setDomingo] = useState([
    { hora: '10:00 - 11:00 AM', actividad: 'Clase de yoga de relajación y estiramiento (Yoga)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    { hora: '11:30 - 12:00 AM', actividad: 'Cardio Kickboxing (Cardio)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    { hora: '13:00 - 14:00 AM', actividad: 'Clase de fuerza total del cuerpo (Fuerza)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    { hora: '15:00 - 16:00 AM', actividad: 'Pilates con equipo (Pilates)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    // ...resto de actividades del domingo
  ]);

  
  const handleTableChange = (event, day, index, field) => {
    const newDay = [...day];
    newDay[index][field] = event.target.textContent;
    if (day === lunes) {
      setLunes(newDay);
      guardarDatos(newDay);
    }
    if (day === martes) {
      setMartes(newDay);
      guardarDatos(newDay);
    }
    if (day === miercoles) {
      setMiercoles(newDay);
      guardarDatos(newDay);
    }
    if (day === jueves) {
      setJueves(newDay);
      guardarDatos(newDay);
    }
    if (day === viernes) {
      setViernes(newDay);
      guardarDatos(newDay);
    }
    if (day === sabado) {
      setSabado(newDay);
      guardarDatos(newDay);
    }
    if (day === domingo) {
      setDomingo(newDay);
      guardarDatos(newDay);
    }
  };

  const guardarDatos = () => {
    // Aquí va la lógica para guardar los datos
    const todosLosDias = { lunes, martes, miercoles, jueves, viernes, sabado, domingo };
    console.log('Datos guardados:', todosLosDias);
  };

  const [membresias, setMembresias] = useState([
    { nombre: 'Básico', precio: '25', beneficios: 'Beneficio 1, Beneficio 2' },
    { nombre: 'Platinum', precio: '35', beneficios: 'Beneficio 1, Beneficio 2, Beneficio 3' },
    { nombre: 'Gold', precio: '55', beneficios: 'Beneficio 1, Beneficio 2, Beneficio 3, Beneficio 4' },
  ]);

  const handleMembresiaChange = (event, index, field) => {
    const newMembresias = [...membresias];
    newMembresias[index][field] = event.target.textContent;
    setMembresias(newMembresias);
  };

  const [horarios, setHorarios] = useState([
    { dia: 'Lunes', horario: '6:00 - 22:00' },
    { dia: 'Martes', horario: '6:00 - 22:00' },
    { dia: 'Miércoles', horario: '6:00 - 22:00' },
    { dia: 'Jueves', horario: '6:00 - 22:00' },
    { dia: 'Viernes', horario: '6:00 - 22:00' },
    { dia: 'Sábado', horario: '8:00 - 20:00' },
    { dia: 'Domingo', horario: '8:00 - 20:00' },
  ]);

    const handleHorarioChange = (event, index, field) => {
      const newHorarios = [...horarios];
      newHorarios[index][field] = event.target.textContent;
      setHorarios(newHorarios);
    };
  



  return (
    <> 
      <StyledH1>Bienvenido {username}!</StyledH1>
    <StyledH2>Gestión de Clases Específicas</StyledH2>
    <ContenedorBoton>
    <Boton onClick={guardarDatos}>Guardar Cambios</Boton>
  </ContenedorBoton>
    <Tabla>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Actividad</th>
          <th>Instructor</th>
          <th>Día</th>
        </tr>
      </thead>
      <tbody>
        {lunes.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, lunes, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, lunes, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, lunes, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, lunes, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}
        {martes.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, martes, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, martes, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, martes, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, martes, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}

        {miercoles.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, miércoles, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, miércoles, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, miércoles, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, miercoles, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}

        {jueves.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, jueves, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, jueves, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, jueves, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, jueves, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}

        {viernes.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, viernes, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, viernes, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, viernes, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, viernes, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}

        {sabado.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, sábado, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, sábado, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, sábado, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, sábado, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}

        {domingo.map((actividad, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, domingo, index, 'hora')}>
              {actividad.hora}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, domingo, index, 'actividad')}>
              {actividad.actividad}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, domingo, index, 'instructor')}>
              {actividad.instructor}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleTableChange(e, martes, index, 'dia')}>
              {actividad.dia}
            </Celda>
          </Fila>
        ))}
      </tbody>
    </Tabla>
    <StyledH1>Gestión de Membresías</StyledH1>
    <ContenedorBoton>
      <Boton onClick={guardarDatos}>Guardar Cambios</Boton>
    </ContenedorBoton>
    <Tabla>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Beneficios</th>
        </tr>
      </thead>
      <tbody>
        {membresias.map((membresia, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleMembresiaChange(e, index, 'nombre')}>
              {membresia.nombre}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleMembresiaChange(e, index, 'precio')}>
              {membresia.precio}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleMembresiaChange(e, index, 'beneficios')}>
              {membresia.beneficios}
            </Celda>
          </Fila>
        ))}
      </tbody>
    </Tabla>
    <StyledH1>Gestión de Horarios</StyledH1>
    <ContenedorBoton>
      <Boton onClick={guardarDatos}>Guardar Cambios</Boton>
    </ContenedorBoton>
    <Tabla>
      <thead>
        <tr>
          <th>Día</th>
          <th>Horario</th>
        </tr>
      </thead>
      <tbody>
        {horarios.map((horario, index) => (
          <Fila key={index}>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleHorarioChange(e, index, 'dia')}>
              {horario.dia}
            </Celda>
            <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleHorarioChange(e, index, 'horario')}>
              {horario.horario}
            </Celda>
          </Fila>
        ))}
      </tbody>
    </Tabla>
  </>
    
  );
}

export default Gestion;