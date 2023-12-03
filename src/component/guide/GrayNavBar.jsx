import styled from 'styled-components';
import React from 'react';
import scrollToContent from './GuideTemplate';

//회색 바 컴포넌트
function GrayNavBar({scrollToContent}) {
    return (
        <GrayBox>
            <h3>이용안내</h3>
            <NavButtonContainer>
                <NavButton onClick={()=>{scrollToContent(1)}}>개인/단체 아바타</NavButton>
                <NavButton onClick={()=>{scrollToContent(2)}}>단체 홈페이지</NavButton>
                <NavButton onClick={()=>{scrollToContent(3)}}>뉴스레터</NavButton>
                <NavButton onClick={()=>{scrollToContent(4)}}>광장</NavButton>
            </NavButtonContainer>
        </GrayBox>
    );
}

const GrayBox = styled.div`
    width: 100%;
    height: 10vh;
    fill: rgba(104, 104, 104, 0.70);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const NavButtonContainer = styled.div`
    
`;

const NavButton = styled.button`
    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.25rem;
`;

export default GrayNavBar;