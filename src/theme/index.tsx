import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter-Regular',
    h1: {
      fontWeight: 500,
      fontSize: '20px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
    },
    caption: {
      fontWeight: 500,
      fontSize: '12px',
    },
  },
  palette: {
    primary: {
      main: '#2c2c2e',
      light: '#696a6e',
    },
    secondary: {
      main: '#224dff',
      dark: '#95aaff',
    },
  },
});
