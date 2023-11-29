import React, { useState } from 'react';
import styled from 'styled-components';
import { HiBell } from "react-icons/hi2";
import { HiBellAlert } from "react-icons/hi2";
import { TbMessage } from "react-icons/tb";

function AlertBar() {
  const [isAlertExist, setIsAlertExist] = useState(false);  // 알람 존재 여부에 따라 아이콘 변경
  
  if (isAlertExist) {  // 알람이 존재하지 않으면
    return (
      <AlertPosition>
        <AlertIcon>
          <HiBell
            size='40px'
          />
        </AlertIcon>
        <MessageIcon>
          <TbMessage 
            size='40px'
          />
        </MessageIcon>
      </AlertPosition>
    );
  } else {  // 알람이 존재한다면
    return (
      <AlertPosition>
        <AlertIcon>
          <HiBellAlert
            size='40px'
          />
        </AlertIcon>
        <MessageIcon>
          <TbMessage 
            size='40px'
          />
        </MessageIcon>
      </AlertPosition>
    );
  }
}

const AlertPosition = styled.div`
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
  display: flex;
  
  cursor: pointer;

  &:active,
  &:hover {
    transition: 0.7s;
  }
`;

export default AlertBar;