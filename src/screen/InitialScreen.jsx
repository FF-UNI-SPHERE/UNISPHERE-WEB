import React from 'react';
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from '../component/main screen/ButtonSet.jsx'
import logoRoot from "../resource/unisphere_logo.png";
import chRoot from "../resource/avatar_unisphere.png";

function MainScreen() {
    return (
        <MainScreenPosition>
            <LogoPart style={{ height: '15.6%' }}>
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
            <AvatarPart>
                <img  src={chRoot} alt="ch"/>
                <name>UNISPHERE</name>
            </AvatarPart>
        </MainScreenPosition>
    );
}

const MainScreenPosition = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoPart = styled.div`
    padding: 5% 23% 0% 23%;
    position: relative;
`;

const ButtonPart = styled.div`
    width: 6.048%;
    margin-top: 2%;
    margin-left: 2%;
    border-radius: 50px;
    position: relative;
`;

// 로그인해서 아바타가 3개가 생길 경우, 컴포넌트로 생성해도 될 듯 ?
const AvatarPart = styled.div`
    display: 'flex'; 
    align-items: center;
    width: 10%;
    margin-top: 33%;
    margin-left: 45%;
    text-align: center;
    position: fixed;
    name {
        font-family: 'Godo', sans-serif;
        font-size: 22px;
    }
`;

const BubblePart = styled.div`
    width: 190px;
    height: 50px;
    border: none;
    border-radius: var(--button-radius, 20px);
    background-color: var(--bubble-bg-color, #d9d9d9);
    margin-top: 29%;
    margin-left: 45%;
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
    content: '';
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

// const navigate = useNavigate();
// const navigateToLogin = () => {
//     navigate("/login");
// };

export default MainScreen;