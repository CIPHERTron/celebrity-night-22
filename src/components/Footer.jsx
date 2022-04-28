import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #b3a59b;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 20px solid #181818;
  border-top: none;

  @media (max-width: 700px) {
    height: 80px;
    border: 10px solid #181818;
    border-top: none;
  }
`;

function Footer() {
  return (
    <Container>
      <h2>© Celebrity Night&apos;22</h2>
      <h2>Instagram</h2>
    </Container>
  );
}

export default Footer;
