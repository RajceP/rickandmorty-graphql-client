import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

type Props = {
  theme: ThemeType;
};

const GlobalStyle = createGlobalStyle<Props>`
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
  font-family: 'Permanent Marker', cursive;
  background-color: ${({ theme }) => theme.colors.cork};
}
`;

export default GlobalStyle;
