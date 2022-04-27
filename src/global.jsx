import { Global } from '@emotion/react';

function Fonts() {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Signifier';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("Signifier"), url('./fonts/signifier-medium-italic.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Soehne Breit Regular';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("Soehne Breit Regular"), url('./fonts/soehne-breit-dreiviertelfett.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Soehne Breit Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("Soehne Breit Bold"), url('./fonts/soehne-breit-halbfett.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
    />
  );
}

export default Fonts;
