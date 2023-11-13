import React from 'react';
import styled from 'styled-components';

//추후 api 변경 시 같이 변경하기
const login = (socialType) => {
    window.location.replace(
        import.meta.env.VITE_BE_HOST + `/api/auth/${socialType}/login`,
    );
};

const LoginTemplate = () => {
    return (
        <WhiteBoxStyled>
            <h1 className="title">로그인하기</h1>
            <h3>소셜 로그인으로 진행하세요</h3>
            <HorizontalLine position="top"/>
            <ButtonContainerStyled>
                {/* <LoginButtonStyled className="kakao" onClick={login(kakao)}>
                    카카오 로그인
                </LoginButtonStyled>
                <LoginButtonStyled className="naver" onClick={login(naver)}>
                    네이버 로그인
                </LoginButtonStyled>
                <LoginButtonStyled className="google" onClick={login(google)}>
                    구글 로그인
                </LoginButtonStyled> */}
            </ButtonContainerStyled>
            <HorizontalLine position="bottom"/>
            <SignInButtonStyled>회원가입하기</SignInButtonStyled>
        </WhiteBoxStyled>
    );
};

const WhiteBoxStyled = styled.div`
    margin: 7% 7% 0% 7%;
    padding: 5%;
    align-items: left;
    border-radius: 30px;
    background-color: var(--white);
    h1 {
        font-family: var(--main-font);
        font-size: 40px;
        letter-spacing: -4px;
        margin-bottom: 0;
    }
    h3 {
        font-family: var(--main-font);
        font-size: 20px;
        font-weight: 400;
        letter-spacing: -2px;
        margin-top: 10px;
        margin-bottom: 37px;
    }
`;

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

const ButtonContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
`;

const LoginButtonStyled = styled.div`
    /* 여기 아침에 수정하기 */
`;

const SignInButtonStyled = styled.div`
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
`;

export default LoginTemplate;

