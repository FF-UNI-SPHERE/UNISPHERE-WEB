import React, { useState } from 'react';
import styled from 'styled-components';
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

// 전 페이지로 돌아갈 수 있는 버튼이 있는 상단 바
function BackBar() {
  return (
    <Menus>
      <LeftBackBar/>
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
  margin-right: auto;
  margin-top: 1vh;
`;

function LeftBackBar({}) {
  const [isBackHovered, setIsMenuHovered] = useState(false);  // 버튼 hover 여부
  const navigate = useNavigate();

  const isBackClick = () => {
    navigate(-1); // 바로 이전 페이지로 가기
  };

  return (
    <BackButton
      onMouseOver={() => setIsMenuHovered(true)}
      onMouseOut={() => setIsMenuHovered(false)}
      onClick={isBackClick}
    >
      <GoChevronLeft
          size='40px'
          color={ isBackHovered ? 'white' : 'black' }
      />
    </BackButton>
  );
}

const BackButton = styled.button`
  width: 5vw;
  height: 8vh;
  background: none;
  border: none;
  position: relative;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 3000;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

export default BackBar;