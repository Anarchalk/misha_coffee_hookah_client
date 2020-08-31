import React, { Component } from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.jpg';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  // height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 10px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
    
      <Burger />
    </Nav>
  )
}

export default Navbar