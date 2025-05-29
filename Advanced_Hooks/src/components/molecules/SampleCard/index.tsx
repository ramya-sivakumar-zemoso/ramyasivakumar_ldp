import { useState, useEffect, useMemo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { Typography } from '../../atoms/Typography';
import Button from '../../atoms/Button';
import { useUserContext } from '../../../context/UserContext';
import User from '../../../utils/constants';

const Dashboard = () => {
  const { user, login, logout } = useUserContext();
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('Not logged in');

  useEffect(() => {
    if (user) {
      setStatus(`Welcome, ${user.name}!`);
    } else {
      setStatus('Please log in.');
    }
  }, [user]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const score = useMemo(() => {
    return count * 10;
  }, [count]);

  return (
    <Stack spacing={2} padding={2}>
      <Typography text={status} variant="h6" />
      <Typography text={`Score: ${score}`} variant="body1" />
      <Typography text={`Clicks: ${count}`} variant="body1" />
      <Button variant="contained" onClick={handleIncrement}>
        {User.increment}
      </Button>
      {!user ? (
        <Button variant="outlined" onClick={() => login(User)}>
          {User.login}
        </Button>
      ) : (
        <Button variant="outlined" onClick={logout}>
          {User.logout}
        </Button>
      )}
    </Stack>
  );
};

export default Dashboard;
