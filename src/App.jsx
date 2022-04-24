import React from 'react';
import { ChakraProvider, Box, Stack } from '@chakra-ui/react';

import HeroSection from './components/hero/HeroSection';

import customTheme from './config/theme';
import Fonts from './lib/global';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Stack>
        <Box textAlign="center" fontSize="xl">
          <HeroSection />
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
