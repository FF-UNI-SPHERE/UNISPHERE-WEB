import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.jsx';
import logoRoot from '../resource/unisphere_logo.png';
import ch1Root from '../resource/avatar_koica.png';
import ch2Root from '../resource/avatar_unisphere.png';
import ch3Root from '../resource/avatar_individual.png';

/* 사용자가 로그인한 후 화면 배치 */
function AfterLoginSet() {
  return (
    <MainScreenPosition>
      <LogoPart>
        <img src={logoRoot} alt="logo"/>
      </LogoPart>
      <Avatar 
        name='KOICA' 
        src={ch1Root}
        marginLeft='14.3%'
      />
      <Avatar 
        name='UNISPHERE' 
        src={ch2Root}
        marginLeft='45%'
      />
      <Avatar 
        name='Jisoo Jeong' 
        src={ch3Root}
        marginLeft='71.3%'
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
  margin: auto;
  position: relative;
`;

export default AfterLoginSet;