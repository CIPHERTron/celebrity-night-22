import React from 'react';
import { ChakraProvider, Box, Stack } from '@chakra-ui/react';

import HeroSection from './components/hero/HeroSection';
import useMediaQuery from './hooks/useMediaQuery';

import customTheme from './config/theme';
import Fonts from './global';

function App() {
  const isMobileView = useMediaQuery('(max-width: 700px)');

  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Stack>
        <Box textAlign="center" fontSize="xl">
          {isMobileView ? <h1>Hello</h1> : <HeroSection />}
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
