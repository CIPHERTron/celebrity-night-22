import React from 'react';
import styled from '@emotion/styled';

import SeatingArrangement from './SeatingArrangement';
import StudentArea from './StudentArea';

const Wrapper = styled.div`
  background-color: #434e42;
`;

function Seating() {
  return (
    <Wrapper>
      <SeatingArrangement />
      <StudentArea />
    </Wrapper>
  );
}

export default Seating;
