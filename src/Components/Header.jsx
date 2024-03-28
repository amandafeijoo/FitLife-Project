import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
  font-size: 1.5em; 
  color: #333; 
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none; 

  &:hover {
    color:  rgba(236, 158, 158, 0.691); // Cambia el color al pasar el mouse
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 60%;
  gap: 15px;
`;

function Header() {
    const navigate = useNavigate();
  
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={() => navigate('/Acerca/Instructores')}>
          Instructores
        </Menu.Item>
        <Menu.Item key="2" onClick={() => navigate('/Acerca/Clases')}>
          Clases
        </Menu.Item>

      </Menu>
    );
  
    return (
      <StyledHeader>
        <h1>FitLife Gym</h1>
        <StyledNav>
          <StyledLink to="/Inicio">Inicio</StyledLink>
          <StyledLink to="/Acerca">Acerca</StyledLink>
<Dropdown overlay={menu}>
  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
     <DownOutlined />
  </a>
</Dropdown>
          <StyledLink to="/Precios">Precios</StyledLink>
          <StyledLink to="/InciarSesion">Inciar Sesión</StyledLink>
          <StyledLink to="/Contacto">Contacto</StyledLink>
        </StyledNav>
      </StyledHeader>
    );

}

export default Header;