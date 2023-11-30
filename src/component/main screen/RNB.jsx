import React, { useState } from 'react';
import styled from 'styled-components';

function RightNavigationBar({ EnterPrise }) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부

  return (
    <Menus>
      <Logout>로그아웃</Logout>
      <Bar>|</Bar>
      <Plaza>소통의 광장</Plaza>
      <Bar>|</Bar>
      <EnterprisePage>{EnterPrise} 홈페이지</EnterprisePage>
    </Menus>
  );
}

const Menus = styled.div`
  width: 31vw;
  height: 4vh;
  background: white;
  opacity: 50%;
  border: none;
  border-radius: 50px;
  margin: auto 1vw auto auto;
  box-shadow: 5px 5px 5px 0px gray;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Bar = styled.div`
  width: 0.5vw;
  height: 3vh;
  background: none;
  border: none;
  margin: 0.4vw;
`;

const Logout = styled.button`
  width: 9vw;
  height: 3vh;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Godo', sans-serif;
  font-size: 13px;
  text-decoration: underline;
  margin: 0.4vw 0 0.4vw 0;
  &:active,
  &:hover {
    transition: 0.7s;
  }
  // 고도체
  @font-face {  
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }
`;

const Plaza = styled.button`
  width: 9vw;
  height: 3vh;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Godo', sans-serif;
  font-size: 13px;
  text-decoration: underline;
  margin: 0.4vw;
  &:active,
  &:hover {
    transition: 0.7s;
  }
  // 고도체
  @font-face {  
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }
`;

const EnterprisePage = styled.button`
  width: 9vw;
  height: 3vh;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Godo', sans-serif;
  font-size: 13px;
  text-decoration: underline;
  margin: 0.4vw;
  &:active,
  &:hover {
    transition: 0.7s;
  }
  // 고도체
  @font-face {  
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }
`;

export default RightNavigationBar;