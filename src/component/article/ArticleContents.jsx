import React from "react";
import styled from 'styled-components';
import { ContentsContainer } from "../guide/GuideTemplate";
import cardOcean from "../resource/card_ocean.png"

function ArticleContents() {
    return (
        <ContentsContainer>
            <CardNews 
                image={cardOcean}
                title="해안가에 밀려온 쓰레기들, 누구의 잘못일까?"
                date="2023/11/07"
                organization="KOICA"
            />
        </ContentsContainer>
    );
}

const CardNews = ({image, title, date, organization}) => (
    <CardWrapper>
        <Image src={image} alt="NewsThumbnail" />
        <DescriptionWrapper>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <p>주최자: {organization}</p>
        </DescriptionWrapper>
    </CardWrapper>
);

const CardWrapper = styled.div`
    width: 30vw;
    border: 1px solid #ddd;
    border-radius: 1vw;
    overflow: hidden;
    margin: 2vh 1vw;
    box-shadow: 0.2vw 0.2vh 0.4vw rgba(0,0,0,0.1);
`

const Image = styled.img`
    width: 100%;
    height: 20vh;
    object-fit: cover;
`;

const DescriptionWrapper = styled.div`
    padding: 2vh 2vw;
`;

const Title = styled.h3`
    margin: 0;
    color: #333;
    font-size: 1.4vh;
`

const Date = styled.p`
    margin: 1vh 0 0 0;
    color: #666;
    font-size: 1.2vh;
`;

export default ArticleContents;