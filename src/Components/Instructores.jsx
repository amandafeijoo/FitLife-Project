import React from "react";
import styled from 'styled-components';
import { Card } from 'antd';




const cards = [
    { src: 'url1', alt: 'alt text 1' },
    { src: 'url2', alt: 'alt text 2' },
    { src: 'url3', alt: 'alt text 3' },
    { src: 'url4', alt: 'alt text 4' },
    { src: 'url5', alt: 'alt text 5' },
    { src: 'url6', alt: 'alt text 6' },
  ];

const CardGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
`;


  function Instructores() {
    return (
      <section>
        <h2>Instructores</h2>
        <p>¡Bienvenido a FitLife Gym!</p>
        <div className="card-grid">
          {cards.map((card, index) => (
            <Card key={index} bordered={false}>
              <img src={card.src} alt={card.alt} />
            </Card>
          ))}
        </div>
      </section>
    );
  }

    export default Instructores;