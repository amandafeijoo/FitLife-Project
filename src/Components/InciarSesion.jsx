import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-image: url('/yoga3.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;  
  overflow: auto;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 20px;  
  overflow: auto;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  background-color: rgba(242, 241, 241, 0.8); // Cambia el último valor para ajustar la transparencia
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.input`
  width: 300px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007BFF;
  color: white;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;


function InciarSesion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (username, password) => {
    // Aquí debes implementar la lógica de inicio de sesión.
    // Si el inicio de sesión es exitoso, establece el estado del usuario.
    setUser({ username, password });
  }

  const handleLogout = () => {
    // Aquí debes implementar la lógica de cierre de sesión.
    // Cuando el usuario cierra la sesión, borra el estado del usuario.
    setUser(null);
  }
  
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el registro
    console.log(`Registrando con usuario: ${username}, email: ${email} y contraseña: ${password}`);
    navigate('/PaginaUsuario');
  };

  return (
  <BackgroundContainer>
    <FormContainer>
    <Form onSubmit={handleSubmit}>
    <label>
      Usuario:
      <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
    </label>
    <label>
      Email:
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </label>
    <label>
      Contraseña:
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </label>
    <button type="submit">Iniciar sesión</button>

    {/* <button onClick={handleSubmit}>Iniciar sesión</button> esto ya sera cuando hay datos reales */}
    <Button type="submit" value="Registrarse" />
  </Form>
  </FormContainer>
  </BackgroundContainer>
  );
}

export default InciarSesion;