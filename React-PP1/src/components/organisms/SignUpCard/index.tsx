import { Stack, styled } from '@mui/material';
import { DATA } from '../../../utils/constants';
import { StyledPaper } from '../../atoms/Paper';
import Typography from '../../atoms/Typography';
import { InputField } from '../../molecules/InputField';
import Button from '../../atoms/Button';
import Google from '/assets/svgs/Google.svg';
import { theme } from '../../../theme';
import Icons from '../../atoms/Icons';
import { Divider } from '../../atoms/Divider';
import { RememberBox } from '../../molecules/Remember';
import GitHub from '/assets/svgs/Github.svg';
import { useEffect, useState } from 'react';

interface IStyledButton {
  customcolor?: string;
}

const StyledDivider = styled(Divider)(() => ({
  width: theme.spacing(192),
  height: theme.spacing(10),
}));

const StyledIcon = styled(Icons)(() => ({
  height: theme.spacing(8),
  width: theme.spacing(8),
}));

const SignUpCard = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setisValid] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const EmailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    return EmailRegex.test(email);
  };

  const handleEmail = (email_para: string) => {
    setEmail(email_para);
  };
  const handlePassword = (password_para: string) => {
    setPassword(password_para);
  };
  const validatePassword = (password: string) => {
    const PasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    return PasswordRegex.test(password);
  };

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      setisValid(true);
    }
  }, [email, password]);

  const StyledButton = styled(Button)<IStyledButton>(() => ({
    backgroundColor: isValid
      ? theme.palette.secondary.main
      : theme.palette.secondary.dark,
    borderColor: theme.palette.primary.dark,
    textTransform: 'none',
    width: theme.spacing(192),
    height: theme.spacing(22),
    variants: 'body1',
  }));

  const StyledSocialButton = styled(Button)<IStyledButton>(() => ({
    backgroundColor: theme.palette.secondary.light,
    borderColor: theme.palette.primary.dark,
    textTransform: 'none',
    width: theme.spacing(192),
    height: theme.spacing(22),
    variants: 'body1',
  }));

  const StyledStack = styled(Stack)(() => ({
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));

  return (
    <StyledPaper elevation={10}>
      <Stack padding={theme.spacing(22)} gap={10}>
        <Stack gap={6}>
          <Typography text={DATA.heading} variant="h1" color="primary.main" />
          <Typography
            text={DATA.subtext}
            variant="body2"
            color="primary.light"
          />
        </Stack>
        <InputField
          type="email"
          placeholder={DATA.placeholderemail}
          label={DATA.email}
          value={email}
          onChange={(email_para) => handleEmail(email_para.target.value)}
        />
        <InputField
          type="password"
          placeholder={DATA.placeholderpassword}
          label={DATA.password}
          value={password}
          onChange={(password_para) =>
            handlePassword(password_para.target.value)
          }
        />
        <StyledStack>
          <RememberBox />

          <Typography
            text={DATA.forgot}
            textTransform={'none'}
            color="secondary.main"
          />
        </StyledStack>
        <StyledButton
          variant="contained"
          text={DATA.heading}
          disabled={!validateEmail && !validatePassword}
        />
        <StyledDivider
          variant="middle"
          text={<Typography text="or" variant="body2" color="primary.light" />}
        />
        <StyledSocialButton
          variant="outlined"
          text={
            <Stack direction={'row'} gap={1}>
              <StyledIcon source={Google} alt="Google Icon" />
              <Typography
                text={DATA.google}
                variant="body2"
                color="primary.main"
              />
            </Stack>
          }
          customcolor="secondary.light"
        />
        <StyledSocialButton
          variant="outlined"
          text={
            <Stack direction={'row'} gap={1}>
              <StyledIcon source={GitHub} alt="GitHub Icon"></StyledIcon>
              <Typography
                text={DATA.github}
                variant="body2"
                color="primary.main"
              />
            </Stack>
          }
          customcolor="secondary.light"
        />
        <Stack direction={'row'} gap={1} justifyContent={'center'}>
          <Typography
            text={DATA.newuser}
            variant="body2"
            color="primary.main"
          />
          <Typography
            text={DATA.signup}
            textTransform={'none'}
            color="secondary.main"
            variant="body2"
          />
        </Stack>
      </Stack>
    </StyledPaper>
  );
};

export default SignUpCard;
