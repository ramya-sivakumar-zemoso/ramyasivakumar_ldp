// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy-Regular',
    h1: {
      fontSize: '36px',
      fontWeight: 700,
      color: ' #E8E7F0',
    },

    h3: {
      fontSize: '18px',
      fontWeight: 400,
      color: '#a5a5a6',
    },
    body2: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#a5a5a6',
    },
    button: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#b4a9ff',
      textTransform: 'capitalize',
    },
  },
});

export default theme;
