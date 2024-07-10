
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { KJUR } from 'jsrsasign';



const StyledP = styled.p`
  font-size: 2em;
  color: #4c4b4b;
  text-align: center;
  padding: 5px;
  background: #d699a2;
  border: 2px solid #80e86d;
;
  box-shadow: 5px 5px 5px #333;
  transition: transform 0.5s;
    &:hover {
        transform: scale(1.1);
    }
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {

        border: 1px solid #252525;
        padding: 50px;
        text-align: left;
        width: 10%;
        border: 2px solid #eceaea;
       
    }
    
    tr:nth-child(even) {
      background-color: #949697;
    }
`;

const CancelButton = styled.button`
  font-size: 1rem;  // Aumenta el tamaño de la fuente
  padding: 1rem 1rem;  // Aumenta el relleno
  border-radius: 10px;  // Aumenta la curvatura de los bordes
`;



const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
};

const getUserId = async () => {
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.log('No token found');
      reject('No token found');
    } else {
      try {
        const decoded = KJUR.jws.JWS.parse(String(token));
        console.log('userId', decoded.payloadObj._id);
        resolve(decoded.payloadObj._id);
      } catch (error) {
        console.error('Error decoding token:', error);
        reject(error);
      }
    }
  });
};

const Reservas = ({ reservedClasses = [], setReservedClasses, handleCancelClick }) => {

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const userId = await getUserId();
        console.log('User ID:', userId); 
        const reservas = await fetchWithAuth(`http://localhost:3000/users/reservas/${userId}`);
        console.log('Reservas:', reservas); 
        setReservedClasses(reservas);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchReservas();
  }, []);

  useEffect(() => {
    console.log('Reserved Classes:', reservedClasses);
  }, [reservedClasses]);
  
  
  const cancelReservation = async (id) => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }
  
    try {
      const response = await fetchWithAuth(`http://localhost:3000/reservas/cancelar/${id}`, { method: 'PUT' });
      const data = await response.json();
      console.log('Cancel response:', data);
      if (response.ok) {
        setReservedClasses(reservedClasses.filter(reserva => reserva._id !== id));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <StyledP>Clases reservadas</StyledP>
      <StyledTable>
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora</th>
            <th>Clase</th>
            <th>Subclase</th>
            <th>Instructor</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {reservedClasses.map((reservedClass) => {
  const { clase, subClase, instructor, _id, cancelada } = reservedClass;
  const instructorName = instructor ? instructor.nombre : 'No instructor';
  const estado = cancelada ? 'Cancelada' : 'Activa';

  if (subClase && subClase.horarios && subClase.horarios.length > 0) {
    return subClase.horarios.map((horario, index) => {
      const className = horario && horario.tipo ? horario.tipo : 'No class type';
      return (
        <tr key={`${_id}-${index}`}>
          <td>{horario.dias.join(', ') || 'No day provided'}</td>
          <td>{horario.horario || 'No time provided'}</td>
          <td>{className}</td>
          <td>{subClase.nombre || 'No subclase name'}</td>
          <td>{instructorName}</td>   
          <td>{estado}</td>          
          <td>
            {cancelada ? (
              <CancelButton disabled>Cancelada</CancelButton>
            ) : (
              <CancelButton onClick={() => handleCancelClick(_id)}>Cancelar</CancelButton>
            )}
          </td>
        </tr>
      );
    });
  } else {
    return (
      <tr key={_id}>
        <td>No day provided</td>
        <td>No time provided</td>
        <td>No class type</td>
        <td>{subClase ? subClase.nombre : 'No subclase'}</td>
        <td>{instructorName}</td>             
        <td>
          {cancelada ? (
            <CancelButton disabled>Cancelada</CancelButton>
          ) : (
            <CancelButton onClick={() => handleCancelClick(_id)}>Cancelar</CancelButton>
          )}
        </td>
      </tr>
    );
  }
})}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default Reservas;