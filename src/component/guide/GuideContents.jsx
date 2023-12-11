import avatar1 from '../resource/guide_avatar1.png';
import homePage1 from '../resource/guide_homePage1.png';
import homePage2 from '../resource/guide_homePage2.png';
import article1 from '../resource/guide_article1.png';
import plaza1 from '../resource/guide_plaza1.png';
import plaza2 from '../resource/guide_plaza2.png';

import React, {useRef, forwardRef} from 'react';
import styled from 'styled-components';

const imglist = [
    [avatar1, null],
    [homePage1, homePage2],
    [article1, null],
    [plaza1, plaza2]
];

const GuideContents = forwardRef(({detail, img, name}, ref) => {
    return (
        <ContentBox ref={ref}>
            <h4>{name}</h4>
            <pre>{detail}</pre>
            <div style={{ height: 'auto', marginBottom: '5vh' }} >
                <GuideImage src={img.first} alt="First"/>
                { img.second === null ? null : <GuideImage src={img.second} alt="Second"/>}
            </div>
        </ContentBox>
    );
});

const ContentBox = styled.div`
    text-align: left;
    height: auto;
    margin-top: 2vh;
    margin-bottom: 2vh;
    h4 {
        margin-top:0;
        color: #000;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.225rem;
        font-family: 'Godo', sans-serif;
    }
    pre {
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
    }
`;

const GuideImage = styled.img`
    width: 32.3rem;
    height: 21.1rem;
    margin-right: 2vw;
`;

export {imglist, GuideContents};

