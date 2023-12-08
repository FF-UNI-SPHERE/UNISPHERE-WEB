import styled from 'styled-components';
import React, { useRef, useEffect, useState } from "react";

function GrayNavBar({title, onNavClick, refs, getStyle}) {
    return (
        <GrayBox>
            <h3>{title}</h3>
            <NavButtonContainer>
                <NavButton onClick={()=>{onNavClick(refs.mainRef)}} style={getStyle(refs.mainRef)}>개인/단체 아바타</NavButton>
                <span>|</span>
                <NavButton onClick={()=>{onNavClick(refs.homePageRef)}} style={getStyle(refs.homePageRef)}>단체 홈페이지</NavButton>
                <span>|</span>
                <NavButton onClick={()=>{onNavClick(refs.articleRef)}} style={getStyle(refs.articleRef)}>이달의 소식지</NavButton>
                <span>|</span>
                <NavButton onClick={()=>{onNavClick(refs.plazaRef)}} style={getStyle(refs.plazaRef)}>광장</NavButton>
            </NavButtonContainer>
        </GrayBox>
    );
}

const GrayBox = styled.div`
    height: 8.2rem;
    top: 0%;
    position: sticky;
    z-index: 101;
    border-radius: 1rem 1rem 0 0;

    background-color: rgba(104, 104, 104, 0.70);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    align-items: center;

    h3 {
        color: #FFF;
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -0.375rem;
        font-family: 'Godo', sans-serif;
        margin-left: 3.37rem;
    }
`;

const NavButtonContainer = styled.div`
    position: absolute;
    margin-right: 3vw;
    right: 0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 40vw;

    span {
        font-size: 1.5625rem;
        font-weight: 100;
    }
`;

const NavButton = styled.button`
    color: #000;
    font-size: 1.56rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.156rem;

    display: inline-block;

    background-color: transparent;
    border: 0;
    &:hover {
        cursor: pointer;
    }
`;

export {GrayNavBar, GrayBox};