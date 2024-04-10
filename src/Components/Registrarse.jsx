import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'react-feather'; // react-feather para los íconos


const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2em; 
  color: #080807;
  margin: 10px;
  padding: 10px;
  position: relative;
  z-index: 1;
  background: rgba(79, 172, 109, 0.8);
`;
const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100vh; // Cambia 'height' a 'min-height'
  background-size: cover;
  background-position: center;
  border-radius: 20px;  
  overflow: auto;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    opacity: 0.30; // Ajusta esta opacidad a lo que necesites
    z-index: -1;
  }
`;

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
  color: #302f2f;
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
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #6ee8ad;
  border-radius: 10px;
  flex-basis: 50%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-width: 850px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 80px; // Reduce el valor de 'margin-top'
  margin-bottom: 20px;

  font-size: 20px;
  color: #ecf0ed;
`;

const Form = styled.form`
   max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(229, 226, 226, 0.8); // el último valor para ajustar la transparencia


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

function Registrarse() {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    dni: '',
    telefono: '',
    fechaNacimiento: '',
    contrasenaNueva: '',
    verificarContrasena: '',
    genero: '',
    numeroCuenta: '',
    terminos: false,
    promociones: false,
    recordatorios: false,
    membresia: '',
  });


  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+34");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
  setPassword(event.target.value);
  
  //  calcular la fuerza de la contraseña y establecerla en el estado
  if (event.target.value.length > 8) {
    setPasswordStrength('Strong');
  } else if (event.target.value.length > 5) {
    setPasswordStrength('Medium');
  } else if (event.target.value.length > 0) {
    setPasswordStrength('Weak');
  } else {
    setPasswordStrength(null);
  }
};

const handleConfirmPasswordChange = (event) => {
  setConfirmPassword(event.target.value);
  checkPasswordsMatch(password, event.target.value);
};

const checkPasswordsMatch = (password, confirmPassword) => {
  setPasswordMatch(password === confirmPassword);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    // Aquí se podria  manejar el envío del formulario, por ejemplo, haciendo una llamada a la API para registrar al usuario
  
    // Navegar a la página de usuario después de enviar el formulario
    navigate('/PaginaUsuario', { state: { formData: form } });
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
<BackgroundContainer src="/images/pilates.jpg">
      <FormContainer>
      <StyledH1>EMPIEZA A ENTRENAR CON FITLIFE</StyledH1>
    <Form onSubmit={handleSubmit}>
      <StyledLabel>
        Nombre:
        <StyledInput type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
      </StyledLabel>
      <StyledLabel>
        Apellidos:
        <StyledInput type="text" name="apellidos" value={form.apellidos} onChange={handleChange} required />
      </StyledLabel>
      <StyledLabel>
        Correo electrónico:
        <StyledInput type="email" name="correo" value={form.correo} onChange={handleChange} required />
      </StyledLabel>
      <StyledLabel>
        DNI:
      <StyledInput type="text" name="dni" value={form.dni} onChange={handleChange} pattern="\d{8}[A-Z]" title="Por favor, introduce un DNI con 8 dígitos seguidos de una letra mayúscula" required />
      </StyledLabel>
      <StyledLabel>
      Teléfono Móvil:
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <StyledSelect name="countryCode" value={countryCode} onChange={e => setCountryCode(e.target.value)} style={{ marginRight: '10px' }}>
      <option value="+34"> 🇪🇸 +34</option>
      <option value="+33">🇫🇷 +33</option>
      <option value="+39">🇮🇹 +39</option>
      <option value="+47">🇳🇴 +47</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+49">🇩🇪 +49</option>
      <option value="+51">🇵🇪 +51</option>
    </StyledSelect>
    <StyledInput 
      type="text" 
      name="phone" 
      pattern="\d{9}" 
      title="Por favor, introduce un número de teléfono de 9 dígitos" 
    />
  </div>
</StyledLabel>
      <StyledLabel>
        Fecha de nacimiento
        <StyledInput type="date" name="fechaNacimiento" onChange={handleChange} />
      </StyledLabel>
      <StyledLabel>
  Contraseña:
  <div style={{ position: 'relative' }}>
    <StyledInput 
      type={passwordVisible ? "text" : "password"} 
      name="password" 
      value={password} 
      onChange={handlePasswordChange} 
      required 
      style={{ paddingRight: '40px' }} 
    />
    <button 
      type="button" 
      onClick={() => setPasswordVisible(!passwordVisible)}
      style={{
        position: 'absolute', 
        right: '10px', 
        top: '50%', 
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        border: 'none'
      }}
            >
              {passwordVisible ? <EyeOff size={16}/> : <Eye />}
            </button>
          </div>
        </StyledLabel>
        <StyledLabel>
                Confirmar Contraseña:
                <StyledInput 
                  type={passwordVisible ? "text" : "password"} 
                  name="confirmPassword" 
                  value={confirmPassword} 
                  onChange={handleConfirmPasswordChange} 
                  required 
                />
              </StyledLabel>

              {!passwordMatch && (
                <div>
                  Las contraseñas no coinciden.
                </div>
              )}
      <StyledLabel>
        Género
        <select name="genero" onChange={handleChange}>
          <option value="">Selecciona...</option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
        </select>
      </StyledLabel>
      <StyledLabel>
        Membresía:
        <StyledSelect name="membresia" value={form.membresia} onChange={handleChange} required>
          <option value="">Selecciona una opción</option>
          <option value="basico">Básico</option>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel>
          Número de cuenta
          <StyledInput type="text" name="numeroCuenta" pattern="\d{9}" title="Por favor, introduce un número de cuenta de 9 dígitos" onChange={handleChange} required />
        </StyledLabel>
        <div>
        <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" name="checkboxName" style={{ marginRight: '10px' }} />
          Acepto los términos y condiciones</StyledLabel>
        <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" name="checkboxName" style={{ marginRight: '10px' }} />
          Acepto recibir promociones y noticias</StyledLabel>
        <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" name="checkboxName" style={{ marginRight: '10px' }} />
          Acepto recibir recordatorios</StyledLabel>
      </div>
      <Button type="submit" onClick={handleSubmit}>Registrarse</Button>
      </Form>
    </FormContainer>
    </BackgroundContainer>
    </>
  );
}

export default Registrarse;