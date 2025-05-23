import { Stack } from '@mui/material';

interface ISignUpTemplate {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

const SignUpTemplate = ({ leftComponent, rightComponent }: ISignUpTemplate) => {
  return (
    <Stack direction={'row'} alignItems={'center'}>
      <Stack flex={1} alignItems={'center'}>
        {leftComponent}
      </Stack>
      <Stack flex={2} alignItems={'center'}>
        {rightComponent}
      </Stack>
    </Stack>
  );
};

export default SignUpTemplate;
