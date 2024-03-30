import { Routes, Route } from 'react-router-dom';
import Clases from './Clases'; 
import Instructores from './Instructores'; 
import Mision from './Mision';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
      rgba(56, 55, 54, 0.691);  // Reemplaza #yourColor con el color que desees
    }
`;


const StyledH1 = styled.h1`
  text-align: center;
  font-size: 7em;    
  color: #1e1e1f;
   margin: 20px;
   font-family: 'monospace';
`;


function Acerca() {
  return (
    <div>
        <StyledH1></StyledH1>
      <Mision />
      <Routes>
        <Route path="Instructores" element={<Instructores />} />
        <Route path="Clases" element={<Clases />} />
      </Routes>
    </div>
  );
}

export default Acerca;