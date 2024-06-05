export const lightTheme = {
  background: '#ffffff',
  color: '#000000',
  button: {
    primary: {
      bg: 'green',
      color: 'white',
    },
    secondary: {
      bg: 'cyan',
      color: 'black',
    },
    tertiary: {
      bg: 'white',
      color: 'black',
    },
  },
};

export const darkTheme = {
  background: '#333333',
  color: '#ffffff',
  button: {
    primary: {
      bg: 'black',
      color: 'white',
    },
    secondary: {
      bg: 'black',
      color: 'white',
    },
    tertiary: {
      bg: 'black',
      color: 'white',
    },
  },
};

export type ThemeType = typeof lightTheme;
