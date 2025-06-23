import Typography from '../../atoms/Typography';
import TextField from '../../atoms/TextField';
import theme from '../../../../theme/theme';
import { Stack } from '@mui/material';

interface IInputField {
  text: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ text, type, onChange }: IInputField) => {
  return (
    <Stack>
      <Typography text={text} color={theme.palette.primary.dark} />
      <TextField type={type} onChange={onChange} />
    </Stack>
  );
};

export default InputField;
