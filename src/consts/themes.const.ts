import { DefaultTheme } from 'styled-components';
import { colors } from './template.const';

export const lightTheme: DefaultTheme = {
  colors: {
    background: {
      grayLighter: colors.gray[100],
      grayLight: colors.gray[200],
      greenDark: colors.green[700],
      greenDarker: colors.green[900],
      error: colors.red[100],
      success: colors.green[100],
    },
    typography: {
      black: colors.black,
      grayDarkest: colors.gray[900],
      green: colors.green[500],
      greenDarkest: colors.green[900],
      error: colors.red[500],
      success: colors.green[700],
      quotes: colors.gray[700],
    },
    borders: {
      gray: colors.gray[500],
      error: colors.red[700],
      success: colors.green[800],
    },
  },
};

export const darkTheme = {
  colors: {
    background: {
      grayLighter: colors.gray[100],
      grayLight: colors.gray[200],
      greenDark: colors.green[700],
      greenDarker: colors.green[900],
      error: colors.red[100],
      success: colors.green[100],
    },
    typography: {
      black: colors.black,
      grayDarkest: colors.gray[900],
      green: colors.green[500],
      greenDarkest: colors.green[900],
      error: colors.red[500],
      success: colors.green[700],
      quotes: colors.gray[700],
    },
    borders: {
      gray: colors.gray[500],
      error: colors.red[700],
      success: colors.green[800],
    },
  },
};

export type ThemeType = typeof lightTheme;
