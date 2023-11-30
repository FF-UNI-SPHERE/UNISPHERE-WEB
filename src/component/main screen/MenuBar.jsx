import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNavigationBar from './LNB.jsx';
import RightNavigationBar from './RNB.jsx';

function MenuBar({ EnterPrise }) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부

  return (
    <Menus>
      <LeftNavigationBar/>
      <RightNavigationBar EnterPrise={'KCOC'}/>
    </Menus>
  );
}

const Menus = styled.div`
  width: auto;
  height: 8vh;
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
`;

export default MenuBar;