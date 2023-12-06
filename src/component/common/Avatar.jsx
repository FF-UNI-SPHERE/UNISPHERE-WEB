import React from 'react';
import styled from 'styled-components';

function Avatar(props) {
  return (
    <IsAvatar style={{ 
      marginLeft: props.marginLeft, 
      marginTop: props.marginTop, 
    }}>
      <img src={props.src} width={props.width} alt='ch'/>
      <name>{props.name}</name>
    </IsAvatar>
  );
}

const IsAvatar = styled.div`
  align-items: center;
  width: 10vw;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  // 캐릭터의 이름
  name {
    text-align: center;
    align-content: center;
    font-family: 'Godo', sans-serif;
    font-weight: 700;
    font-size: 22px;
  }
`;

export default Avatar;