import styled from 'styled-components';
import React, { useState } from 'react';


const StyledH2 = styled.h2` 
    font-size: 3em;
    text-align: center;
    color: #ebedf1;
    margin: 20px;
    padding: 10px;
`;

const StyledP = styled.p`
    font-size: 1.3em;
    text-align: center;
    color: #1d1d1e;
`;

const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  flex: 1;
    padding: 20px;
    margin: 20px;
    border: 3px solid #3cea65;
`;

const RightColumn = styled.div`
  flex: 1;
    padding: 20px;
    margin: 20px;
`;

const StyledMap = styled.iframe`
    width: 100%;
    height: 100%;
border-radius: 10px;
box-shadow: 5px 5px 5px #333;
transition: transform 0.5s;

cursor: pointer;
&:hover {
  transform: scale(1.1);
}
@media (max-width: 768px) {
    width: 100%;
    }
@media (max-width: 576px) {
    width: 100%;
    }
@media (max-width: 320px) {
    width: 100%;
    }

`;

const StyledTextarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
`;


const FormContainer = styled.div`
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
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 20px;
  color: #e1f5e6;

`;

const Form = styled.form`
   max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(229, 226, 226, 0.8); // Cambia el último valor para ajustar la transparencia


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

function Contacto() {
    const [message, setMessage] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  setMessage("Gracias por ponerte en contacto con nuestro equipo de FitLife. Nos pondremos en contacto contigo lo antes posible.");
}

  return (
    <ContactSection>
     <LeftColumn>
        <StyledH2>CONTACTO</StyledH2>
        <FormContainer>
            <Form onSubmit={handleSubmit}>
    <StyledLabel>
      Nombre:
      <StyledInput type="text" name="name" required />
    </StyledLabel>
    <StyledLabel>
      Correo Electrónico:
      <StyledInput type="email" name="email" required />
    </StyledLabel>
    <StyledLabel>
      Teléfono Móvil:
      <StyledInput type="text" name="phone" pattern="\d{9}" title="Por favor, introduce un número de teléfono de 9 dígitos" />
      <StyledSelect name="countryCode">
    <option value="+34" selected> 🇪🇸 +34</option>
    <option value="+33">🇫🇷 +33</option>
    <option value="+39">🇮🇹 +39</option>
    <option value="+47">🇳🇴 +47</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+49">🇩🇪 +49</option>
    <option value="+51">🇵🇪 +51</option>
    </StyledSelect>
    </StyledLabel>
       
    <StyledLabel>
      Tipo de Consulta:
      <StyledSelect name="queryType">
        <option value="elige una opción" selected>Elige una opción</option>
        <option value="cuotas">Cuotas</option>
        <option value="Clase gratuita">Clase Gratuita</option>
        <option value="baja">Baja</option>
        <option value="incidencias">Incidencias</option>
        <option value="cambio de cuenta bancaria">Cambio de cuenta bancaria</option>
      </StyledSelect>
    </StyledLabel>
    <StyledLabel>
      Mensaje:
      <StyledTextarea name="message"></StyledTextarea>
    </StyledLabel>
    <StyledInput type="submit" value="Enviar" />
  </Form>
  {message && <p>{message}</p>}
</FormContainer>
</LeftColumn>
      
      <RightColumn>
        <StyledMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.681505727711!2d2.185046315424378!3d41.40078997926413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fc23bb948d%3A0xa0f5c2ca741c49b4!2sCarrer%20de%20Lepant%2C%20150%2C%2008013%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1638487251234!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </RightColumn>

    </ContactSection>
  );
}

export default Contacto;