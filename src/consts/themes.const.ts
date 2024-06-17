import { css } from 'styled-components';

import { colorsPalette as colors } from './template.const';

export const lightTheme = {
  colors,
  button: {
    primary: css`
      background-color: 'green';
      color: 'white';
    `,
    secondary: css`
      background-color: 'red';
      color: 'white';
    `,
    tertiary: css`
      background-color: 'blue';
      color: 'white';
    `,
  },
  icons: {
    primary: css`
      background-color: none;
    `,
    framed: css`
      background-color: black;
    `,
  },
};

export const darkTheme = {
  colors,
  button: {
    primary: css`
      background-color: 'green';
      color: 'white';
    `,
    secondary: css`
      background-color: 'red';
      color: 'white';
    `,
    tertiary: css`
      background-color: 'blue';
      color: 'white';
    `,
  },
  icons: {
    primary: css`
      background-color: none;
    `,
    framed: css`
      background-color: black;
    `,
  },
};

export type ThemeType = typeof lightTheme;
