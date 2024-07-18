
import React, { useState, useEffect,useMemo } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip as ChartTooltip } from 'chart.js';

import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { KJUR } from 'jsrsasign';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


Chart.register(ArcElement, Legend, ChartTooltip);


const LogoutIcon = styled.div`
  position: absolute;
  top: 200px;
  right: 20px;

  &:hover {
    color: lightgreen;
  }
`;

const StyledH1 = styled.h1` 
  text-align: center;
  font-size: 3em;
  color: #1e1e1f;
  margin: 20px;
`;


const StyledH2 = styled.h2` 
    font-size: 3em;
    text-align: center;
    margin: 20px;
    padding: 10px;
    color: #e1f5e6;
    text-shadow: 2px 2px 2px #333;
    border-radius: 10px;
    background: rgba(198, 235, 180, 0.5); 
    box-shadow: 5px 5px 5px #333;
    transition: transform 0.5s;
    border: 1px solid #80e86d;
    &:hover {
        transform: scale(1.1);
    }
    
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

const StyledTooltip = styled(Tooltip)`
  .tooltip-inner {
    background-color: gray;
    color: white;
    width: 240px;  
    height: 120px; 
    border-radius: 10px;  
    border: 1px solid cyan; 
    padding:12px;
  }
  .arrow::before {
    border-top-color: green;
  }
`;

const Button = styled.button`
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    font-weight: 600;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    letter-spacing: 2px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
    cursor: pointer;
`;

const Button1 = styled.button`
    background: #679e99;
    color: white;
    text-transform: uppercase;
    border: none;
    font-weight: 600;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    letter-spacing: 2px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
    cursor: pointer;
`;

const CancelButton = styled.button`
  font-size: 1rem;  
  padding: 1rem 1rem;  
  border-radius: 10px;  


`;

const StyledPage = styled.div`
  background: linear-gradient(to right, #909a93, #7c94be, #d699a2, #679e99);
  min-height: 100vh; // Asegura que el fondo cubra toda la altura de la página
`;

function Gestion({ actualizarDatos, handleCancelClick }) {

const location = useLocation();
const username = location.state?.username;
const [changes, setChanges] = useState([]);
const  navigate = useNavigate();
const [reservas, setReservas] = useState([]);
const [users, setUsers] = useState({});
const [suscripcion, setSuscripcion] = useState({ 'Abono Básico': 0, 'Abono Premium': 0, 'Abono Gold': 0 });
const [freeReservations, setFreeReservations] = useState([]);
const [reservasGratuitas, setReservasGratuitas] = useState([]);


useEffect(() => {
  fetch('http://localhost:3000/reservas/')
    .then(response => response.json())
    .then(data => {
    setReservas(data);
    })
    .catch(error => console.error('Error:', error));

  fetch('http://localhost:3000/reservas/free-class-user')
    .then(response => response.json())
    .then(data => {
      setReservasGratuitas(data);
    })
    .catch(error => {
      console.error('Error fetching free reservations:', error);
    });
}, []);


const totalReservas = reservas.length;
const reservasActivas = reservas.filter(reserva => reserva && !reserva.cancelada).length;
const reservasCanceladas = reservas.filter(reserva => reserva && reserva.cancelada).length;
const numReservasGratuitas = reservasGratuitas.length; // Aquí obtenemos la longitud del array de reservas gratuitas

const porcentajeActivas = (reservasActivas / totalReservas) * 100;
const porcentajeCanceladas = (reservasCanceladas / totalReservas) * 100;
const porcentajeGratuitas = (numReservasGratuitas / totalReservas) * 100; // Usamos numReservasGratuitas aquí

const data = {
  labels: ['Reservas Activas', 'Reservas Canceladas', 'Reservas Gratuitas', 'Reservas Eliminadas'],
  datasets: [
    {
      data: [reservasActivas, reservasCanceladas, numReservasGratuitas, totalReservas - reservasActivas - reservasCanceladas - numReservasGratuitas],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#909a93'],
      borderWidth: 1,
      borderColor: '#909a93',
      borderStyle: 'solid',
    },
  ],
};

const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'bottom',
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        const dataset = data.datasets[tooltipItem.datasetIndex];
        const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
        const currentValue = dataset.data[tooltipItem.index];
        const percentage = ((currentValue / total) * 100).toFixed(2);
        return `${data.labels[tooltipItem.index]}: ${percentage}%`;
      }
    }
  }
};

const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem('authToken');

  if (!token || typeof token !== 'string') {
    throw new Error('No valid token found');
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    console.error(`Error: ${response.status} ${response.statusText}`);
    const body = await response.text();
    console.error(`Body: ${body}`);
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
};

const getUserId = async () => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('authToken');
    
      try {
        const decoded = KJUR.jws.JWS.parse(token);
        console.log('userId', decoded.payloadObj._id);
        resolve(decoded.payloadObj._id);
      } catch (error) {
        console.error('Error decoding token:', error);
        reject(error);
      }
    
  });
};

useEffect(() => {
  const fetchUsers = async () => {
    const newUsers = {...users};
    const suscripcion = { 'Abono Básico': 0, 'Abono Platinum': 0, 'Abono Gold': 0 };

    for (const reserva of reservas) {
      if (reserva.user && !newUsers[reserva.user]) {
        const user = await fetchWithAuth(`http://localhost:3000/users/${reserva.user}`);
        newUsers[reserva.user] = user;
        suscripcion[user.suscripcion]++; 
      }
    }

    setUsers(newUsers);
    setSuscripcion(suscripcion); 
  };

  fetchUsers();
}, [reservas]);

