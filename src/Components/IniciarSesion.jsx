import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';



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

const ErrorMessage = styled.p`
  background-color: pink;
  border: 1px solid red;
  color: red;
  padding: 10px;
  border-radius: 5px;
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

function IniciarSesion({ onLogin }) {
  const { setCurrentUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  

  const [sesionIniciada, setSesionIniciada] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const correo = event.target.elements.correo.value;
    const password = event.target.elements.password.value;
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, password }) 
      });
  
      if (!response.ok) {
        const message = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${message}`);
      }
  
      const { token, user } = await response.json();
      localStorage.setItem('authToken', token);

      if (token) {
        localStorage.setItem('authToken', token);
        setCurrentUser(user);
        const redirect = location.state?.redirect;
         // Si el usuario es un administrador, redirigir a la página de administración
    if (user.isAdmin) {
      navigate('/Gestion', { state: { correo: user.correo, suscripcion: user.suscripcion } });
    } else {
        navigate(redirect || '/PaginaUsuario', { state: { correo: user.correo, suscripcion: user.suscripcion } });
    }
      } else {
        console.error('User is undefined');
      }
  }
  catch (error) {
    setErrorMessage('Correo electrónico o contraseña incorrectos'); 
    console.error('An error occurred:', error);
  }
}
  return (
    <BackgroundContainer>
      <FormContainer>
        <h2>¡BIENVENIDO FITLIFE!</h2>        
        <Form onSubmit={handleSubmit}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} 
          <StyledLabel htmlFor="email"> 
            Correo electrónico: 
            <StyledInput id="correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />          </StyledLabel>
          <StyledLabel htmlFor="password">
            Contraseña:
            <StyledInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </StyledLabel>
          <div>
            <Button type="submit">Iniciar sesión</Button> 
            {sesionIniciada && <p>Sesión iniciada</p>}
          </div>
          <Button onClick={() => navigate("/Registrarse")}>Registrarse</Button>  
        </Form>
      </FormContainer>
    </BackgroundContainer>
  );
}

export default IniciarSesion;