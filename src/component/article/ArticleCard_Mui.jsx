import React from 'react';
import styled from 'styled-components';

import { Card as MuiCard, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import cardOcean from "../resource/card_ocean.png"

const ArticleCard = ({height, image}) => {
    return (
    <StyledCard>
        <CardActionArea>
          <ChangeCardMedia
            component="img"
            height="31.5"
            image={cardOcean}
            alt="card image"
          />
          <CardContent>
            <MainTypography>해안가에 밀려온 쓰레기들,\n누구의 잘못일까?</MainTypography>
            <SubCardContent>
                <Typography variant="body2" color="text.secondary">2023/11/07</Typography>
                <Typography variant="body2" color="text.secondary">작성자: KOICA</Typography>
            </SubCardContent>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    );
};

const StyledCard = styled(MuiCard)`
    width: 24.49344rem;
    -bottom: 0;
`;

const ChangeCardMedia = styled(CardMedia)`
    height: 23.4rem;
`;

const SubCardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MainTypography = styled(Typography)`
    white-space: pre-line;
    font-size: 1.875rem;
    font-weight: 700;
    font-family: 'Segoe UI', sans-serif;
    white-space: pre-line;
`;

export default ArticleCard;
