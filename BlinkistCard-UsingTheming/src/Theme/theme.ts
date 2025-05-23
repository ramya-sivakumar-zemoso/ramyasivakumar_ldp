import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'cera-pro',
    body2: {
      fontWeight: 400,
      fontSize: '16px',
    },
    h1: {
      fontWeight: 700,
      fontSize: 36,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 20,
    },
    caption: {
      fontWeight: 400,
      fontSize: 14,
    },
  },
  palette: {
    primary: {
      main: '#03314B',
      light: '#6d787E',
    },
    secondary: {
      main: '#2cE080',
    },
  },
  spacing: 2,
});
