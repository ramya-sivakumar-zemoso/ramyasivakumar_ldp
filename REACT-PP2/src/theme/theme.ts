import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'graphik',
    h1: {
      fontSize: '16px',
    },
    h2: {
      fontSize: '14px',
    },
    h3: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '14px',
    },
  },
  palette: {
    primary: {
      main: '#343446',
      light: '#7D7D89',
    },
    secondary: {
      main: '#20B03F',
      light: '#B71A33',
    },
  },
  spacing: 2,
});

export default theme;
