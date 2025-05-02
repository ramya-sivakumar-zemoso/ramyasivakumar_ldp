import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import './App.css';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpPage />
    </ThemeProvider>
  );
};

export default App;
