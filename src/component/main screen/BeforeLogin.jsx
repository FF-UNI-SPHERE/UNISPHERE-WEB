import React from 'react';
import styled from 'styled-components';
import Button from './ButtonSet.jsx'
import Avatar from '../common/Avatar.jsx';
import logoRoot from '../resource/unisphere_logo.png';
import chRoot from '../resource/avatar_unisphere.png';

/* 사용자가 로그인하기 전 화면 배치 */
function BeforeLoginSet() {
  return (
    <MainScreenPosition>
      <LogoPart>
        <img src={logoRoot} alt="logo"/>
      </LogoPart>
      <ButtonPart>
        <Button children='로그인 / 회원가입'></Button>
        <Button children='이용 안내'></Button>
        <Button children='뉴스 레터'></Button>
      </ButtonPart>
      <BubblePart>
        <text>
          안녕하세요 유니스피어입니다 !<br/>
          저희 홈페이지에 오신 것을 환영합니다만 ?
        </text>
        <BubbleBubble></BubbleBubble>
      </BubblePart>
      <Avatar 
        name='UNISPHERE' 
        src={chRoot}
        marginLeft='45%'
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
  /* margin: auto; */
  margin-top: 13vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const ButtonPart = styled.div`
  margin-top: 8vh;
  margin-left: 2%;
  border-radius: 50px;
  position: relative;
`;

const BubblePart = styled.div`
  width: 190px;
  height: 50px;
  border: none;
  border-radius: var(--button-radius, 20px);
  background-color: var(--bubble-bg-color, #d9d9d9);
  margin-top: 50vh;
  margin-left: 46vw;
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

export default BeforeLoginSet;