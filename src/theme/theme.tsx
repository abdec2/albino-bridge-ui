// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { buttonTheme as Button } from "./Button";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVFNIg8mg.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVPNIg8mg.woff2) format('woff2');
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVBNIg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    } 
      `}
  />
);

const theme = extendTheme({
  colors: {
    brand: {
      100: "#8D99FF",
      200: "#98D2C3",
      300: "#D2D2D2",
    },
  },
  fonts: {
    heading: "Jost",
    body: "Jost",
  },
  config,
  components: {
    Button,
  },
});

export default theme;