const chartData = useMemo(() => ({
  labels: Object.keys(suscripcion),
  datasets: [
    {
      data: Object.values(suscripcion),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}), [suscripcion]);



const deleteReserva = async (id) => {
  const response = await fetch(`http://localhost:3000/reservas/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  setReservas(reservas.filter(reserva => reserva._id !== id));
}


const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Cerrar Sesión
  </Tooltip>
);


  const [dias, setDias] = useState({
    lunes: [
    { hora: '7:00 - 8:00 AM', actividad: 'Yoga matutino (Yoga)', instructor: 'Nombre del instructor', dia: 'Lunes'},
    { hora: '12:00 - 13:00 AM', actividad: 'Clase de boxeo intermedia (Boxeo)', instructor: 'Nombre del instructor',dia: 'Lunes' },
    { hora: '18:00 - 19:00 AM', actividad: 'Pilates de nivel principiante (Pilates)', instructor: 'Nombre del instructor', dia: 'Lunes'},
    { hora: '19:30 - 20:30 AM', actividad: 'Clase de cardio intenso (Cardio)', instructor: 'Nombre del instructor', dia: 'Lunes'},
  ],

  martes: [ 
    { hora: '8:30 - 9:30 AM', actividad: 'Clase de fuerza total (Fuerza)', instructor: 'Nombre del instructor',dia: 'Martes'},
    { hora: '10:00 - 11:00 AM', actividad: ' Yoga restaurativo (Yoga)', instructor: 'Nombre del instructor',dia: 'Martes'},
    { hora: '18:00 - 19:00 AM', actividad: 'Clase de boxeo para principiantes (Boxeo)', instructor: 'Nombre del instructor', dia: 'Martes'},
    { hora: '19:30 - 20:30 AM', actividad: 'Pilates avanzado (Pilates)', instructor: 'Nombre del instructor', dia: 'Martes'},
  ],

  miercoles: [
    { hora: '7:00 - 8:00 AM', actividad: 'Yoga dinámico (Yoga)', instructor: 'Nombre del instructor',dia: 'Miércoles'},
    { hora: '12:00 - 13:00 AM', actividad: 'Clase de cardio y tonificación (Cardio/Fuerza)', instructor: 'Nombre del instructor',dia: 'Miércoles'},
    { hora: '17:30 - 18:30 AM', actividad: 'Boxeo de alta intensidad (Boxeo)', instructor: 'Nombre del instructor', dia: 'Miércoles'},
    { hora: '19:00 - 20:00 AM', actividad: 'Yoga suave y meditación (Yoga)', instructor: 'Nombre del instructor', dia: 'Miércoles'},
  ],

  jueves: [
    { hora: '8:30 - 9:00 AM', actividad: 'Clase de fuerza y resistencia (Fuerza)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    { hora: '10:00 - 11:00 AM', actividad: 'Pilates mat (Pilates)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    { hora: '18:00 - 19:00 AM', actividad: 'Clase de boxeo avanzado (Boxeo)', instructor: 'Nombre del instructor',dia: 'Jueves'},
    { hora: '19:30 - 20:00 AM', actividad: 'Yoga para la flexibilidad (Yoga)', instructor: 'Nombre del instructor',dia: 'Jueves'},
  ],

  viernes: [
    { hora: '7:00 - 8:00 ', actividad: 'Entrenamiento de fuerza y ​​acondicionamiento (Fuerza/Cardio)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    { hora: '12:00 - 13:00 AM', actividad: ' Yoga al aire libre (Yoga)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    { hora: '17:30 - 18:30 AM', actividad: ' Clase de boxeo y entrenamiento en circuito (Boxeo/Fuerza)', instructor: 'Nombre del instructor',dia: 'Viernes'},
    { hora: '19:00 - 20:00 AM', actividad: ' Pilates de nivel intermedio (Pilates)', instructor: 'Nombre del instructor',dia: 'Viernes'},
  ],

  sabado: [
    { hora: '9:00 - 10:00 AM', actividad: 'Clase de cardio dance (Cardio)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    { hora: '10:30 - 11:30 AM', actividad: ' Yoga al aire libre (Yoga)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    { hora: '12:00 - 13:00 AM', actividad: ' Clase de boxeo y entrenamiento en circuito (Boxeo/Fuerza)', instructor: 'Nombre del instructor',dia: 'Sábado'},
    { hora: '16:00 - 17:00 AM', actividad: 'Pilates para la postura (Pilates)', instructor: 'Nombre del instructor',dia: 'Sábado'},
  ],
  domingo: [
    { hora: '10:00 - 11:00 AM', actividad: 'Clase de yoga de relajación y estiramiento (Yoga)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    { hora: '11:30 - 12:00 AM', actividad: 'Cardio Kickboxing (Cardio)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    { hora: '13:00 - 14:00 AM', actividad: 'Clase de fuerza total del cuerpo (Fuerza)', instructor: 'Nombre del instructor',dia: 'Domingo'},
    { hora: '15:00 - 16:00 AM', actividad: 'Pilates con equipo (Pilates)', instructor: 'Nombre del instructor',dia: 'Domingo'},
  ],
  });

 const handleDiaChange = (dia, event, index, field) => {
  if (actualizarDatos()) {
    const newDias = {...dias};
    newDias[dia][index][field] = event.target.textContent;
    setDias(newDias);

    setChanges(prevChanges => [...prevChanges, `El ${field} de la actividad en el índice ${index} ha cambiado a ${newDias[dia][index][field]}`]);
  }
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
  
    setChanges(prevChanges => [...prevChanges, `El ${field} de la membresía en el índice ${index} ha cambiado a ${newMembresias[index][field]}`]);
  };
  

  function actualizarDatos() {
    if (window.confirm("¿Estás seguro de que quieres realizar estos cambios?")) {
      window.alert("Los cambios se han realizado con éxito.");
      return true;
    }
    return false;
  }

  function cerrarSesion() {
    localStorage.removeItem('authToken');
    navigate('/IniciarSesion');
  }


  return (
    <StyledPage>
    <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <LogoutIcon onClick={cerrarSesion}>
        <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
      </LogoutIcon>
    </OverlayTrigger>
      <br/>
       <StyledH1>Bienvenido Fitlife Admin! {username}!</StyledH1>
    {changes.length > 0 && (
      <div style={{backgroundColor: 'white'}}>
        <StyledH2>Cambios:</StyledH2>
        <ul>
          {changes.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </div>
    )}

    <br/>
    <StyledH2> Gráfico de Reservas</StyledH2>
    <br/>
    <div style={{width: '35%', margin: 'auto'}}>
      <Pie data={data} options={options} />
    </div>
    <StyledH2>Gestión de Reservas</StyledH2>
    <br/>
<Tabla>
  <thead>
    <tr>
      <th>Día</th>
      <th>Hora</th>
      <th>Clase</th>
      <th>Subclase</th>
      <th>Instructor</th>
      <th>Usuario</th>
      <th>Estado</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {reservas.map((reserva, index,) => {
      const { clase, subClase, instructor, _id, cancelada, user, isFree} = reserva;
      const instructorName = instructor ? instructor.nombre : 'No instructor';
      const estado = cancelada ? 'Cancelada' : 'Activa';
      
      const tooltip = (
        <StyledTooltip id={`tooltip-${_id}`}>
          <strong>Nombre:</strong> {users[user]?.nombre || 'No name provided'}<br/>
          <strong>Apellidos:</strong> {users[user]?.apellidos || 'No surname provided'}<br/>
          <strong>Tipo de suscripción:</strong> {users[user]?.suscripcion || 'No subscription type provided'}<br/>
          <strong>Correo:</strong> {users[user]?.correo ? <a href={`mailto:${users[user]?.correo}?subject=Asunto del correo&body=Fitlife Gym te contacta`} onClick={(event) => event.stopPropagation()}>{users[user]?.correo}</a> : 'No email provided'}<br/>    
          <strong>Teléfono:</strong> {users[user]?.telefono ? <a href={`tel:${users[user]?.telefono}`}>{users[user]?.telefono}</a> : 'No phone number provided'}<br/>
          </StyledTooltip>
          );
      if (subClase && subClase.horarios && subClase.horarios.length > 0) {
        return subClase.horarios.map((horario, index) => {
          const className = horario && horario.tipo ? horario.tipo : 'No class type';
          return (
            <Fila key={`${_id}-${index}`}>
              <Celda>{horario.dias.join(', ') || 'No day provided'}</Celda>
              <Celda>{horario.horario || 'No time provided'}</Celda>
              <Celda>{className}</Celda>
              <Celda>{subClase.nombre || 'No subclase name'}</Celda>
              <Celda>{instructorName}</Celda>
              <Celda>
              {user ? (
                <OverlayTrigger overlay={tooltip} placement="right" delay={{ show: 250, hide: 800 }}>
                  <span>{`${users[user]?.nombre} ${users[user]?.apellidos}`}</span>
                </OverlayTrigger>
              ) : (
                <span>{isFree ? `${reserva.nombre} (${reserva.correo}, ${reserva.telefono})` : 'No user'}</span>
              )}
              </Celda>
              <Celda>{estado}</Celda>
              <Celda>
              <CancelButton onClick={() => {
                if (window.confirm('¿Estás seguro de que quieres eliminar esta reserva?')) {
                  deleteReserva(_id);
                }
              }}>
                Eliminar reserva
              </CancelButton>
            </Celda>
            </Fila>
          );
        });
      }
      return null;
    })}
  </tbody>
</Tabla>
<StyledH2>Reservas Gratuitas</StyledH2>
<Tabla>
    <thead>
      <tr>
        <th>Nombre de la clase</th>
        <th>Instructor</th>
        <th>Especialidad</th>
        <th>Es gratuita</th>
      </tr>
    </thead>
    <tbody>
      {reservasGratuitas.map((reserva) => (
        <Fila key={reserva._id}>
          <Celda>{reserva.subClase.nombre}</Celda>
          <Celda>{reserva.instructor.nombre}</Celda>
          <Celda>{reserva.instructor.especialidad}</Celda>
          <Celda>{reserva.isFree ? 'Sí' : 'No'}</Celda>
        </Fila>
      ))}
    </tbody>
  </Tabla>

    <StyledH2>Gestión de Clases Específicas</StyledH2>
    <ContenedorBoton>
      <Button onClick={actualizarDatos}>Actualizar datos</Button>
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
    {Object.entries(dias).map(([dia, actividades]) =>
      actividades.map((actividad, index) => (
        <Fila key={index}>
          <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleDiaChange(dia, e, index, 'hora')}>
            {actividad.hora}
          </Celda>
          <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleDiaChange(dia, e, index, 'actividad')}>
            {actividad.actividad}
          </Celda>
          <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleDiaChange(dia, e, index, 'instructor')}>
            {actividad.instructor}
          </Celda>
          <Celda contentEditable suppressContentEditableWarning onBlur={(e) => handleDiaChange(dia, e, index, 'dia')}>
            {actividad.dia}
          </Celda>
        </Fila>
      ))
    )}
  </tbody>
</Tabla>
    <StyledH2>Gestión de Membresías</StyledH2>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
    <div style={{width: '600px', height: '600px'}}>
        <Doughnut data={chartData} options={options} />
    </div>
</div>
   
    <StyledH2>Usuarios Activos</StyledH2>
    <Tabla>
  <thead>
    <tr>
      <th>Suscripción</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Correo</th>
      <th>Fecha de Registro</th>
    </tr>
  </thead>
  <tbody>
    {Object.values(users).map((user, index) => (
      <Fila key={index}>
        <Celda>{user.suscripcion}</Celda>
        <Celda>{user.nombre}</Celda>
        <Celda>{user.apellidos}</Celda>
        <Celda>{user.correo}</Celda>
        <Celda>{new Date(user.fechaRegistro).toLocaleDateString()}</Celda>
      </Fila>
    ))}
  </tbody>
</Tabla>
<Button1 onClick={cerrarSesion}>Cerrar Sesión</Button1>
</StyledPage>
    
  );
}

export default Gestion;