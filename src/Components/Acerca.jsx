import { Routes, Route } from 'react-router-dom';
import Clases from './Clases'; 
import Instructores from './Instructores'; 
import styled from 'styled-components';
import { FaSpotify } from 'react-icons/fa';
import ClaseGratuita from './ClaseGratuita';
import Mision from './Mision';
// import { BrowserRouter as Router } from 'react-router-dom';


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
 
`;
const StyledIcon = styled(FaSpotify)`
  color: #70b580;
  margin: 0 10px;
  transition: color 0.2s ease-in-out;
  
`;
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2em;    
  color: #cfd2d5;
   margin: 20px;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const SpotifyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #6dbde8;
  background: rgba(83, 110, 139, 0.5); // Ajusta el último valor (0.5) para cambiar la transparencia
  border-radius: 10px;
  flex-basis: 50%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 16px;

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


function Acerca() {
  return (
    <div>
      <MainContainer>
      <SpotifyContainer>
      <StyledIcon size={50} />
        <StyledH1>¡Escucha nuestra playlist en Spotify!</StyledH1>
      <iframe src="https://open.spotify.com/embed/playlist/72RH0j72MuBRTMDIpvFFjA?si=57976c1069ce412c" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </SpotifyContainer>
      <ClaseGratuita/> 
      </MainContainer>
      <Routes>
        <Route path="Instructores" element={<Instructores />} />
        <Route path="Clases" element={<Clases />} />
      </Routes>
    </div>
  );
}

export default Acerca;