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
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  word-wrap: break-word;
  font-kerning: normal;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.tonysPink};;
  border-radius: 10px;

}

::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.colors.starship};;;
}
`;

export default GlobalStyle;
