import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import unisphereHand from '../resource/unisphere_logo_hand.png';

function LeftSideBar({isOpen}) {
  const [toggleStates, setToggleStates] = useState({});
  
  const toggleItem = (idx) => {
    setToggleStates(prevState => ({
      ...prevState,
      [idx]: !prevState[idx]
    }));
  };

  useEffect(() => {
    if(!isOpen) {
      setToggleStates(prevState => {
        const newState = {};
        for(const key in prevState) {
          newState[key] = false;
        }
        return newState;
      });
    }
  }, [isOpen]);

  const moveToPage = (link) => {
    if(link === "plaza") {
      window.location.href ="https://zep.us/play/87zbJV";
    }
    else {
      window.location.href = `/${link}`;
    }
  };

  return (
    <SideBar $isopen={isOpen}>
      <SideBarItems onToggle={() => toggleItem(1)} children="유니스피어" />
      {(toggleStates[1]) && (
        <SubItemContents>
          <SubItemBtn onClick={()=>{moveToPage("intro")}}>플랫폼 소개</SubItemBtn>
          <SubItemBtn onClick={()=>{moveToPage("guide")}}>이용 안내</SubItemBtn>
          <SubItemBtn>공지 사항</SubItemBtn>
        </SubItemContents> 
      )}
      <SideBarItems onToggle={() => toggleItem(2)} children="뉴스 레터" />
      {(toggleStates[2]) && (
        <SubItemContents>
          <SubItemBtn onClick={()=>{moveToPage("article")}}>이달의 소식지</SubItemBtn>
          <SubItemBtn>소식지 투고</SubItemBtn>
          <SubItemBtn>광고 문의</SubItemBtn>
        </SubItemContents> 
      )}
      <SideBarItems children="기부 / 모금" />
      <SideBarItems onToggle={() => toggleItem(3)} children="단체 활동" />
      {(toggleStates[3]) && (
        <SubItemContents>
          <SubItemBtn onClick={()=>{moveToPage("myhomepage")}}>단체 홈페이지</SubItemBtn>
          <SubItemBtn onClick={()=>{moveToPage("plaza")}}>소통의 광장</SubItemBtn>
          <SubItemBtn>모든 단체 보기</SubItemBtn>
        </SubItemContents> 
      )}
      <SideBarItems onToggle={() => {moveToPage(" ")}} children="메인 화면" />
    </SideBar>
  );
}

const SideBarItems = ({onToggle, children}) => {
  return (
    <SideBarItemBtn onClick={onToggle}>
      <img src={unisphereHand} alt="UniSphereHand" />
      <h3>{children}</h3>
    </SideBarItemBtn>
  );
};

const SideBar = styled.div`
  width: 12.7rem;
  padding-top: 8vh;
  height: 92vh;
  position: absolute;
  left: 0;
  top: 0;

  background: rgba(255, 255, 255, 0.50);
  display: flex;
  flex-direction: column;

  transform: ${({$isopen}) => $isopen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 2000;
`;

const SideBarItemBtn = styled.button`
  width: 100%;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.44rem;

  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 1.5625rem;
    height: 1.5625rem;
  }
  h3 {
    color: #000;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    margin-left: 0.7rem;
    margin-top: 1.15rem;
  }
  &:hover {
    color: #FFF;
  }
`;

const SubItemContents = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  flex-direction: column;
`;

const SubItemBtn = styled.button`
  width: 6.875rem;
  height: 1.8rem;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  margin-left: 3.37rem;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #FFF;
  }
`;

export default LeftSideBar;
