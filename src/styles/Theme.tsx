import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    cork: '#44281d',
    tonysPink: '#e4a788',
    starship: '#f0e14a',
    atlantis: '#97ce4c',
    kobi: '#e89ac7',
  },
  mediaQueries: {
    large: '(min-width: 1280px)',
    medium: '(min-width: 680px)',
    small: '(min-width: 450px)',
    landscape: '(max-height: 570px)',
  },
  shadow: '0 5px 5px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 0, 0, 0.2)',
};

type ThemeType = typeof theme;

interface Props {
  children: React.FC[] | React.FC;
}

const Theme: DefaultTheme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export type { ThemeType };
export default Theme as React.ComponentType;
