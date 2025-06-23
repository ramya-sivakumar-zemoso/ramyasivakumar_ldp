import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E8E7F0',
      dark: '#18181c',
      light: '#201f24',
    },
    secondary: {
      main: '#6C5DD3',
      light: 'a5a5a6',
      dark: '#b4a9ff',
      contrastText: '#393552',
    },
  },
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
  spacing: 4,
});

export default theme;
