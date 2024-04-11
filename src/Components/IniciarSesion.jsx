import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-image: url('/boxeo2.jpg');
  background-size: cover;
  background-position: center;

  border-radius: 20px;  
  overflow: auto;
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
  color: #131313;
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
  border: 1px solid #6ee8ad;
  background: rgba(105, 106, 108, 0.5); 
  border-radius: 10px;
  flex-basis: 50%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-width: 850px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 20px;
  color: #a3eeb6;

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

function IniciarSesion({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [sesionIniciada, setSesionIniciada] = useState(false);

  const iniciarSesion = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSesionIniciada(true);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
  
    if (username === 'pilarcantarero' && password === '1234') {
      navigate('/Gestion', { state: { username, initialMembresia: 'Membresía Administrador' } });
    } else {
      navigate('/PaginaUsuario', { state: { username, membresia: 'Membresía Usuario' } });
    }
  };
    
  return (
  <BackgroundContainer>
    <FormContainer>
    <h2>¡BIENVENIDO FITLIFE!</h2>
    <Form onSubmit={handleSubmit}>
    <StyledLabel htmlFor="username">
  Usuario:
  <StyledInput id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
</StyledLabel>
<StyledLabel htmlFor="password">
  Contraseña:
  <StyledInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</StyledLabel>
    <div>
    <Button type="submit">Iniciar sesión</Button> 
      {sesionIniciada && <p>Sesión iniciada</p>}
    </div>
    {/* <button onClick={handleSubmit}>Iniciar sesión</button> esto ya sera cuando hay datos reales */}
    <Button onClick={() => navigate("/Registrarse")}>Registrarse</Button>  
    </Form>
  </FormContainer>
  </BackgroundContainer>
  );
}

export default IniciarSesion;