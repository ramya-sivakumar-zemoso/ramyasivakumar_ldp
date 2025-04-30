import { Stack } from '@mui/material';

interface ISignUpTemplate {
  leftcomponent: React.ReactNode;
  rightcomponent: React.ReactNode;
}

const SignUpTemplate = ({ leftcomponent, rightcomponent }: ISignUpTemplate) => {
  return (
    <Stack direction={'row'} alignItems={'center'}>
      <Stack flex={1} alignItems={'center'}>
        {leftcomponent}
      </Stack>
      <Stack flex={2} alignItems={'center'}>
        {rightcomponent}
      </Stack>
    </Stack>
  );
};

export default SignUpTemplate;
