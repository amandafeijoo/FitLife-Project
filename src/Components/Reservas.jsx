// Reservas.jsx
import React from 'react';
import styled from 'styled-components';


const StyledP = styled.p`
  font-size: 2em;
  color: #4c4b4b;
  text-align: center;
  padding: 5px;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {

        border: 1px solid #252525;
        padding: 8px;
        text-align: left;
        width: 10%;
    }

    tr:nth-child(even) {
      background-color: #949697;
    }
`;


const Reservas = ({ reservedClasses, handleCancelClick }) => (
    <div>
      <StyledP>Clases reservadas</StyledP>
      <StyledTable>
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora</th>
            <th>Clase</th>
            <th>Instructor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {reservedClasses.map((item, index) => (
          item && <tr key={index}>
            <td>{item.day}</td>
            <td>{item.time}</td>
            <td>{item.class}</td>
            <td>{item.instructor}</td>
            <td>
              <button onClick={() => handleCancelClick(index)}>Cancelar</button>
            </td>
          </tr>
        ))}
        </tbody>
      </StyledTable>
    </div>
  );


export default Reservas;