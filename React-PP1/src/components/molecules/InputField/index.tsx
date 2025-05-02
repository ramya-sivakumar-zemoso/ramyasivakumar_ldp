import Typography from '../../atoms/Typography';
import TextField from '../../atoms/TextField';
import { styled, Stack, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { theme } from '../../../theme';

export const StyledTextField = styled(TextField)(() => ({
  width: theme.spacing(192),
  borderRadius: theme.spacing(2),
  border: theme.spacing(0.5),
}));

interface InputField {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  type,
  label,
  placeholder,
  value,
  onChange,
}: InputField) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isPassword = type === 'password';

  return (
    <Stack gap={2}>
      <Typography text={label} variant="caption" color="primary.main" />
      <StyledTextField
        type={isPassword && !showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        InputProps={{
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
