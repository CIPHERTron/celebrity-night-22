import React from 'react';
import { ChakraProvider, Box, Stack } from '@chakra-ui/react';

import HeroSection from './components/hero/HeroSection';
import useMediaQuery from './hooks/useMediaQuery';
import MobileView from './components/mobile/MobileView';
import Gallery from './components/Gallery';
import MobileGallery from './components/MobileGallery';

import Seating from './components/Seating';
import Footer from './components/Footer';

import customTheme from './config/theme';
import Fonts from './global';

function App() {
  const isMobileView = useMediaQuery('(max-width: 700px)');

  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Stack>
        <Box textAlign="center" fontSize="xl">
          {isMobileView ? <MobileView /> : <HeroSection />}
        </Box>
        <Seating />
        {isMobileView ? <MobileGallery /> : <Gallery />}
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
