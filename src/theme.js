import { createTheme } from '@material-ui/core/styles';
import PressStart2P from './Fonts/PressStart2P-Regular.ttf';

const pressStart2P = {
  fontFamily: 'Press Start 2P',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
   local('PressStart2P'),
   local('PressStart2P-Regular'),
   url(${PressStart2P}) format('ttf')
 `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
  typography: {
    fontFamily: ['"Press Start 2P"', 'Skranji', '"Open Sans"', 'Roboto'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [pressStart2P],
      },
    }
  }
})

export default theme;
