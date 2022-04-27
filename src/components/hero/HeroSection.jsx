import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import headingSvg from '../../assets/heading.svg';
import jubinSvg from '../../assets/jubin.svg';
import hollow from '../../assets/hollow.png';
import solid from '../../assets/solid.png';
import line from '../../assets/line.png';
import pattern2 from '../../assets/pattern2.png';
import pattern3 from '../../assets/pattern3.png';
import pattern4 from '../../assets/pattern4.png';
import nitr from '../../assets/nitr.png';
import fms from '../../assets/fms.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 720px;
  background-color: #b3aa9b;
  border: 20px solid #181818;
`;

const Wrapper = styled(Box)`
  width: fit-content;
`;

const HeadingWrapper = styled(Box)`
  position: absolute;
  top: 100px;
  left: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 240px;
  width: fit-content;
  border: 1px solid #181818;
  filter: drop-shadow(0px 20px 36px rgba(0, 0, 0, 0.3));
  backdrop-filter: blur(36px);
`;

const JubinPoster = styled(Box)`
  position: absolute;
  right: 0;
  top: 100px;
`;

const DescWrapper = styled.span`
  position: absolute;
  width: 329px;
  height: 64px;
  left: 112px;
  top: 286px;
  font-size: 10px;
  line-height: 16px;
  text-align: justify;
  text-transform: uppercase;

  .dots-lines {
    position: absolute;
    left: -34px;
    top: -34px;
  }

  .two-dots {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .line {
    position: relative;
    left: 5px;
  }
`;

const Description = styled.p`
  font-size: 10px;
`;

const DateWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  font-size: 14px;
  line-height: 16px;

  .date {
    width: 150px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 54px;
    text-align: center;
    border: 1px solid #000;
  }

  .venue {
    width: 240px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 54px;
    text-align: center;
    border: 1px solid #000;

    position: absolute;
    left: 135px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40%;

  .logos-wrapper {
    display: flex;
    flex-direction: column;
  }

  .logos {
    display: flex;
  }
`;

function HeroSection() {
  return (
    <Container>
      <Wrapper>
        <HeadingWrapper>
          <Image src={headingSvg} alt="Heading SVG" />
        </HeadingWrapper>

        <DescWrapper>
          <span className="dots-lines">
            <span className="two-dots">
              <img src={solid} style={{ marginRight: '8px' }} alt="solid dot" />
              <img src={hollow} alt="hollow dot" />
            </span>
            <span className="line">
              <img src={line} alt="line" />
            </span>
            <span>
              <img src={solid} alt="solid dot two" />
            </span>
          </span>

          <Description>
            Celebrity Night is an evening filled with melody and eccentricity lightened up by a
            famous celebrity making the whole NITR Junta dance to their tune.
          </Description>

          <DateWrapper>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className="date">01 MAY, 2022</h3>
            </span>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className="venue">DTS, NIT ROURKELA</h3>
            </span>
          </DateWrapper>

          <LogoWrapper>
            <span className="pattern-2">
              <img src={pattern2} alt="pattern two" />
            </span>

            <span className="logos-wrapper">
              <span className="logos">
                <img src={nitr} alt="nitr logo" style={{ marginRight: '5%' }} />
                <img src={fms} alt="fms logo" />
              </span>
              <img style={{ marginTop: '7%' }} src={pattern4} alt="pattern four" />
            </span>

            <span className="pattern-3">
              <img src={pattern3} alt="pattern three" style={{ marginBottom: '7%' }} />
              <img src={pattern3} alt="pattern three" />
            </span>
          </LogoWrapper>
        </DescWrapper>
      </Wrapper>
      <JubinPoster>
        <Image src={jubinSvg} alt="Jubin's Poster" />
      </JubinPoster>
    </Container>
  );
}

export default HeroSection;
