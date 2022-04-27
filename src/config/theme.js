import { extendTheme } from '@chakra-ui/react';
import styles from './styles';

const customTheme = extendTheme({
  fonts: {
    heading: 'Signifier, sans-serif',
    body: 'Soehne Breit Regular, sans-serif'
  },
  styles
});

export default customTheme;
