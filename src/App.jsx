import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import React, { Suspense, lazy } from 'react';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Acerca from './Components/Acerca';
import Precios from './Components/Precios';
import IniciarSesion from './Components/IniciarSesion';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Instructores from './Components/Instructores';
import Clases from './Components/Clases';
import Mision from './Components/Mision';
import Yoga from './Components/Yoga';
import { createGlobalStyle } from 'styled-components';
import Fuerza from './Components/Fuerza';
import Pilates from './Components/Pilates';
import Boxeo from './Components/Boxeo';
import Cardio from './Components/Cardio';
import ReservarClaseYoga from './Components/ReservarClases/ReservarClaseYoga';
import ReservarClaseFuerza from './Components/ReservarClases/ReservarClaseFuerza';
import ReservarClasePilates from './Components/ReservarClases/ReservarClasePilates';
import ReservarClaseBoxeo from './Components/ReservarClases/ReservarClaseBoxeo';
import ReservarClaseCardio from './Components/ReservarClases/ReservarClaseCardio';
import Reservas from './Components/Reservas';
import PaginaUsuario from './Components/PaginaUsuario';
import Gestion from './Components/Gestion';
import styled from 'styled-components';
import Registrarse from './Components/Registrarse';
import Calendario from './Components/Calendario';
import ClaseGratuita from './Components/ClaseGratuita';
import { UserProvider } from './Components/UserContext';

const ContentContainer = styled.div`
  padding-top: 140px; 
`;
const GlobalStyle = createGlobalStyle`
 
  body {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    background-color: rgba(35, 35, 35, 0.691);
    margin: 0;
  }

  button, input, select, textarea, h1, h2, p {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
  }

  .slick-dots li.slick-active button:before {
  color: #80e86d !important;
}


  .slick-dots li button:before {
    color: #80e86d !important;
}
`;



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);



  return (
    <UserProvider value={{ currentUser, setCurrentUser }}>
    <Router>
      <GlobalStyle />
      <div className="App">
      <Header showCalendar={showCalendar} />
        <ContentContainer>
        <Routes>
          <Route path="/Inicio/*" element={<Inicio />} />
          <Route path="/Acerca/*" element={<Acerca/>} />
          <Route path="/Acerca/Instructores" element={<Instructores />} />
          <Route path="/Clases" element={<Clases />} />
          <Route path="/Acerca/Clases" element={<Clases />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Yoga" element={<Yoga/>} />
          <Route path="/Fuerza" element={<Fuerza />} />
          <Route path="/Pilates" element={<Pilates />} />
          <Route path="/Boxeo" element={<Boxeo />} />
          <Route path="/Cardio" element={<Cardio />} />
          <Route path="/Acerca/Mision" element={<Mision />} />
          <Route path="/Reservas" element={<Reservas />} />
          <Route path="/ReservarClase/ReservarClaseYoga" element={<ReservarClaseYoga />} />
          <Route path="/ReservarClases/ReservarClaseFuerza" element={<ReservarClaseFuerza />} />
          <Route path="/ReservarClases/ReservarClasePilates" element={<ReservarClasePilates />} />
          <Route path="/ReservarClases/ReservarClaseBoxeo" element={<ReservarClaseBoxeo />} />
          <Route path="/ReservarClases/ReservarClaseCardio" element={<ReservarClaseCardio />} />
          <Route path='/PaginaUsuario' element={<PaginaUsuario />} />
          <Route path="/Precios" element={<Precios />} />
          <Route path="/IniciarSesion" element={<IniciarSesion onLogin={(user) => {setUser(user); setIsAuthenticated(true);}} />} />         
          <Route path="/Gestion" element={<Gestion />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/Calendario" element={<Calendario />} />
          <Route path="ClaseGratuita" element= {<ClaseGratuita />} />
          <Route path="*" element={<Navigate to="/Inicio/*" replace />} />

        </Routes>
        <Footer />
        </ContentContainer>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
