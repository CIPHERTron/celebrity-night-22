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

  a {
    text-decoration: none;
    color: #181818;
  }

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
      <a rel="noreferrer" target="_blank" href="https://www.instagram.com/fms.nitr/">
        <h2>Instagram</h2>
      </a>
    </Container>
  );
}

export default Footer;
