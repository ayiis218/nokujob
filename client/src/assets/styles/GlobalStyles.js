import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";
import "@fortawesome/fontawesome-free";

const GlobalStyles = createGlobalStyle`

  /* Global CSS */
  :root {
    --text-purple: #5e50a1;
    --text-orange: #fbb017;
    --text-black: #1f2a36;
    --text-gray: #46505c;
    --text-silver: #9ea0a5;
    --text-light-gray: #e2e5ed;
    --text-white-smoke: #f6f7f8;
    --text-white: #ffffff;
    --shadow-black-100: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-black-300: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default GlobalStyles;
