import styled from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

// Componente de estilo para los iconos
const StyledIcon = styled.a`
  color: #000; // Cambia el color aquí
  margin: 0 10px; // Añade margen alrededor de los iconos
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0077b6; // Cambia el color en hover aquí
  }
`;

// Componente de los iconos de Instagram y Facebook
const SocialMediaLogos = () => {
  return (
    <div>
      <StyledIcon href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} /> {/* Icono de Instagram */}
      </StyledIcon>
      <StyledIcon href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} /> {/* Icono de Facebook */}
      </StyledIcon>
    </div>
  );
}

export default SocialMediaLogos;