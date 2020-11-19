import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: 100%
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;}
`;

export default GlobalStyle;
