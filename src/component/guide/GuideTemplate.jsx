import React from "react";
import styled from 'styled-components';

function GuideTemplate() {
    const detail = [
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다."
    ]

    return (
        <>
        {/* <Header /> */}
        {/* <TranslucentBox>
            <InnerTopBar />
                <InnerText />
                <InnerText />
                <InnerText />
                <InnerText />
        </TranslucentBox> */}
        </>
    );
};

function InnerTopBar() {
    return (
        <>
        <h3>이용안내</h3>
        <NavButton>개인/단체 아바타</NavButton>
        <NavButton>단체 홈페이지</NavButton>
        <NavButton>뉴스레터</NavButton>
        <NavButton>광장</NavButton>
        </>
    );
}

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

export default GuideTemplate;