import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Acerca from './Components/Acerca';
import Horarios from './Components/Horarios';
import Precios from './Components/Precios';
import Registro from './Components/Registro';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Instructores from './Components/Instructores';
import Clases from './Components/Clases';
import { createGlobalStyle } from 'styled-components';


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
          <Route path="/Horarios" element={<Horarios />} />
          <Route path="/Precios" element={<Precios />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
