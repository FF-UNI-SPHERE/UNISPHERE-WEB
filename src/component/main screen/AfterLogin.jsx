import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.jsx';
import logoRoot from '../resource/unisphere_logo.png';
import ch1Root from '../resource/avatar_koica.png';
import ch2Root from '../resource/avatar_unisphere.png';
import ch3Root from '../resource/avatar_individual.png';
import { FiMenu } from "react-icons/fi";

/* 사용자가 로그인한 후 화면 배치 */
function AfterLoginSet() {
  let isMenuHovered = false;  // 메뉴바 호버 여부

  return (
    <MainScreenPosition>
      <MenuBar isHovered={isMenuHovered}><FiMenu size='40px' color={isMenuHovered ? 'white' : 'black'}/></MenuBar>
      <LogoPart>
        <img src={logoRoot} alt="logo"/>
      </LogoPart>
      <Avatar 
        name='KOICA' 
        src={ch1Root}
        marginLeft='14.3%'
        marginTop='61vh'
      />
      <Avatar 
        name='UNISPHERE' 
        src={ch2Root}
        marginLeft='45%'
        marginTop='59.5vh'
      />
      <Avatar 
        name='Jisoo' 
        src={ch3Root}
        marginLeft='71.3%'
        marginTop='59.5vh'
      />
    </MainScreenPosition>
  );
}

const MainScreenPosition = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const LogoPart = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const MenuBar = styled.button`
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

export default AfterLoginSet;