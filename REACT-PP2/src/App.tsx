import AssetsTable from './components/organisms/AssetsTable';
import './App.css';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AssetsTable />
    </ThemeProvider>
  );
};

export default App;
