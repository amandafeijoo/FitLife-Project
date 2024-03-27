import { Routes, Route } from 'react-router-dom';
import Clases from './Clases'; 
import Instructores from './Instructores'; 

function Acerca() {
  return (
    <div>
      <h1>Acerca</h1>
      <Routes>
        <Route path="Instructores" element={<Instructores />} />
        <Route path="Clases" element={<Clases />} />
      </Routes>
    </div>
  );
}

export default Acerca;