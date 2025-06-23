import { Stack, TextField } from '@mui/material';
import { styled } from '@mui/material';
import theme from '../../../theme/theme';
import DATA from '../../../utils/constants';

const StyledInputBox = styled(TextField)(() => ({
  border: 1,
  borderRadius: theme.spacing(5),
  borderBlockColor: theme.palette.primary.dark,
  width: theme.spacing(109),
  height: theme.spacing(14),
}));

export const InputBox = () => {
  return (
    <Stack>
      <StyledInputBox placeholder={DATA.email_prompt}></StyledInputBox>
    </Stack>
  );
};
