import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import fonts from './fonts';

const customTheme = extendTheme({
  fonts,
  styles
});

export default customTheme;
