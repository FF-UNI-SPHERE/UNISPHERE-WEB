import React, { useState } from 'react';
import styled from 'styled-components';
import MenuBar from '../common/MenuBar.jsx';
import AlertBar from '../common/Alert.jsx';
import Avatar from '../common/Avatar.jsx';
import chRoot from '../resource/avatar_unisphere.png';
import logoRoot from '../resource/unisphere_logo.png';
import handiconRoot from '../resource/unisphere_logo_hand.png';

function IntroTemplate() {
  const [showFirstpage, setShowFirstpage] = useState(true);
  const [buttonOneZIndex, setButtonOneZIndex] = useState(2);  // 기본 버튼은 플랫폼 소개 버튼
  const [buttonTwoZIndex, setButtonTwoZIndex] = useState(0);

  return (
    <HomepagePosition>
      <MenuBar/>
      <AlertBar/>
      <LogoPart>
        <img src={logoRoot} alt="logo"/>
      </LogoPart>
      <ButtonOne 
        onClick={() => {
          setShowFirstpage(true);
          setButtonOneZIndex(2);
          setButtonTwoZIndex(0);
        }}
        style={{
          zIndex: buttonOneZIndex
        }}
      >
        플랫폼 소개
      </ButtonOne>
      <ButtonTwo 
        onClick={() => {
          setShowFirstpage(false);
          setButtonOneZIndex(0);
          setButtonTwoZIndex(2);
        }}
        style={{
          zIndex: buttonTwoZIndex
        }}
      >
        공지사항
      </ButtonTwo>
      {showFirstpage && (
        <WhiteBox>
          <BubblePart>
            <text>
              UniSphere 홈페이지에 <br/>
              방문한 걸 환영해 ~
            </text>
            <BubbleBubble></BubbleBubble>
          </BubblePart>
          <Avatar 
            name='UniSphere' 
            src={chRoot}
            width='130vw'
            marginLeft='8vw'
            marginTop='22vh'
          />
          <TextPart>
            <icon><img src={handiconRoot} width='30px' style={{marginRight: '10px'}}/></icon>
            <h1>UniSphere의 뜻은?</h1>
            <main>1. Unity + Sphere</main>
            <main>2. 국경을 넘는 우정과 협력의 첫 걸음</main>
          </TextPart>
          <TextPart>
            <icon><img src={handiconRoot} width='30px' style={{marginRight: '10px'}}/></icon>
            <h1>UniSphere 플랫폼의 목적은?</h1>
            <main>청년 단체들의 교류 활성화를 촉진시키고, 국제 개발 협력에 관련한 정보들을 취합하여 한 눈에 볼 수 있게 하는 웹 플랫폼 제공.</main>
          </TextPart>
        </WhiteBox>
      )}
      {!showFirstpage && (
        <WhiteBox>
          {/* 채워야 함 */}
        </WhiteBox>
      )}
    </HomepagePosition>
  );
}
  
  const HomepagePosition = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      position: relative;
  `;
  
  const WhiteBox = styled.div`
    width: 77.5vw;
    height: 58.1vh;
    background-color: white;
    opacity: 90%;
    border-radius: 30px 30px 0 0;
    margin: auto auto 0 auto; // 가운데 하단 정렬 
    position: relative;
    z-index: 0;
  `;
  
  const LogoPart = styled.div`
    /* margin: auto; */
    display: flex;;
    align-items: center;
    justify-content: center;

    position: relative;
    height: 20vh;
    img {
        width:50%;
        height: 15vh;
        object-position: center;
        object-fit: cover;
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
    position: absolute;
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
  
  const ButtonOne = styled.button`
    width: 8.5vw;
    height: 11vh;
    background: var(--button-bg-color, #FAFF00);
    opacity: 85%;
    border: none;
    border-radius: 20px 20px 0 0;
    position: absolute;
    z-index: 2; // 컴포넌트 상대적으로 배치
    top: 34vh;
    left: 17vw;
    font-family: 'Godo', sans-serif;
    font-size: 15px;
    box-shadow: 5px 5px 5px 0px gray;
  
    cursor: pointer;
    &:active,
    &:hover,
    &:focus {
      opacity: 100%;
      z-index: 2; // 버튼 위에 마우스 올리면 white box 위로 올라오게 설정
    }
    // 고도체
    @font-face {  
      font-family: 'Godo';
      font-style: normal;
      font-weight: 700;
      src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
    }
  `;
  
  const ButtonTwo = styled.button`
    width: 8.5vw;
    height: 11vh;
    background: var(--button-bg-color, #0029FF);
    opacity: 85%;
    border: none;
    border-radius: 20px 20px 0 0;
    position: absolute;
    z-index: 0; // 컴포넌트 상대적으로 배치
    top: 34vh;
    left: 26.5vw;
    font-family: 'Godo', sans-serif;
    font-size: 15px;
    color: white;
    box-shadow: 5px 5px 5px 0px gray;
  
    cursor: pointer;
    &:active,
    &:hover,
    &:focus {
      opacity: 100%;
      z-index: 2; // 버튼 위에 마우스 올리면 white box 위로 올라오게 설정
    }
  `;
  
  const TextPart = styled.div`
    width: 50vw;
    height: 23vh;
    border: none;
    position: relative;
    left: 26vw;
    top: 5vh;
  
    h1 {
      font-family: 'Malgun Gothic', sans-serif;
      font-weight: 700;
      font-size: 24px;
      margin-left: 36px;
      margin-top: 0;
    }
  
    main {
      font-family: 'Malgun Gothic', sans-serif;
      font-weight: 500;
      font-size: 18px;
      padding: 0 0 2.5vh 3vw;
    }
  
    icon {
      width: 30px;
      position: absolute;
    }
  `;

export default IntroTemplate;
