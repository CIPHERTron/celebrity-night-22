import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import headingSvg from '../../assets/heading.svg';
import jubinSvg from '../../assets/jubin.svg';

const Wrapper = styled(Box)`
  width: 100%;
  height: 720px;
  background-color: #b3aa9b;
  border: 20px solid #181818;
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

function HeroSection() {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Image src={headingSvg} alt="Heading SVG" />
      </HeadingWrapper>

      <JubinPoster>
        <Image src={jubinSvg} alt="Jubin's Poster" />
      </JubinPoster>
    </Wrapper>
  );
}

export default HeroSection;
