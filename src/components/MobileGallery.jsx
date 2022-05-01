import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 3% auto;
  border: 5px solid #181818;
  border-top: none;

  .heading {
    height: 100px;
    background: #7a6e5e;
    font-size: 40px;
    text-align: center;
    line-height: 90px;
  }

  .gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-bottom: 5%;
  }

  .dp {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 0px 80px;
    margin: 0 auto;
    margin-top: 7%;
    transition: all 1s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border-radius: 0px 20px;
    }
  }
`;

function MobileGallery() {
  return (
    <Container>
      <div className="heading">
        <h2>Gallery</h2>
      </div>

      <div className="gallery">
        <img
          className="dp"
          src="https://cdn.siasat.com/wp-content/uploads/2021/09/jubin-nautiyals.webp"
          alt="Sample Gallery"
        />
        <img
          className="dp"
          src="https://cdn.siasat.com/wp-content/uploads/2021/09/jubin-nautiyals.webp"
          alt="Sample Gallery"
        />
        <img
          className="dp"
          src="https://cdn.siasat.com/wp-content/uploads/2021/09/jubin-nautiyals.webp"
          alt="Sample Gallery"
        />
        <img
          className="dp"
          src="https://cdn.siasat.com/wp-content/uploads/2021/09/jubin-nautiyals.webp"
          alt="Sample Gallery"
        />
      </div>
    </Container>
  );
}

export default MobileGallery;
