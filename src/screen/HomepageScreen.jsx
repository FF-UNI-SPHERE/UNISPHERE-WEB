import React from 'react';
import styled from 'styled-components';
import MenuBar from '../component/common/MenuBar.jsx';
import AlertBar from '../component/common/Alert.jsx';
import Avatar from '../component/common/Avatar.jsx';
import chRoot from '../component/resource/avatar_koica.png';
import logoRoot from '../component/resource/koica_logo.png';

function HomepageScreen() {
  return (
    <HomepagePosition>
      <MenuBar/>
      <AlertBar/>
      <LogoPart>
        <img src={logoRoot} width='130vw' alt="logo"/>
      </LogoPart>
      <WhiteBox>
        <BubblePart>
          <text>
            KOICA 홈페이지에 <br/>
            방문한 걸 환영해 ~
          </text>
          <BubbleBubble></BubbleBubble>
        </BubblePart>
        <Avatar 
          name='KOICA' 
          src={chRoot}
          width='130vw'
          marginLeft='8vw'
          marginTop='22vh'
        />
      </WhiteBox>
    </HomepagePosition>
  );
}

const HomepagePosition = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

const WhiteBox = styled.div`
  width: 77.5vw;
  height: 58.1vh;
  background-color: white;
  opacity: 90%;
  border-radius: 30px 30px 0 0;
  margin: auto auto 0 auto; // 가운데 정렬
`;

const LogoPart = styled.div`
  width: 13vw;
  height: 13vw;
  background-color: white;
  border-radius: 100px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  img {
    margin: 0 auto 0 auto;
  }
`;

const BubblePart = styled.div`
  width: 140px;
  height: 50px;
  border: none;
  border-radius: var(--button-radius, 20px);
  background-color: var(--bubble-bg-color, #d9d9d9);
  margin-top: 11vh;
  margin-left: 10vw;
  padding: 3px 10px 3px 10px;
  box-shadow: 4px 4px 4px 0px gray;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: center;
  position: fixed;
  text {
    font-family: 'Godo', sans-serif;
    font-size: 10px;
  }
`;

const BubbleBubble = styled.div`
  position: absolute;
  border-style: solid;
  border-width: 22px 14px 0;
  border-color: #D9D9D9 transparent;
  display: block;
  width: 0;
  z-index: 1;
  bottom: -22px;
  left: 29px;
`;

// const TextPart = styled.div`

// `;

export default HomepageScreen;