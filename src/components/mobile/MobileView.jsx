import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import headingSvg from '../../assets/mobile-heading.svg';
import jubinSvg from '../../assets/jubinmb.svg';
import dtm from '../../assets/dtmobile.png';
// import hollow from '../../assets/hollow.png';
// import solid from '../../assets/solid.png';
// import line from '../../assets/line.png';
import pattern2 from '../../assets/pattern2.png';
// import pattern3 from '../../assets/pattern3.png';
import pattern4 from '../../assets/pattern4.png';
// import star2 from '../../assets/star2.png';
import nitr from '../../assets/nitr.png';
import fms from '../../assets/fms.png';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #b3aa9b;
  border: 6px solid #181818;
`;

const HeadingWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-top: 48px;
`;

const JubinWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  z-index: 1000;

  .pattern-2 {
    position: absolute;
    height: 60px;
    width: 60px;
    left: 13%;
    right: 0%;
    top: 46%;
    bottom: 0%;
  }
`;

const DateWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
`;

const Logos = styled.div`
  margin-top: 15%;
  margin-bottom: 15%;
  .sac-logos {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dotted-lines {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }
`;

function HeroSection() {
  return (
    <Container>
      <HeadingWrapper>
        <Image src={headingSvg} alt="Heading SVG" />
      </HeadingWrapper>

      <JubinWrapper>
        <Image src={jubinSvg} alt="Heading SVG" />
        <Image className="pattern-2" src={pattern2} alt="Flower Pattern" />
      </JubinWrapper>

      <DateWrapper>
        <Image src={dtm} alt="Date, Time and Venue" />
      </DateWrapper>

      <Logos>
        <span className="sac-logos">
          <Image src={nitr} alt="NITR Logo" style={{ marginRight: '5%' }} />
          <Image src={fms} alt="FMS logo" />
        </span>
        <span className="dotted-lines">
          <Image src={pattern4} alt="dotted lines pattern" />
        </span>
      </Logos>
    </Container>
  );
}

export default HeroSection;
