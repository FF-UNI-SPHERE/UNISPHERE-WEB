import React from "react";
import styled from 'styled-components';
// import { ContentsContainer } from "../guide/GuideTemplate";
import cardOcean from "../resource/card_ocean.jpg"
import cardHomeless from "../resource/card_homeless.jpg"
import cardLight from "../resource/card_light.png"
import ArticleCard from "./ArticleCard";

function ArticleContents() {
    const oceanlink = "https://www.ohmynews.com/NWS_Web/Series/series_premium_pg.aspx?CNTN_CD=A0002846891";
    return (
        <CardsContainer>
            <ArticleCard
                width="50vw"
                imgheight="36vh"
                image={cardOcean}
                title="태평양의 위험한 섬, 없애지 않으면 인류 위기"
                date="2023/11/07"
                reporter="KOICA"
                // ref={oceanlink}
            />
            <SubCardsContainer>
                <ArticleCard 
                    width="35vw"
                    imgheight="12vh"
                    image={cardHomeless}
                    title="길거리로 떠밀리는 청소년들"
                    date="2023/08/20"
                    reporter="OOO"
                />
                <ArticleCard
                    width="35vw"
                    imgheight="12vh"
                    image={cardLight}
                    title="화려한 도심의 불빛과 빛 공해에 대하여"
                    date="2023/10/17"
                    reporter="XXX"
                />
            </SubCardsContainer>
        </CardsContainer>
    );
}

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1vh;
    align-items: center;
`;

const SubCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 55vh;
`;

export default ArticleContents;