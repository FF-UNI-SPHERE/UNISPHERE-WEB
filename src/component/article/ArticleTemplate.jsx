import React from "react";
import styled from 'styled-components';
import MenuBar from '../common/MenuBar';
import AlertBar from '../common/Alert';
import { TranslucentBox } from "../guide/GuideTemplate";
import { GrayBox } from "../guide/GrayNavBar";
import ArticleContents from "./ArticleContents";

function ArticleTemplate() {
    return (
    <>
        <MenuBar />
        <AlertBar />
        <TranslucentBox>
            <GrayBox>
                <h3>이달의 소식지</h3>
                <WriteArticleButton>내 소식 투고하기</WriteArticleButton>
            </GrayBox>
            <ArticleContents />
        </TranslucentBox>
    </>
    );
}

const WriteArticleButton = styled.button`
    position: absolute;
    margin-right: 3vw;
    right: 0;

    width: 15.625rem;
    height: 5rem;
    border-radius: 3.125rem;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 0;

    text-align: center;
    font-size: 1.6875rem;
    font-weight: 400;
    font-family: 'Godo', sans-serif;

    &:active {
        cursor: pointer;
        background: #ebebeb;
    }
    &:hover {
        cursor: pointer;
        background: #ebebeb;
    }
`;

export default ArticleTemplate;