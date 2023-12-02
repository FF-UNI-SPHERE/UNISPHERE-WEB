import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.jsx';
import logoRoot from '../resource/unisphere_logo.png';
import ch1Root from '../resource/avatar_koica.png';
import ch2Root from '../resource/avatar_unisphere.png';
import ch3Root from '../resource/avatar_individual.png';
import MenuBar from './MenuBar.jsx';
import AlertBar from './Alert.jsx';

/* 사용자가 로그인한 후 화면 배치 */
function AfterLoginSet() {
  return (
    <MainScreenPosition>
      <MenuBar/>
      <AlertBar/>
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

export default AfterLoginSet;