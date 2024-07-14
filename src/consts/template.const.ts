export const colorsLight = {
  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
  // Primary green color
  green50: 'hsl(131, 80%, 94%)',
  green100: 'hsl(131, 80%, 90%)',
  green200: 'hsl(131, 80%, 86%)',
  green300: 'hsl(131, 80%, 77%)',
  green400: 'hsl(131, 80%, 68%)',
  green500: 'hsl(131, 80%, 59%)',
  green600: 'hsl(131, 80%, 50%)',
  green700: 'hsl(131, 80%, 41%)',
  green800: 'hsl(131, 80%, 32%)',
  green900: 'hsl(131, 80%, 23%)',
  green950: 'hsl(131, 80%, 18%)',
  // Secondary color
  blue50: `hsl(208, 80%, 95%)`,
  blue100: `hsl(208, 80%, 90%)`,
  blue200: `hsl(208, 80%, 86%)`,
  blue300: `hsl(208, 80%, 77%)`,
  blue400: `hsl(208, 80%, 68%)`,
  blue500: `hsl(208, 80%, 59%)`,
  blue600: `hsl(208, 80%, 50%)`,
  blue700: `hsl(208, 80%, 41%)`,
  blue800: `hsl(208, 80%, 32%)`,
  blue900: `hsl(208, 80%, 23%)`,
  // Gray for negative spaces
  gray50: 'hsl(0, 0%, 94%)',
  gray100: 'hsl(0, 0%, 90%)',
  gray200: 'hsl(0, 0%, 86%)',
  gray300: 'hsl(0, 0%, 77%)',
  gray400: 'hsl(0, 0%, 68%)',
  gray500: 'hsl(0, 0%, 59%)',
  gray600: 'hsl(0, 0%, 50%)',
  gray700: 'hsl(0, 0%, 41%)',
  gray800: 'hsl(0, 0%, 32%)',
  gray900: 'hsl(0, 0%, 23%)',
  // Green Gray
  greenGray50: 'hsl(120, 14%, 96%)',
  greenGray100: 'hsl(111, 14%, 90%)',
  greenGray200: 'hsl(120, 12%, 80%)',
  greenGray300: 'hsl(123, 11%, 67%)',
  greenGray400: 'hsl(127, 10%, 50%)',
  greenGray500: 'hsl(130, 12%, 39%)',
  greenGray600: 'hsl(130, 15%, 30%)',
  greenGray700: 'hsl(133, 15%, 24%)',
  greenGray800: 'hsl(129, 13%, 20%)',
  greenGray900: 'hsl(138, 12%, 16%)',
  greenGray950: 'hsl(140, 13%, 9%)',
  // Blue Gray
  blueGray50: 'hsl(210, 17%, 98%)', // #f9fafb
  blueGray100: 'hsl(200, 12%, 96%)', // #f2f5f5
  blueGray200: 'hsl(195, 18%, 92%)', // #e7ebed
  blueGray300: 'hsl(200, 16%, 87%)', // #d4dbde
  blueGray400: 'hsl(200, 14%, 76%)', // #b8c3c8
  blueGray500: 'hsl(200, 12%, 65%)', // #9babb1
  blueGray600: 'hsl(200, 11%, 57%)', // #82939b
  blueGray700: 'hsl(200, 10%, 51%)', // #73848c
  blueGray800: 'hsl(200, 11%, 39%)', // #5b686e
  blueGray900: 'hsl(200, 11%, 32%)', // #4a5459
  blueGray950: 'hsl(200, 13%, 21%)', // #2f383c
  // Red for errors
  red50: 'hsl(0, 80%, 94%)',
  red100: 'hsl(0, 80%, 90%)',
  red200: 'hsl(0, 80%, 86%)',
  red300: 'hsl(0, 80%, 77%)',
  red400: 'hsl(0, 80%, 68%)',
  red500: 'hsl(0, 80%, 59%)',
  red600: 'hsl(0, 80%, 50%)',
  red700: 'hsl(0, 80%, 41%)',
  red800: 'hsl(0, 80%, 32%)',
  red900: 'hsl(0, 80%, 23%)',
};

export const typography = {
  size: {
    xs: `font-size: 0.75rem`, //12px
    sm: 'font-size: 0.875rem', //14px
    base: 'font-size: 1rem', //16px
    md: 'font-size: 1.25rem', //20px
    lg: 'font-size: 1.5rem', //24px
    xl: 'font-size: 1.875rem', //28px
    xl2: 'font-size: 2.25rem', //36px
    xl3: 'font-size: 3rem', //48px
    xl4: 'font-size: 4rem', //64px
  },
  weight: {
    lighter: 'font-weight: 300',
    light: 'font-weight: 400',
    bold: 'font-weight: 700',
    bolder: 'font-weight: 900',
  },
  lineHeight: {
    xs: 'line-height: 0.75rem',
    sm: 'line-height: 1rem',
    base: 'line-height: 1.5rem',
    md: 'line-height: 1.75rem',
    lg: 'line-height: 2rem',
    xl: 'line-height: 2.25rem',
  },
};

export const border = {
  radius: {
    xs: '1rem',
    sm: '2rem',
    md: '3rem',
    lg: '4rem',
    xl: '6rem',
    xl2: '10rem',
  },
  width: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    xl2: '1.5rem',
    xl3: '2rem',
  },
};

export const shadows = {
  font: {
    lighter: '0px 1px 0.5rem rgba(0, 0, 0, 0.3)',
    light: ' 0px 1px 1rem hsla(0, 0%, 0%, 0.35)',
    medium: '0px 2px 2rem rgba(0, 0, 0, 0.4)',
    heavy: '0px 3px 3rem hsla(0, 0%, 0%, 0.45)',
  },
  elevation: {
    default: `0 0px 0px hsla(0, 0, 0)`,
    sm: `
      0 1px 3px hsla(0, 0%, 0%, 0.12),
      0 1px 2px hsla(0, 0%, 0%, 0.24)`,
    md: `
      0 3px 6px hsla(0, 0%, 0%, 0.15),
      0 2px 4px hsla(0, 0%, 0%, 0.12)`,
    lg: `
      0 10px 20px hsla(0, 0%, 0%, 0.15),
      0 3px 6px hsla(0, 0%, 0%, 0.1)`,
    xl: `
      0 15px 25px hsla(0, 0%, 0%, 0.15),
      0 5px 10px hsla(0, 0%, 0%, 0.5)`,
    xl2: `
    0 20px 40px hsla(0, 0%, 0%, 0.2)
  `,
  },
};

export const opacity = {
  '0': 0,
  '0.3': 0.3,
  '0.5': 0.5,
  '0.8': 0.8,
  '1': 1,
};

export const spacing = {
  '2px': '0.125rem',
  '4px': `0.25rem`,
  '8px': '0.5rem',
  '12px': '0.75rem',
  '16px': '1rem',
  '24px': '1.5rem',
  '32px': '2rem',
  '48px': '3rem',
  '64px': '4rem',
  '96px': '6rem',
  '128px': '8rem',
  '192px': '12rem',
  '256px': '16rem',
  '384px': '24rem',
  '512px': '32rem',
};
