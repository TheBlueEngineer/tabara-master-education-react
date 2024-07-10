import { DefaultTheme } from 'styled-components';
import { colorsLight } from './template.const';

export const lightTheme: DefaultTheme = {
  colors: colorsLight,
};

export const darkTheme = {
  colors: colorsLight,
};

export type ThemeType = typeof lightTheme;
