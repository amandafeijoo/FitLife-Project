import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Acerca from './Components/Acerca';
import Precios from './Components/Precios';
import IniciarSesion from './Components/InciarSesion';
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
import Cardio from './Cardio';
import ReservarClaseYoga from './Components/ReservarClases/ReservarClaseYoga';
import ReservarClaseFuerza from './Components/ReservarClases/ReservarClaseFuerza';
import ReservarClasePilates from './Components/ReservarClases/ReservarClasePilates';
import ReservarClaseBoxeo from './Components/ReservarClases/ReservarClaseBoxeo';
import ReservarClaseCardio from './Components/ReservarClases/ReservarClaseCardio';


const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgba(244, 189, 150, 0.691); // Reemplaza #yourColor con el color que desees
    }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Acerca" element={<Acerca/>} />
          <Route path="/Acerca/Instructores" element={<Instructores />} />
          <Route path="/Acerca/Clases" element={<Clases />} />
          <Route path="/Yoga" element={<Yoga/>} />
          <Route path="/Fuerza" element={<Fuerza />} />
          <Route path="/Pilates" element={<Pilates />} />
          <Route path="/Boxeo" element={<Boxeo />} />
          <Route path="/Cardio" element={<Cardio />} />
          <Route path="/Acerca/Mision" element={<Mision />} />
          <Route path="/ReservarClases/ReservarClaseYoga" element={<ReservarClaseYoga />} />
          <Route path="/ReservarClases/ReservarClaseFuerza" element={<ReservarClaseFuerza />} />
          <Route path="/ReservarClases/ReservarClasePilates" element={<ReservarClasePilates />} />
          <Route path="/ReservarClases/ReservarClaseBoxeo" element={<ReservarClaseBoxeo />} />
          <Route path="/ReservarClases/ReservarClaseCardio" element={<ReservarClaseCardio />} />
          <Route path="/Precios" element={<Precios />} />
          <Route path="/InciarSesion" element={<IniciarSesion />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
