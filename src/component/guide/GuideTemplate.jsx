import React from "react";
import styled from 'styled-components';
import MenuBar from '../main screen/MenuBar';

function GuideTemplate() {
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
            <GrayTopBar />
                <InnerText />
                <InnerText />
                <InnerText />
                <InnerText />
        </TranslucentBox>
        </>
    );
};

function InnerText() {
    return (
        <>
        <h4>단체 홈페이지</h4>
        <h5>{detail[0]}</h5>
        {/* <GuideImage src={} alt="단체홈페이지"/>
        <GuideImage src={} alt="단체홈페이지"/> */}
        </>
    );
}

const TranslucentBox = styled.div`
    width: 90vw;
    height: 80vh;
    bottom: 0;
    fill: rgba(255, 255, 255, 0.90);
`;

const GrayBox = styled.div`
    width: 100%;
    height: 10vh;
    fill: rgba(104, 104, 104, 0.70);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default GuideTemplate;