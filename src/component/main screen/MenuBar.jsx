import React from 'react';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";

function MenuBar({ isMenuHovered }) {
  return (
    <MenuButton>
      <FiMenu 
        size='40px' 
        color={isMenuHovered ? 'white' : 'black'}
        onMouseOver={({target})=>target.style.color="white"}
        onMouseOut={({target})=>target.style.color="black"}
      />
    </MenuButton>
  );
}

const MenuButton = styled.button`
  width: 5vw;
  height: 8vh;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
  }
`;

export default MenuBar;