import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'react-feather'; // react-feather para los íconos
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2em; 
  color: #080807;
  margin: 10px;
  padding: 10px;
  position: relative;
  z-index: 1;
  background: rgba(115, 165, 131, 0.8);
`;
const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100vh; 
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
    opacity: 0.30; // Ajusta opacidad 
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
  margin-top: 80px; 
  margin-bottom: 20px;

  font-size: 20px;
  color: #ecf0ed;
`;

const SuccessMessage = styled.p`
  background-color: lightgreen;
  border: 1px solid green;
  color: green;
  padding: 10px;
  border-radius: 5px;
`;
const ErrorMessage = styled.p`
  color: red;
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
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  

    const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    dni: '',
    countryCode: '',
    telefono: '',
    fechaNacimiento: '',
    password: '',
    verificarContrasena: '',
    genero: '',
    suscripcion: 'Abono Básico',
    terminos: false,
    promociones: false,
    notificaciones: false,
  });
  
  const [passwordDetails, setPasswordDetails] = useState({
    visible: false,
    strength: null,
    match: true,
  });
  const validateForm = () => {
    let errors = {};
    if (!form.telefono) {
      errors.telefono = 'Este campo es requerido';
    }
    if (!form.nombre) {
      errors.nombre = 'Este campo es requerido';
    }
    if (!form.apellidos) {
      errors.apellidos = 'Este campo es requerido';
    }
    if (!form.correo) {
      errors.correo = 'Este campo es requerido';
    }
    if (!form.dni) {
      errors.dni = 'Este campo es requerido';
    }
    if (!form.fechaNacimiento) {
      errors.fechaNacimiento = 'Este campo es requerido';
    }
    if (!form.password) {
      errors.password = 'Este campo es requerido';
    }
    if (!form.verificarContrasena) {
      errors.verificarContrasena = 'Este campo es requerido';
    }
    if (!form.genero) {
      errors.genero = 'Este campo es requerido';
    }
    if (!form.suscripcion) {
      errors.suscripcion = 'Este campo es requerido';
    }
    if (!form.terminos) {
      errors.terminos = 'Este campo es requerido';
    }
    if (!form.notificaciones) {
      errors.notificaciones = 'Este campo es requerido';
    }
    // validar otros campos
    setFormErrors(errors);
  };

  const [countryCode, setCountryCode] = useState("+34");
  const navigate = useNavigate();

  useEffect(() => {
    if (form.password?.length > 8) {
      setPasswordDetails((details) => ({ ...details, strength: 'Strong' }));
    } else if (form.password?.length > 5) {
      setPasswordDetails((details) => ({ ...details, strength: 'Medium' }));
    } else if (form.password?.length > 0) {
      setPasswordDetails((details) => ({ ...details, strength: 'Weak' }));
    } else {
      setPasswordDetails((details) => ({ ...details, strength: null }));
    }

    setPasswordDetails((details) => ({ ...details, match: form.password === form.verificarContrasena }));
  }, [form.password, form.verificarContrasena]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handlePasswordChange = (event) => {
    setForm({
      ...form,
      password: event.target.value,
    });
  };

  const handleConfirmPasswordChange = (event) => {
    setForm({
      ...form,
      verificarContrasena: event.target.value,
    });
  };


  function ErrorMessage({ children }) {
    return <p style={{ color: 'red' }}>{children}</p>;
  }  
const handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    nombre: form.nombre,
    apellidos: form.apellidos,
    correo: form.correo,
    dni: form.dni,
    countryCode: countryCode,
    telefono: form.telefono,
    fechaNacimiento: form.fechaNacimiento,
    password: form.password,
    genero: form.genero,
    suscripcion: form.suscripcion,
    terminos: form.terminos,
    promociones: form.promociones,
    notificaciones: form.notificaciones,
  };

  console.log(user);
  try {
    const response = await fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`An error has occured: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    // Si la respuesta es exitosa, establece el estado del registro en 'success'
    setRegisterStatus('success');
    toast.success(`¡Bienvenido/a ${user.nombre} a FitLife Gym! Ya puedes hacer tus reservas de clases y disfrutar de nuestros servicios.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: '#36A2EB',
        color: '#FFFFFF'
      }
    });
    navigate('/IniciarSesion', { state: { formData: form } });
  } catch (error) {
    console.error('Error:', error);
    setRegisterStatus('error');
  }
};


  return (
    <>
<BackgroundContainer src="/perfil.jpg">
      <FormContainer>
      <StyledH1>EMPIEZA A ENTRENAR CON FITLIFE</StyledH1>
    <Form onSubmit={handleSubmit}>
      <StyledLabel>
        Nombre: *
        <StyledInput type="text" name="nombre" value={form.nombre} onChange={handleChange} 
            style={formErrors.nombre ? {borderColor: 'red'} : null}
        required />
            {formErrors.nombre && <ErrorMessage>{formErrors.nombre}</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
        Apellidos: *
        <StyledInput type="text" name="apellidos" value={form.apellidos} onChange={handleChange} 
            style={formErrors.apellidos ? {borderColor: 'red'} : null}
        required />
            {formErrors.apellidos && <ErrorMessage>{formErrors.apellidos}</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
        Correo electrónico: *
        <StyledInput type="email" name="correo" value={form.correo} onChange={handleChange} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
            style={formErrors.correo ? {borderColor: 'red'} : null}
        required />  
            {formErrors.correo && <ErrorMessage>{formErrors.correo}</ErrorMessage>}   
         </StyledLabel>
      <StyledLabel>
        DNI: *
      <StyledInput type="text" name="dni" value={form.dni} onChange={handleChange} pattern="\d{8}[A-Z]" title="Por favor, introduce un DNI con 8 dígitos seguidos de una letra mayúscula" 
            style={formErrors.dni ? {borderColor: 'red'} : null}
      required />
      {formErrors.dni && <ErrorMessage>{formErrors.dni}</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
      Teléfono Móvil: *
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <StyledSelect name="countryCode" value={countryCode} onChange={e => setCountryCode(e.target.value)} 
    style={{ marginRight: '10px' }} required>
      <option value="">Selecciona...</option>
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
      name="telefono" 
      pattern="\d{9}" 
      title="Por favor, introduce un número de teléfono de 9 dígitos" 
      onChange={e => setForm({ ...form, telefono: e.target.value })}
      style = {formErrors.telefono ? {borderColor: 'red'} : null}
    />
     {formErrors.telefono && <ErrorMessage>{formErrors.telefono}</ErrorMessage>}
  </div>
</StyledLabel>
      <StyledLabel>
        Fecha de nacimiento: *
        <StyledInput type="date" name="fechaNacimiento" onChange={handleChange} 
            style={formErrors.fechaNacimiento ? {borderColor: 'red'} : null}
        required/>
            {formErrors.fechaNacimiento && <ErrorMessage>{formErrors.fechaNacimiento}</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
      Contraseña: *
<div style={{ position: 'relative' }}>
  <StyledInput 
    type={passwordVisible ? "text" : "password"} 
    name="password" 
    value={form.password || ''} 
    onChange={handlePasswordChange} 
    required 
    style={{ paddingRight: '40px' }} 
  />
  {passwordDetails.strength && (
    <div>
      Strength: {passwordDetails.strength}
    </div>
  )}
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
    {passwordVisible ? <EyeOff size={5}/> : <Eye />}
  </button>
</div>
</StyledLabel>
<StyledLabel>
  Confirmar Contraseña:
  <StyledInput 
    type={passwordVisible ? "text" : "password"} 
    name="verificarPassword" 
    value={form.verificarContrasena || ''} 
    onChange={handleConfirmPasswordChange} 
    style={passwordDetails.match ? null : {borderColor: 'red'}}
    required 
  />
</StyledLabel>

{!passwordDetails.match && (
  <div>
    Las contraseñas no coinciden.
  </div>
)}
<StyledLabel>
        Género: *
        <select name="genero" onChange={handleChange} 
            style={formErrors.genero ? {borderColor: 'red'} : null}
        required>
          <option value="">Selecciona...</option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
        </select>
        {formErrors.genero && <ErrorMessage>{formErrors.genero}</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
    Suscripción: *
    <StyledSelect name="suscripcion" value={form.suscripcion} onChange={handleChange}
        style={formErrors.suscripcion ? {borderColor: 'red'} : null}
    required>
      <option value="">Selecciona una opción</option>
      <option value="Abono Básico">Abono Básico</option>
      <option value="Abono Premium">Abono Premium</option>
      <option value="Abono Gold">Abono Gold</option>
    </StyledSelect>
    {formErrors.suscripcion && <ErrorMessage>{formErrors.suscripcion}</ErrorMessage>}
</StyledLabel>
        <div>
  <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
    <input 
      type="checkbox" 
      name="terminos" 
      checked={form.terminos} 
      onChange={e => setForm({...form, terminos: e.target.checked})} 
      style={{ marginRight: '10px' }} 
      required
    />
    Acepto los términos y condiciones *
  </StyledLabel>
  <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
    <input 
      type="checkbox" 
      name="promociones" 
      checked={form.promociones} 
      onChange={e => setForm({...form, promociones: e.target.checked})} 
      style={{ marginRight: '10px' }} 
      required
    />
    Acepto recibir promociones y noticias 
  </StyledLabel>
  <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
    <input 
      type="checkbox" 
      name="notificaciones" 
      checked={form.notificaciones} 
      onChange={e => setForm({...form, notificaciones: e.target.checked})} 
      style={{ marginRight: '10px' }} 
      required
    />
    Acepto recibir notificaciones *
  </StyledLabel>
</div>
    <div>
    {registerStatus === 'success' && <SuccessMessage>Usuario registrado con éxito</SuccessMessage>}
    {registerStatus === 'error' && <ErrorMessage>Hubo un problema al registrarse. Por favor, inténtalo de nuevo.</ErrorMessage>}
    </div>
      <Button type="submit" onClick={handleSubmit}>Registrarse</Button>
      </Form>
    </FormContainer>
    </BackgroundContainer>
    </>
  );
}

export default Registrarse;