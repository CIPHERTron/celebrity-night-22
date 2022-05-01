/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from '@emotion/styled';

// import sample from '../assets/jubin.png';

import sn from '../assets/cn/sn.jpeg';
import two from '../assets/cn/two.jpg';
// import three from '../assets/cn/three.jpg';
// import four from '../assets/cn/four.jpg';
import head from '../assets/head.png';
import salim from '../assets/cn/salim.jpeg';
import sc from '../assets/cn/sc.jpeg';
import sc1 from '../assets/cn/sc1.jpeg';

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
  .dp-4,
  .dp-5 {
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

  .dp-1 {
    filter: grayscale(100%);
  }

  .dp-1,
  .dp-4 {
    border-radius: 80px 0px;
  }
  .dp-2,
  .dp-3 {
    border-radius: 0px 80px;
  }

  .dp-5 {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 100px 0px;
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

  .heading-1 {
    height: 400px;
    position: relative;
    top: 30%;
    left: 10%;
  }
`;

function Gallery() {
  const [picture, setPicture] = useState(sc1);

  const handleClick = (item) => setPicture(item);

  return (
    <Container>
      <div className="heading">
        <h2>Gallery</h2>
      </div>
      <div className="gallery">
        <div className="null-1">
          <img className="heading-1" src={head} alt="Sample Heading" />
        </div>
        <div className="null-2">
          <img
            className="dp"
            style={{ filter: 'grayscale(100%' }}
            src={picture}
            alt="Sample Gallery"
          />
        </div>
        <div className="null-3">
          <div className="four-grid">
            <img className="dp-1" src={sn} alt="Sample Gallery" onClick={() => handleClick(sn)} />
            <img className="dp-2" src={two} alt="Sample Gallery" onClick={() => handleClick(two)} />
            <img className="dp-3" src={sc} alt="Sample Gallery" onClick={() => handleClick(sc)} />
            <img
              className="dp-4"
              src={salim}
              alt="Sample Gallery"
              onClick={() => handleClick(salim)}
            />
          </div>
          <div className="null-4">
            <img className="dp-5" src={sc1} alt="Sample Gallery" onClick={() => handleClick(sc1)} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
