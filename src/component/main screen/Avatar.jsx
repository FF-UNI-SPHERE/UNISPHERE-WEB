import React from 'react';
import styled from 'styled-components';

function Avatar(props) {
  return (
    <IsAvatar style={{ 
      marginLeft: props.marginLeft, 
      marginTop: props.marginTop, 
    }}>
      <img src={props.src} alt='ch'/>
      <name>{props.name}</name>
    </IsAvatar>
  );
}

const IsAvatar = styled.div`
  align-items: center;
  width: 10vw;
  text-align: center;
  position: fixed;
  name {
    align-content: center;
    font-family: 'Godo', sans-serif;
    font-size: 22px;
  }
`;

export default Avatar;