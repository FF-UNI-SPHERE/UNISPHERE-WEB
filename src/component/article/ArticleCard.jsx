import React from 'react';
import styled from 'styled-components';

const ArticleCard = ({width, imgheight, image, title, date, reporter}) => (
    <CardWrapper $width={width}>
        <ImageDiv $height={imgheight} src={image} alt="NewsThumbnail" />
        <DescriptionWrapper>
            <TitleText>{title}</TitleText>
            <SubTextContainer>
                <SubText>{date}</SubText>
                <SubText>작성자 : {reporter}</SubText>
            </SubTextContainer>
        </DescriptionWrapper>
    </CardWrapper>
);

const CardWrapper = styled.div`
    width: ${({$width}) => $width};
    height: 80%;
    border: 1px solid #ddd;
    border-radius: 1vw;
    overflow: hidden;
    margin: 2vh 1vw;
    box-shadow: 0.2vw 0.2vh 0.4vw rgba(0,0,0,0.1);
    &:hover {
        cursor: pointer;
        transform: translateY(-0.5vh);
        transition: transform 0.2s ease-in-out;
        box-shadow: 0.2vw 0.2vh 0.4vw rgba(0,0,0,0.2);
    }
    &:active {
        cursor: pointer;
        transform: translateY(0.5vh);
        transition: transform 0.2s ease-in-out;
        box-shadow: 0.2vw 0.2vh 0.4vw rgba(0,0,0,0.2);
        &:active { opacity: 0.8; }
    }
`;

const ImageDiv = styled.div`
    width: 100%;
    height: ${({$height}) => $height};
    background-image: url(${({src}) => src});
    background-size: cover;        
    background-position: center;   
    background-repeat: no-repeat;
`;

const DescriptionWrapper = styled.div`
    padding: 1vw;
    white-space: pre-line;
`;

const TitleText = styled.pre`
    margin: 0;
    color: #333;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: -0.03125rem;
    white-space: pre-line;
`;

const SubTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
`;

const SubText = styled.p`
    color: #373737;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.875rem;
    letter-spacing: 0.03125rem;
    margin-top: 0.5rem;
`;

export default ArticleCard;
