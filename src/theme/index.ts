import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '24px',
      fontWeight: '700',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '400',
    },
    caption: {
      fontSize: '14px',
      fontWeight: '400',
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: '400',
    },
  },
  palette: {
    primary: {
      main: '#03314B',
      light: '#116be9',
    },
    secondary: {
      main: '#6d787e',
      light: '#3a4649',
      dark: '#2ce080',
    },
  },
});
