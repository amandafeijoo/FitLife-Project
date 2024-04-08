import styled from 'styled-components';
import { FaInstagram, FaFacebook,FaSpotify } from 'react-icons/fa';

// Componente de estilo para los iconos
const StyledIcon = styled.a`
  color: #000; 
  margin: 0 10px; // Añade margen alrededor de los iconos
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0077b6; 
  }
  @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);

    }
`;
const SocialMediaLogos = () => {
  return (
    <div>
      <StyledIcon href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} /> {/* Icono de Instagram */}
      </StyledIcon>
      <StyledIcon href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} /> {/* Icono de Facebook */}
      </StyledIcon>
      <StyledIcon href="https://www.spotify.com/your_spotify_username" target="_blank" rel="noopener noreferrer">
        <FaSpotify size={30} /> {/* Icono de Spotify */}
      </StyledIcon>
    </div>
  );
}

export default SocialMediaLogos;