import { Stack, TextField } from '@mui/material';
import { styled } from '@mui/material';

// interface InputButtonProp {
//   placeholderText?: string | React.ReactNode;
// }

const StyledInputBox = styled(TextField)(() => ({
  border: 1,
  borderRadius: 20,
  borderBlockColor: '#18181c',
  width: 434,
  height: 56,
  marginLeft: 0,
}));

export const InputBox = ({}) => {
  return (
    <Stack>
      <StyledInputBox placeholder="Enter your email id"></StyledInputBox>
    </Stack>
  );
};
