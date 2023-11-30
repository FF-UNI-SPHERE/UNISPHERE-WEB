import React, { useState } from 'react';
import styled from 'styled-components';
import { HiBell } from "react-icons/hi2";
import { HiBellAlert } from "react-icons/hi2";
import { TbMessage } from "react-icons/tb";

function AlertBar() {
  const [isAlertExist, setIsAlertExist] = useState(false);  // 알람 존재 여부에 따라 아이콘 변경
  const [isAlertHovered, setIsAlertHovered] = useState(false);  // 알림 버튼 hover 여부
  const [isMessageHovered, setIsMessageHovered] = useState(false);  // 채팅 버튼 hover 여부

  if (!isAlertExist) {  // 알람이 존재하지 않으면
    return (
      <AlertPosition>
        <AlertIcon
          onMouseOver={() => setIsAlertHovered(true)}
          onMouseOut={() => setIsAlertHovered(false)}
        >
          <HiBell
            size='4vh'
            color={ isAlertHovered ? 'white' : 'black' }
          />
        </AlertIcon>
        <MessageIcon
          onMouseOver={() => setIsMessageHovered(true)}
          onMouseOut={() => setIsMessageHovered(false)}
        >
          <TbMessage 
            size='4vh'
            color={ isMessageHovered ? 'white' : 'black' }
          />
        </MessageIcon>
      </AlertPosition>
    );
  } else {  // 알람이 존재한다면
    return (
      <AlertPosition>
        <AlertIcon
          onMouseOver={() => setIsAlertHovered(true)}
          onMouseOut={() => setIsAlertHovered(false)}
        >
          <HiBellAlert
            size='4vh'
            color={ isAlertHovered ? 'white' : 'black' }
          />
        </AlertIcon>
        <MessageIcon
          onMouseOver={() => setIsMessageHovered(true)}
          onMouseOut={() => setIsMessageHovered(false)}
        >
          <TbMessage 
            size='4vh'
            color={ isMessageHovered ? 'white' : 'black' }
          />
        </MessageIcon>
      </AlertPosition>
    );
  }
}

const AlertPosition = styled.div`
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const AlertIcon = styled.button`
  width: 40px;
  background: none;
  border: none;
  position: relative;
  margin: 0 1% 0 2%;
  padding: 1% 0 0 0;
  cursor: pointer;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;  

const MessageIcon = styled.button`
  width: 50px;
  background: none;
  border: none;
  position: relative;
  margin: 0 2% 0 1%;
  padding: 1% 0 0 0;
  display: flex;
  
  cursor: pointer;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

export default AlertBar;