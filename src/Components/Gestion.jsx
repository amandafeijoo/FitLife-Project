import React, { useState } from 'react';

function Gestion() {
  const [horario, setHorario] = useState('');
  const [servicios, setServicios] = useState('');

  const handleHorarioChange = (event) => {
    setHorario(event.target.value);
  };

  const handleServiciosChange = (event) => {
    setServicios(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  manejar la actualización de los horarios y servicios
    console.log(`Actualizando horario a: ${horario} y servicios a: ${servicios}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Horario:
        <input type="text" value={horario} onChange={handleHorarioChange} required />
      </label>
      <label>
        Servicios:
        <input type="text" value={servicios} onChange={handleServiciosChange} required />
      </label>
      <input type="submit" value="Actualizar" />
    </form>
  );
}

export default Gestion;