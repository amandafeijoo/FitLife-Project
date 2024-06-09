import React from "react";
import styled from 'styled-components';
import SocialMediaLogos from './SocialMediaLogos';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: rgba(251, 250, 249, 0.691);
    flex-direction: row;
    font-size: 1em;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;


    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 576px) {
        flex-direction: column;
    }
    @media (max-width: 320px) {
        flex-direction: column;
    }
    @media (max-width: 280px) {
        flex-direction: column;
    }
    @media (max-width: 240px) {
        flex-direction: column;
    }
    @media (max-width: 200px) {
        flex-direction: column;
    }
    @media (max-width: 150px) {
        flex-direction: column;
    }
    @media (max-width: 100px) {
        flex-direction: column;
    }

`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin-top: 0; // Elimina el margen superior
        margin-bottom: 0.5em; // Ajusta este valor según tus necesidades
    }

    p {
        margin-top: 0; // Elimina el margen superior
    }
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
                <SocialMediaLogos /> {/* los iconos aquí */}  
            <p>© 2024 FitLife Gym</p>
        </FooterContainer>

    
    );
}

export default Footer;