import React, { useState } from 'react';
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
  background: rgba(83, 110, 139, 0.5); // Ajusta el último valor (0.5) para cambiar la transparencia
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

const Form = styled.form`
   max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(229, 226, 226, 0.8); // Cambia el último valor para ajustar la transparencia


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
  const [countryCode, setCountryCode] = useState("+34"); // Asume que +34 es el valor predeterminado


  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Muchas gracias, tu reserva ha sido confirmada.Te enviaremos una confirmación de hora y fecha a tu correo eléctronico Te esperamos en Fitlife");
  
    // Aquí manejar el envío del formulario, enviando los datos a un servidor
    console.log({ nombre, apellidos, telefono, email, clase });
    setSubmitted(true);
  };



  return (
    <>
    <FormContainer>
    <h2>¡RESERVA TU CLASE GRATUITA!</h2>
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
      <StyledInput type="text" name="phone" pattern="\d{9}" title="Por favor, introduce un número de teléfono de 9 dígitos" />
<StyledSelect name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
  <option value="+34"> 🇪🇸 +34</option>
  <option value="+33">🇫🇷 +33</option>
  <option value="+39">🇮🇹 +39</option>
  <option value="+47">🇳🇴 +47</option>
  <option value="+44">🇬🇧 +44</option>
  <option value="+49">🇩🇪 +49</option>
  <option value="+51">🇵🇪 +51</option>
</StyledSelect>
</StyledLabel>
<StyledLabel>
  Correo Electrónico:
  <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</StyledLabel>
<StyledLabel>
  ¿Qué clase deseas probar?
  <StyledSelect value={clase} onChange={(e) => setClase(e.target.value)}>
    <option value="">Selecciona...</option>
    <option value="yoga">Yoga</option>
    <option value="boxeo">Boxeo</option>
    <option value="cardio">Cardio</option>
    <option value="pilates">Pilates</option>
    <option value="fuerza">Fuerza</option>
  </StyledSelect>
</StyledLabel>
    <StyledInput type="submit" value="Enviar" />
  </Form>
  {message && <p>{message}</p>}
    </FormContainer>
    </>
  );
}

export default FormularioClaseGratuita;