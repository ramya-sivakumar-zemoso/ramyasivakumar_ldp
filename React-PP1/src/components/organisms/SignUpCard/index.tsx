import { Stack, styled } from '@mui/material';
import { DATA } from '../../../utils/constants';
import { StyledPaper } from '../../atoms/Paper';
import Typography from '../../atoms/Typography';
import { InputField } from '../../molecules/InputField';
import Button from '../../atoms/Button';
import Google from '/assets/svgs/Google.svg';
import Icons from '../../atoms/Icons';
import { Divider } from '../../atoms/Divider';
import { RememberBox } from '../../molecules/Remember';
import GitHub from '/assets/svgs/Github.svg';
import { useEffect, useState } from 'react';

interface IStyledButton {
  customcolor?: string;
  text2?: React.ReactNode;
}

const StyledDivider = styled(Divider)(() => ({
  width: '384px',
  height: '20px',
  marginTop: '24px',
}));

const StyledIcon = styled(Icons)(() => ({
  height: '16px',
  width: '16px',
}));

const SignUpCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [beforeButtonState, afterButtonState] = useState(false);

  const validateEmail = (email: string) => {
    const EmailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    return EmailRegex.test(email);
  };

  const handleEmail = (e: string) => {
    setEmail(e);
    console.log(e);
  };
  const handlePassword = (e: string) => {
    setPassword(e);
  };
  const validatePassword = (password: string) => {
    const PasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    return PasswordRegex.test(password);
  };

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      console.log(email);
      afterButtonState(true);
    }
  }, [email, password]);

  const StyledButton = styled(Button)<IStyledButton>(() => ({
    backgroundColor: beforeButtonState ? '#224dff' : '#95aaff',
    borderColor: '#e5e7ed',
    textTransform: 'none',
    marginTop: '28px',
    width: '384px',
    height: '44px',
    variants: 'body1',
  }));

  const StyledSocialButton = styled(Button)<IStyledButton>(() => ({
    backgroundColor: 'white',
    borderColor: '#e5e7ed',
    textTransform: 'none',
    marginTop: '28px',
    width: '384px',
    height: '44px',
    variants: 'body1',
  }));

  return (
    <StyledPaper elevation={10}>
      <Stack padding={5} textAlign={'left'}>
        <Stack gap={1}>
          <Typography
            text={DATA.heading}
            variant="h1"
            color="primary.main"
          ></Typography>
          <Typography
            text={DATA.subtext}
            variant="body2"
            color="primary.light"
          ></Typography>
        </Stack>
        <InputField
          type="email"
          placeholder={DATA.placeholderemail}
          label={DATA.email}
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder={DATA.placeholderpassword}
          label={DATA.password}
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <Stack
          direction={'row'}
          display={'flex'}
          justifyContent={'space-between'}
          paddingRight={5}
          marginTop={2}
          alignItems={'center'}
        >
          <RememberBox />

          <Typography
            paddingTop={3}
            text={DATA.forgot}
            textTransform={'none'}
            color="#224dff"
          ></Typography>
        </Stack>
        <StyledButton
          variant="contained"
          text={DATA.heading}
          disabled={!validateEmail && !validatePassword}
        ></StyledButton>
        <StyledDivider
          variant="middle"
          text={
            <Typography
              text="or"
              variant="body2"
              color="primary.light"
            ></Typography>
          }
        />
        <StyledSocialButton
          variant="outlined"
          text={
            <Stack direction={'row'} gap={1}>
              <StyledIcon source={Google}></StyledIcon>
              <Typography
                text={DATA.google}
                variant="body2"
                color="primary.main"
              ></Typography>
            </Stack>
          }
          customcolor="white"
        ></StyledSocialButton>
        <StyledSocialButton
          variant="outlined"
          text={
            <Stack direction={'row'} gap={1}>
              <StyledIcon source={GitHub}></StyledIcon>
              <Typography
                text={DATA.github}
                variant="body2"
                color="primary.main"
              ></Typography>
            </Stack>
          }
          customcolor="white"
        ></StyledSocialButton>
        <Stack direction={'row'} gap={1} marginLeft={'85px'} marginTop={'30px'}>
          <Typography
            text={DATA.newuser}
            variant="body2"
            color="primary.main"
          />
          <Typography
            text={DATA.signup}
            textTransform={'none'}
            color="#224dff"
            variant="body2"
          />
        </Stack>
      </Stack>
    </StyledPaper>
  );
};

export default SignUpCard;
