import { Global } from '@emotion/react';

function Fonts() {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Test Signifier';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local url('../fonts/tsmi.otf') format('otf'), url('../fonts/tsmi.otf');
      }
      `}
    />
  );
}

export default Fonts;
