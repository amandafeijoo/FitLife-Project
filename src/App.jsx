import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import AcercaDe from './Components/AcercaDe';
import Horarios from './Components/Horarios';
import Precios from './Components/Precios';
import Registro from './Components/Registro';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
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
