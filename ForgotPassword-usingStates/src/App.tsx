import './App.css';
import { Stack, TextField, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { StyledStack } from './components/atoms/StyledStack';
import StyledButton from './components/atoms/StyledButton';
import { useState } from 'react';
import EmailSentBanner from './components/molecules/EmailSentBanner';
import StyledPaper from './components/atoms/StyledPaper';
import StyledTypography from './components/atoms/StyledTypography';
import DATA from './utils/constants';

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
          customwidth={theme.spacing(143)}
          customheight={theme.spacing(36)}
          custombgcolor={theme.palette.secondary.contrastText}
          customradius={-1}
        ></StyledPaper>
        <Stack
          marginLeft={theme.spacing(1)}
          spacing={theme.spacing(0.5)}
          marginTop={theme.spacing(3)}
        >
          <StyledTypography
            customfontsize={theme.spacing(6)}
            customfontweight={theme.spacing(175)}
            customcolor={theme.palette.primary.main}
          >
            {DATA.title}
          </StyledTypography>

          <StyledTypography customfontsize={18}>
            {DATA.helper_text}
          </StyledTypography>

          {!showBanner ? (
            <>
              <TextField
                variant="outlined"
                placeholder={DATA.email_placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? DATA.invalid_email_alert_text : ''}
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
            <StyledTypography customfontsize={theme.spacing(4)}>
              {beforebtext}
            </StyledTypography>
          </StyledButton>

          <StyledStack direction={'row'}>
            <StyledTypography customfontsize={theme.spacing(4)}>
              {DATA.go_back}
            </StyledTypography>
            <StyledTypography
              customfontsize={theme.spacing(4)}
              customcolor={theme.palette.secondary.dark}
            >
              {DATA.login}
            </StyledTypography>
          </StyledStack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
