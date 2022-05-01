/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from '@emotion/styled';

// import sample from '../assets/jubin.png';

const Container = styled.div`
  margin: 3% auto;
  border: 20px solid #181818;
  border-top: none;

  .heading {
    height: 150px;
    background: #7a6e5e;
    font-size: 40px;
    text-align: center;
    line-height: 130px;
  }

  .gallery {
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    margin-top: 3%;
    grid-gap: 20px;
  }

  .null-1,
  .null-3 {
    width: 100%;
    margin: 0 auto;
  }

  .null-1 {
    background: #e5693f;
    border-radius: 100px 0;
  }

  .null-2 {
    background: #181818;
  }

  .dp {
    height: 600px;
    object-fit: cover;
    width: 100%;
    margin: 0 auto;
    border-radius: 0px 100px;
  }

  .four-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .dp-1,
  .dp-2,
  .dp-3,
  .dp-4 {
    height: 150px;
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 1s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .dp-1,
  .dp-4 {
    border-radius: 80px 0px;
  }
  .dp-2,
  .dp-3 {
    border-radius: 0px 80px;
  }

  .null-3 {
    display: flex;
    flex-direction: column;
  }

  .null-4 {
    height: 50%;
    width: 100%;
    border-radius: 0px 0px 100px 0px;
    background: #e5693f;
    margin-top: 5%;
  }
`;

function Gallery() {
  const [picture, setPicture] = useState(
    'https://cdn.siasat.com/wp-content/uploads/2021/09/jubin-nautiyals.webp'
  );

  const handleClick = (item) => setPicture(item);

  return (
    <Container>
      <div className="heading">
        <h2>Gallery</h2>
      </div>
      <div className="gallery">
        <div className="null-1" />
        <div className="null-2">
          <img className="dp" src={picture} alt="Sample Gallery" />
        </div>
        <div className="null-3">
          <div className="four-grid">
            <img
              className="dp-1"
              src="https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg"
              alt="Sample Gallery"
              onClick={() =>
                handleClick(
                  'https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg'
                )
              }
            />
            <img
              className="dp-2"
              src="https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg"
              alt="Sample Gallery"
              onClick={() =>
                handleClick(
                  'https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg'
                )
              }
            />
            <img
              className="dp-3"
              src="https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg"
              alt="Sample Gallery"
              onClick={() =>
                handleClick(
                  'https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg'
                )
              }
            />
            <img
              className="dp-4"
              src="https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg"
              alt="Sample Gallery"
              onClick={() =>
                handleClick(
                  'https://i.pinimg.com/564x/33/50/de/3350de94be35769724bf09bcfbbd630d.jpg'
                )
              }
            />
          </div>
          <div className="null-4" />
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
