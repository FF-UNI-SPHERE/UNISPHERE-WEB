import React, { useState } from 'react';
import styled from 'styled-components';
import BeforeLoginSet from '../component/main screen/BeforeLogin';
import AfterLoginSet from '../component/main screen/AfterLogin';

/* 로그인 여부에 따라 다른 화면을 렌더링 */
function MainScreen(props) {
  const [IsLogin, setIsLogin] = useState(0);
  
  if (IsLogin) {
    return(
      <BeforeLoginSet />
    );    
  } else {
    return (
      <AfterLoginSet />
    );
  }
}

export default MainScreen;