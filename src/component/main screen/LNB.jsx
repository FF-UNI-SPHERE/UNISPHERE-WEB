import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";

function LeftNavigationBar({}) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부

  return (
    <LeftNavigationButton
      onMouseOver={() => setIsMenuHovered(true)}
      onMouseOut={() => setIsMenuHovered(false)}
    >
      <FiMenu 
        size='40px'
        color={ isMenuHovered ? 'white' : 'black' }
      />
    </LeftNavigationButton>
  );
}

const LeftNavigationButton = styled.button`
  width: 5vw;
  height: 8vh;
  background: none;
  border: none;
  position: relative;
  justify-content: flex-start;
  cursor: pointer;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

export default LeftNavigationBar;