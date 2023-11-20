import React from 'react';
import styled from 'styled-components';
import naverLogo from '../../resource/naverLogo.png';
import kakaoLogo from '../../resource/kakaoLogo.svg';
import googleLogo from '../../resource/googleLogo.svg';

import WhiteBox from './WhiteBox'

function LoginTemplate () {
    //추후 api 변경 시 같이 변경하기
    const login = ({socialType}) => {
        try {
            window.location.replace(
                import.meta.env.VITE_BE_HOST + `/api/auth/${socialType}/login`,
            );
        } catch (error) {
            console.error("유효하지 않은 URL입니다!", error);
        }
    };

    return (
        //align-items: center -> 적용이 안되는 문제로 우선 삭제
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <WhiteBox >
                <h1 className="title">로그인하기</h1>
                <h3>소셜 로그인으로 진행하세요</h3>
                <HorizontalLine position="top"/>
                <ButtonContainer >
                    <SocialLoginButton socialType="kakao" onClick={() => login('kakao')}>
                        <SocialButtonIcon src={kakaoLogo} alt="카카오 로고" className="social-icon"/>
                        카카오 로그인
                    </SocialLoginButton>
                    <SocialLoginButton socialType="naver" onClick={() => login('naver')}>
                        <SocialButtonIcon src={naverLogo} alt="네이버 로고" className="social-icon"/>
                        네이버 로그인
                    </SocialLoginButton>
                    <SocialLoginButton socialType="google" onClick={() => login('google')}>
                        <SocialButtonIcon src={googleLogo} alt="구글 로고" className="social-icon"/>
                        &nbsp; 구글 로그인
                    </SocialLoginButton>
                </ButtonContainer >
                <HorizontalLine position="bottom"/>
                <SignInButton >회원가입하기</SignInButton >
            </WhiteBox >
        </div>
    );
};

const LineStyled = styled.span `
    flex: 1;
    border-top: 1px solid var(--light-gray);
`;

const TextStyled = styled.span `
    padding: 0 35px;
    color: var(--light-gray);
    font-size: 22px;
    font-weight: 400;
    font-family: var(--main-font);
    letter-spacing: -2.5px;
`;

const LineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HorizontalLine = ({position}) => {
    return (
        <LineContainer>
            {position === 'top' && <LineStyled />}
            {position === 'bottom' && <LineStyled />}
            {position === 'bottom' && <TextStyled>또는</TextStyled>}
            {position === 'bottom' && <LineStyled />}
        </LineContainer>
    );
};

const ButtonContainer  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
`;

const SocialLoginButton = styled.button`
    display: flex;
	align-items: center;
	width: 360px;
	height: 56px;
	border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    &:active { opacity: 0.4; }
    &:hover { filter: brightness(95%); }

    outline: none;
    border: ${props => 
        props.socialType === 'google' ? '1px solid #D9D9D9' : 'none'};
    background-color: ${props =>
        props.socialType === 'naver' ? '#03c75a' :
        props.socialType === 'kakao' ? '#FEE500' : 
        props.socialType === 'google' ? '#FFF' : 'var(--white)'};
    color: ${props =>
        props.socialType === 'naver' ? '#FFF' :
        props.socialType === 'kakao' ? '#000' : 
        props.socialType === 'google' ? '#000' : 'var(--black)'};
`;

const SocialButtonIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 5%;
    margin-right: 27%;
`;

const SignInButton  = styled.button`
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 50px;
    margin-top: 5%;
    border-radius: 12px;
    border : 1px solid var(--light-gray);
    background-color: var(--white);
    font-size: 14px;
    font-weight: 700;
    &:active { opacity: 0.4; }
    &:hover { filter: brightness(95%); }
`;

export default LoginTemplate;

