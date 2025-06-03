import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import { styled } from '@mui/material';
import theme from '../../../../theme/theme';

const LoginButton = styled(Button)(() => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'left',
}));

const LoginCard = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (err) {
      console.error('Auth0 Login Error:', err);
      alert('Authentication failed. Please try again.');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/assignments');
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginButton
      text="Login with Auth0"
      variant="contained"
      onClick={handleLogin}
    />
  );
};

export default LoginCard;
