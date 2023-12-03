import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import MenuBar from '../main screen/MenuBar';
import {imglist, GuideContents} from './GuideContents.jsx';
import GrayNavBar from "./GrayNavBar.jsx";

function GuideTemplate() {
    //4개 안내 섹션에 대한 각각의 ref 생성
    const mainRef = useRef(null);
    const homePageRef = useRef(null);
    const articleRef = useRef(null);
    const plazaRef = useRef(null);

    const [activeRef, setActiveRef] = useState(null);

    const scrollToContent = (contentRef) => {
        //contentRef가 null이 아니고, contentRef.current(참조하는 DOM 요소)가 null이 아닌지
        if (contentRef && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("작동하지 않습니다");
        }
    };

    useEffect(() => {
        scrollToContent(activeRef);
    }, [activeRef]);

    const detail = [
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다."
    ]
    
    return (
        <>
        <MenuBar />
        <TranslucentBox>
            {/* GrayNavBar 컴포넌트에 setActiveRef 함수를 prop으로 전달. onNavClick은 그냥 매개변수 이름. */}
            <GrayNavBar 
                onNavClick={setActiveRef}
                refs={{mainRef, homePageRef, articleRef, plazaRef}}
            />
            <ContentsContainer>
                <GuideContents detail={detail[0]} img={{ first: imglist[0][0], second: imglist[0][1]}} name="개인/단체 아바타" ref={mainRef}/>
                <GuideContents detail={detail[1]} img={{ first: imglist[1][0], second: imglist[1][1]}} name="단체 홈페이지" ref={homePageRef}/>
                <GuideContents detail={detail[2]} img={{ first: imglist[2][0], second: imglist[2][1]}} name="뉴스레터" ref={articleRef}/>
                <GuideContents detail={detail[3]} img={{ first: imglist[3][0], second: imglist[3][1]}} name="광장" ref={plazaRef}/>
            </ContentsContainer>
        </TranslucentBox>
        </>
    );
}

const TranslucentBox = styled.div`
    width: 90vw;
    height: 50rem;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    position: sticky;
    z-index: 100;
    
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.90);
    border-radius: 1rem;
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */

`;

const ContentsContainer = styled.div`
    overflow-y: auto;
    height: 40rem;
    width: 90%;
`;

export default GuideTemplate;