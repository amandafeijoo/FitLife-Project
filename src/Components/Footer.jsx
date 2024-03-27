import React from "react";
import styled from 'styled-components';
import InstagramLogo from "./InstagramLogo.jsx"; // Replace "InstagramLogo" with "instagramLogo" to match the actual file name

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: rgba(246, 169, 76, 0.691);
    font-family: 'monospace';
    flex-direction: row;
    font-size: 1em;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 576px) {
        flex-direction: column;
    }

`;

const FooterSection = styled.div`
  // Aquí puedes agregar estilos para cada sección del footer
`;

const SocialMediaLogo = styled.img`
  width: 30px; // Puedes ajustar esto para cambiar el tamaño del logo
  margin: 10px;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterSection>
                <h2>Ubicación</h2>
                <p> Carrer de Lepant, 150,
                    <br />
                     08013, Barcelona, España
                   </p>
            </FooterSection>
            <FooterSection>
                <h2>Contacto</h2>
                <p>Email: info@fitlife.com</p>
                <p>Teléfono: 123-456-7890</p>
            </FooterSection>
            <FooterSection>
                <h2>Otras Informaciones</h2>
                <p>Horario de apertura: 6:00 - 22:00</p>
            </FooterSection>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramLogo /> {/* Aquí está tu logo de Instagram */}
            </a>        
            <p>© 2024 FitLife Gym</p>
        </FooterContainer>

    
    );
}

export default Footer;