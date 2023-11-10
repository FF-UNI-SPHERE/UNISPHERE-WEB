import React from 'react';
import styled from 'styled-components';
import logoImage from '../resource/unisphere_logo.png';  // 로고 이미지

function MainLogo() {
    return (
        <UniLogo/>
    );
}

const UniLogo = styled.img`
    src: url(${logoImage});
`;

export default MainLogo;