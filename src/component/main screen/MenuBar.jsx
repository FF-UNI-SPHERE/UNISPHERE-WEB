import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";

function MenuBar({}) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부

  return (
    <MenuButton
      onMouseOver={() => setIsMenuHovered(true)}
      onMouseOut={() => setIsMenuHovered(false)}
    >
      <FiMenu 
        size='40px'
        color={isMenuHovered ? 'white' : 'black'}
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
  &:hover {
    transition: 0.7s;
  }
`;

export default MenuBar;