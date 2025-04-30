import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import './App.css';
import SignUpPage from './components/pages/SignUpPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpPage></SignUpPage>
    </ThemeProvider>
  );
};

export default App;
