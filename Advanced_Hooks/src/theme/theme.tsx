import { createTheme } from '@mui/material/styles';

export const getTheme = () =>
  createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#6C4F3D' },
      secondary: { main: '#C97B84' },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    spacing: 2,
  });
