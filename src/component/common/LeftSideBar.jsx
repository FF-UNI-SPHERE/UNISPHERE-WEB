import React, {useState} from 'react';
import styled from 'styled-components';
import unisphereHand from '../resource/unisphere_logo_hand.png';

function LeftSideBar({isOpen}) {
  const [isSubToggleOpen, setIsSubToggleOpen] = useState(false);  // 상세버튼 클릭 여부
  
  const toggleSubItem = () => {
    setIsSubToggleOpen(!isSubToggleOpen);
  };

  const moveToPage = (link) => {
    window.location.replace(
      import.meta.env.VITE_FE_HOST + `/${link}`,
    );
  };

  return (
    isOpen && (
      <SideBar>
        <SideBarContent>
            <SideBarItems onToggle={toggleSubItem} children="유니스피어" />
            {(isSubToggleOpen) && (
              <SubItemContents>
                <SubItemBtn>플랫폼 소개</SubItemBtn>
                <SubItemBtn onClick={()=>{moveToPage("guide")}}>이용 안내</SubItemBtn>
                <SubItemBtn>공지 사항</SubItemBtn>
              </SubItemContents> 
            )} 
            <SideBarItems onToggle={toggleSubItem} children="뉴스 레터" />
            {(isSubToggleOpen) && (
              <SubItemContents>
                <SubItemBtn onClick={()=>{moveToPage("article")}}>이달의 소식지</SubItemBtn>
                <SubItemBtn>소식지 투고</SubItemBtn>
                <SubItemBtn>광고 문의</SubItemBtn>
              </SubItemContents> 
            )}
            <SideBarItems children="기부 / 모금" />
            <SideBarItems children="단체 활동" />
            {(isSubToggleOpen) && (
              <SubItemContents>
                <SubItemBtn onClick={()=>{moveToPage("myhomepage")}}>단체 홈페이지</SubItemBtn>
                <SubItemBtn onClick={()=>{moveToPage("plaza")}}>광장</SubItemBtn>
                <SubItemBtn>단체룸</SubItemBtn>
              </SubItemContents> 
            )}
        </SideBarContent>
    </SideBar>
  ));
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
  width: ${props => props.isOpen ? '12.7rem' : '0'};
  height: ${props => props.isOpen ? '100vh' : '0'};
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.5s;

  z-index: 2000;
`;

const SideBarContent = styled.div`
  width: 12.7rem;
  height: 100vh;
  background: rgba(255, 255, 255, 0.50);
  display: flex;
  flex-direction: column;

  padding-top: 8vh;
  padding-left: 1.44rem;
`;

const SideBarItemBtn = styled.button`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

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
    margin-left: 1.25rem;
  }
  &:hover {
    color: #FFF;
  }
`;

const SubItemContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SubItemBtn = styled.button`
  width: 6.875rem;
  height: 3.125rem;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  margin-left: 3.37rem;
  color: #000;

  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #FFF;
  }
`;

export default LeftSideBar;
