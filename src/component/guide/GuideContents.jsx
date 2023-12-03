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
        <div ref={ref}>
            <h4>{name}</h4>
            <h5>{detail}</h5>
            <div>
                <GuideImage src={img.first} alt="First"/>
                { img.second === null ? null : <GuideImage src={img.second} alt="Second"/>}
            </div>
        </div>
    );
});

const GuideImage = styled.img`
    
`;

export {imglist, GuideContents};