import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import MenuBar from '../main screen/MenuBar';
import AlertBar from '../main screen/Alert';
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

    const getButtonStyle = (ref) => ({
        color: ref === activeRef ? 'white' : 'initial'
    });

    useEffect(() => {
        scrollToContent(activeRef);
    }, [activeRef]);

    const detail = [
        "회원은 나만의 아바타를 설정할 수 있고, 단체 관리자는 단체 아바타를 설정할 수 있어요.\n메인 화면에서 내 아바타, 내가 속한 단체의 아바타, 유니스피어 아바타를 한눈에 볼 수 있어요.\n나만의 아바타로 여러분의 개성을 보여주세요!",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있어요.\n단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있어요. 단체의 성격이 잘 드러나도록 여러분의 홈페이지를 꾸며주세요!",
        "이달의 소식지에서는 회원과 단체 모두 소식지를 투고할 수 있어요.\n공유하고 싶은 글을 올려 모두에게 전해주세요!",
        "광장은 특정 날짜와 시간마다 열리고, 메타버스 상에서 다양한 사람들을 만나볼 수 있어요.\n단체룸은 자신이 속하지 않아도 구경할 수 있어요.\n단체룸이나 광장에서 여러 사람과 소통해보세요!"
    ]
    
    return (
        <>
        <MenuBar />
        <AlertBar />
        <TranslucentBox>
            {/* GrayNavBar 컴포넌트에 setActiveRef 함수를 prop으로 전달. onNavClick은 그냥 매개변수 이름. */}
            <GrayNavBar 
                onNavClick={setActiveRef}
                refs={{mainRef, homePageRef, articleRef, plazaRef}}
                getStyle={getButtonStyle}
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
    height: 82vh;

    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    z-index: 100;

    background-color: rgba(255, 255, 255, 0.90);
    border-radius: 1rem 1rem 0 0;
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */

`;

const ContentsContainer = styled.div`
    overflow-y: auto;
    height: 40rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

export default GuideTemplate;