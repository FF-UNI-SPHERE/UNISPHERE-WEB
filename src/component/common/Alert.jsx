import React, { useState } from 'react';
import styled from 'styled-components';
import { HiBell } from "react-icons/hi2";
import { TbMessage } from "react-icons/tb";
import { IoMdAlert } from "react-icons/io";

function AlertBar() {
  const [isAlertExist, setIsAlertExist] = useState(true);  // 알람 존재 여부에 따라 아이콘 변경
  const [isAlertHovered, setIsAlertHovered] = useState(false);  // 알림 버튼 hover 여부
  const [isMessageHovered, setIsMessageHovered] = useState(false);  // 채팅 버튼 hover 여부

  if (!isAlertExist) {  // 알람이 존재하지 않는다면
    return (
      <AlertPosition>
        <AlertButton
          onMouseOver={() => setIsAlertHovered(true)}
          onMouseOut={() => setIsAlertHovered(false)}
        >
          <HiBell
            size='5vh'
            color={ isAlertHovered ? 'white' : 'black' }
          />
        </AlertButton>

        <MessageButton
          onMouseOver={() => setIsMessageHovered(true)}
          onMouseOut={() => setIsMessageHovered(false)}
        >
          <TbMessage 
            size='5.3vh'
            color={ isMessageHovered ? 'white' : 'black' }
          />
        </MessageButton>
      </AlertPosition>
    );
  } else {  // 알람이 존재한다면
    return (
      <AlertPosition>
        <AlertButton
          onMouseOver={() => setIsAlertHovered(true)}
          onMouseOut={() => setIsAlertHovered(false)}
        >
          <HiBell
            size='5vh'
            color={isAlertHovered ? 'white' : 'black'}
          />
          <IoMdAlert
            size='2.5vh'
            color='red'
            style={{ position: 'absolute', top: '0', right: '5%' }}
          />
        </AlertButton>

        <MessageButton
          onMouseOver={() => setIsMessageHovered(true)}
          onMouseOut={() => setIsMessageHovered(false)}
        >
          <TbMessage 
            size='5.3vh'
            color={ isMessageHovered ? 'white' : 'black' }
          />
        </MessageButton>
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

const AlertButton = styled.button`
  width: 50px;
  background: none;
  border: none;
  position: relative;
  margin: 0 1.3% 0 3%;
  cursor: pointer;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;  

const MessageButton = styled.button`
  width: 50px;
  background: none;
  border: none;
  position: relative;
  margin: 0 3% 0 1.3%;
  display: flex;
  
  cursor: pointer;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

export default AlertBar;