export const colors = {
  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0, 100)',
  green: {
    50: 'hsl(131, 80%, 94%)',
    100: 'hsl(131, 80%, 90%)',
    200: 'hsl(131, 80%, 86%)',
    300: 'hsl(131, 80%, 77%)',
    400: 'hsl(131, 80%, 68%)',
    500: 'hsl(131, 80%, 59%)',
    600: 'hsl(131, 80%, 50%)',
    700: 'hsl(131, 80%, 41%)',
    800: 'hsl(131, 80%, 32%)',
    900: 'hsl(131, 80%, 23%)',
  },
  gray: {
    50: 'hsl(0, 0%, 94%)',
    100: 'hsl(0, 0%, 90%)',
    200: 'hsl(0, 0%, 86%)',
    300: 'hsl(0, 0%, 77%)',
    400: 'hsl(0, 0%, 68%)',
    500: 'hsl(0, 0%, 59%)',
    600: 'hsl(0, 0%, 50%)',
    700: 'hsl(0, 0%, 41%)',
    800: 'hsl(0, 0%, 32%)',
    900: 'hsl(0, 0%, 23%)',
  },
  red: {
    50: 'hsl(0, 80%, 94%)',
    100: 'hsl(0, 80%, 90%)',
    200: 'hsl(0, 80%, 86%)',
    300: 'hsl(0, 80%, 77%)',
    400: 'hsl(0, 80%, 68%)',
    500: 'hsl(0, 80%, 59%)',
    600: 'hsl(0, 80%, 50%)',
    700: 'hsl(0, 80%, 41%)',
    800: 'hsl(0, 80%, 32%)',
    900: 'hsl(0, 80%, 23%)',
  },
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
    lighter: 'text-shadow: 0px 1px 0.5rem rgba(0, 0, 0, 0.3)',
    light: 'text-shadow: 0px 1px 1rem hsla(0, 0%, 0%, 0.35)',
    medium: 'text-shadow: 0px 2px 2rem rgba(0, 0, 0, 0.4)',
    heavy: 'text-shadow: 0px 3px 3rem hsla(0, 0%, 0%, 0.45)',
  },
  elevation: {
    default: `0 0px 0px hsla(0, 0, 0)`,
    sm: `
      0 1px 3px hsla(0%, 0%, 0.12),
      0 1px 2px hsla(0%, 0%, 0.24)`,
    md: `
      box-shadow: 0 3px 6px hsla(0%, 0%, 0.15),
      0 2px 4px hsla(0%, 0%, 0.12)`,
    lg: `
      box-shadow: 0 10px 20px hsla(0%, 0%, 0.15),
      0 3px 6px hsla(0%, 0%, 0.1)`,
    xl: `
      box-shadow: 0 15px 25px hsla(0, 0%, 0%, 0.15),
      0 5px 10px hsla(0, 0%, 0%, 0.5)`,
    xl2: `
    box-shadow: 0 20px 40px hsla(0, 0%, 0%, 0.2)
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
