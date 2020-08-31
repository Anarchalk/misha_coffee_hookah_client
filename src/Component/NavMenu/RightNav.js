import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  text-transform: uppercase;
  flex-flow: row nowrap;
  align-items: flex-start;
  li {
    padding: 10px 20px;
  }
  @media (max-width: 699px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -15px;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #212b36;
      font-weight: normal;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>
      <li>Coffees</li>
      <li>Menu</li>
      <li>Hookah</li>
      <li>Contact</li>
    </Ul>
  )
}

export default RightNav