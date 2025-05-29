import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import { UserContext } from './context/UserContext';
import Dashboard from './components/molecules/SampleCard';

const App = () => {
  const [user, setUser] = useState(null);

  const login = (userData: any) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
