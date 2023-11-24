import React from 'react';
import styled from 'styled-components';

function Avatar(props) {
  return (
    <AvatarPart style={{ marginLeft: props.marginLeft }}>
      <img src={props.src} alt='ch'/>
      <name>{props.name}</name>
    </AvatarPart>
  );
}

const AvatarPart = styled.div`
  align-items: center;
  width: 10vw;
  margin-top: 59.5vh;
  text-align: center;
  position: fixed;
  name {
    font-family: 'Godo', sans-serif;
    font-size: 22px;
  }
`;

export default Avatar;