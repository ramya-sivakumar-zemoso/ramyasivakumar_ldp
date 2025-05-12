import './App.css';
import { Stack, TextField, ThemeProvider } from '@mui/material';
import theme from './theme';
import { StyledStack } from './components/Atoms/StyledStack';
import StyledButton from './components/Atoms/StyledButton';
import { useState } from 'react';
import EmailSentBanner from './components/Molecules/EmailSentBanner';
import StyledPaper from './components/Atoms/StyledPaper';
import StyledTypography from './components/Atoms/StyledTypography';

function App() {
  const [email, setEmail] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [beforebtext, afterbtext] = useState('Reset Password');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleResetClick = () => {
    if (validateEmail(email)) {
      setEmailError(false);
      setShowBanner(true);
      afterbtext('Continue');
    } else {
      setEmailError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack direction={'row'}>
        <StyledPaper
          customwidth={575}
          customheight={779}
          custombgcolor="#393552"
          customradius={-1}
        ></StyledPaper>
        <Stack marginLeft={5} spacing={2} marginTop={10}>
          <StyledTypography
            customfontsize={24}
            customfontweight={700}
            customcolor={'#E8E7F0'}
          >
            Forgot Password
          </StyledTypography>

          <StyledTypography customfontsize={18}>
            No worries, we’ll send you link to your email id to reset your
            password
          </StyledTypography>

          {!showBanner ? (
            <>
              <TextField
                variant="outlined"
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? 'Please enter a valid email address' : ''
                }
                fullWidth
              />
            </>
          ) : (
            <EmailSentBanner />
          )}
          <StyledButton
            onClick={handleResetClick}
            disabled={email.trim() === ''}
          >
            <StyledTypography customfontsize={16}>
              {beforebtext}
            </StyledTypography>
          </StyledButton>

          <StyledStack direction={'row'}>
            <StyledTypography customfontsize={18}>Go back to</StyledTypography>
            <StyledTypography customfontsize={18} customcolor="#b4a9ff">
              Login
            </StyledTypography>
          </StyledStack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
