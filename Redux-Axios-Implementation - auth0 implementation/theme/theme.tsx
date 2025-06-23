import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '14px',
      color: '#fffff',
    },
    h2: {
      fontSize: '12px',
      color: '#000000',
    },
  },
  palette: {
    primary: {
      main: 'rgb(235, 220, 238)',
      dark: '#000000',
    },
    secondary: {
      main: 'rgb(177, 34, 112)',
    },
  },
  spacing: 4,
});

export default theme;
