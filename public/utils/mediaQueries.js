const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px'
};

export const device = {
  mobile: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  desktop: `@media screen and (min-width: ${size.desktop})`
};