import React, { useState } from 'react';
import styled from 'styled-components';
import BeforeLoginSet from '../component/main screen/BeforeLogin';
import AfterLoginSet from '../component/main screen/AfterLogin';
import { getCookie } from '../api/cookie';

function MainScreen(props) {
  const token = getCookie('access_token');

  if (!token) {
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