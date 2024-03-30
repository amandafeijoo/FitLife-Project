import React from "react";
import styled from 'styled-components';
import SocialMediaLogos from './SocialMediaLogos';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: rgba(244, 242, 241, 0.691);
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
                <SocialMediaLogos /> {/* Coloca los iconos aquí */}  
            <p>© 2024 FitLife Gym</p>
        </FooterContainer>

    
    );
}

export default Footer;