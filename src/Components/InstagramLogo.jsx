import React from "react";
import styled from 'styled-components';

const InstagramLogoImg = styled.img`
  width: 50px; 
  height: 50px;
    margin: 10px;
    transition: transform 0.5s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 576px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 320px) {
        width: 50px;
        height: 50px;
    }

    
`;

const InstagramLogo = () => {
    return (
        <div>
            <InstagramLogoImg src="public/instagram.png" alt="Instagram Logo"  />
        </div>
    );
}

export default InstagramLogo;