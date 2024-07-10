import React from 'react';
import { useForm } from 'react-hook-form';

// Crea una instancia de ReservacionesContext
const ReservacionesContext = React.createContext();

export function ReservacionesProvider({ children }) {
  const [reservaciones, setReservaciones] = React.useState([]);
  const [formulario, setFormulario] = React.useState({});

  // Resto de tu código aquí

  return (
    <ReservacionesContext.Provider value={{ reservaciones, agregarReservacion, eliminarReservacion, formulario, setFormulario }}>
      {children}
    </ReservacionesContext.Provider>
  );
}

// Exporta ReservacionesContext para que pueda ser usado en otros componentes
export default ReservacionesContext;