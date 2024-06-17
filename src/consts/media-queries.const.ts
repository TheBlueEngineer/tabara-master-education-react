export const sizes = {
  mobileSm: '320px',
  mobileLg: '420px',
  tablet: '768px',
  laptop: '1024px',
  laptopLg: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileSm: `(max-width: ${sizes.mobileSm})`,
  mobileLg: `(min-width: ${sizes.mobileLg})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopLg: `(min-width: ${sizes.laptopLg})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
