import React, { useState,useEffect } from 'react';
import styled from 'styled-components';


const StyledTextarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #1a1919;
  font-size: 14px;
  font-weight: 200;
`;



const Button = styled.button`
  position: relative;
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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #6dbde8;  
  background: rgba(83, 110, 139, 0.5); 
  border-radius: 10px;
  flex-basis: 50%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-width: 850px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 20px;
  color: #e1f5e6;

`;

const Message = styled.p`
  font-size: 1.5em;
  border: 1px solid #d699a2;
  padding: 10px;
  background: linear-gradient(to right, #909a93, #7c94be, #d699a2, #679e99);
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(0, 255, 0, 0.1);
  

`;

const Form = styled.form`
   max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(229, 226, 226, 0.8); 


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



function FormularioClaseGratuita() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [clase, setClase] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+34");
  const [message, setMessage] = useState("");
  const [clases, setClases] = useState([]);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [fechasHorasDisponibles, setFechasHorasDisponibles] = useState([]);
  const [fechaHoraSeleccionada, setFechaHoraSeleccionada] = useState('');
  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3000/reservas/clases')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setClases(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    console.log(clase, clases); 

    if (clase) {
      const claseSeleccionada = clases.find(claseObj => claseObj._id === clase);

      if (claseSeleccionada) {
        console.log(claseSeleccionada);

        let horariosDisponibles = [];
  
        for (const subclase of claseSeleccionada.subclases) {
          for (const horario of subclase.horarios) {
            horariosDisponibles.push({
              horario: horario.horario,
              dias: horario.dias,
              _id: horario._id
            });
          }
        }
  
        console.log(horariosDisponibles); 
        setFechasHorasDisponibles(horariosDisponibles);
      } else {
        console.error('Clase no encontrada');
      }
    }
  }, [clase, clases]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { 
      nombre, 
      apellidos, 
      countryCode, 
      telefono, 
      email, 
      clase: clase,
      horario: fechaHoraSeleccionada.horario,
      dias: fechaHoraSeleccionada.dias,
      claseId: clase,  
    };
    console.log(telefono);
    console.log(formData); 

    fetch('http://localhost:3000/reservas/free-class-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      setMessage("Muchas gracias, tu reserva ha sido confirmada.Te esperamos en Fitlife Gym !");
      setSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <FormContainer>
      {!submitted && <h2>¡RESERVA TU CLASE GRATUITA!</h2>}
      {!submitted ? (
        <Form onSubmit={handleSubmit}>
          <StyledLabel>
            Nombre:
            <StyledInput type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </StyledLabel>
          <StyledLabel>
            Apellidos:
            <StyledInput type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
          </StyledLabel>
          <StyledLabel>
            Teléfono Móvil:
            <StyledSelect name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
              <option value="+34"> 🇪🇸 +34</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+39">🇮🇹 +39</option>
              <option value="+47">🇳🇴 +47</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+51">🇵🇪 +51</option>
            </StyledSelect>
            <StyledInput type="text" name="telefono" value={telefono} onChange={handleTelefonoChange} pattern="\d{1,15}" title="Por favor, introduce un número de teléfono de entre 1 y 15 dígitos" />          
            </StyledLabel>
          <StyledLabel>
            Correo Electrónico:
            <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </StyledLabel>
          <StyledLabel>
            ¿Qué clase deseas probar?
            <StyledSelect value={clase} onChange={(e) => setClase(e.target.value)}>
              <option value="">Selecciona...</option>
              {clases.map((clase) => (
                <option key={clase._id} value={clase._id}>{clase.nombre}</option>
              ))}
            </StyledSelect>
          </StyledLabel>
                  <StyledLabel>
                      Fecha y hora:
                      <StyledSelect value={fechaHoraSeleccionada ? `${fechaHoraSeleccionada.horario} - ${fechaHoraSeleccionada.dias.join(', ')}` : ''} onChange={(e) => { 
                        const fechaHora = fechasHorasDisponibles.find(fechaHora => `${fechaHora.horario} - ${fechaHora.dias.join(', ')}` === e.target.value);
                          if (fechaHora) {
                                  setFecha(fechaHora.horario); 
                                  setHora(fechaHora.dias.join(', ')); 
                                  setFechaHoraSeleccionada(fechaHora);
                              }
                            }}>
                              <option value="">Selecciona...</option>
                              {fechasHorasDisponibles.map((fechaHora) => (
                                <option key={fechaHora._id} value={`${fechaHora.horario} - ${fechaHora.dias.join(', ')}`}>{`${fechaHora.horario} (${fechaHora.dias.join(', ')})`}</option>
                              ))}
                  </StyledSelect>
              </StyledLabel>
          <StyledInput type="submit" value="Enviar" />
          </Form>
      ) : (
        <Message>{message}</Message>
      )}
      </FormContainer>
    </>
  );
}

export default FormularioClaseGratuita;