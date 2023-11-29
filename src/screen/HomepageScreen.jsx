import React from 'react';
import styled from 'styled-components';

function HomepageScreen() {
  return (
    <HomepagePosition>
      <WhiteBox>

      </WhiteBox>
    </HomepagePosition>
  );
}

const HomepagePosition = styled.div`
    display: flex;
    flex-direction: column;
`;

const WhiteBox = styled.div`
  width: 77.5%;
  background-color: white;
  opacity: 90%;
  border-radius: 30 30 0 0;
  margin: auto; // 가운데 정렬
`;

export default HomepageScreen;