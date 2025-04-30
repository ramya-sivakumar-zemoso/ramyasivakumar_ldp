import Typography from '../../atoms/Typography';
import TextField from '../../atoms/TextField';
import { styled, Stack, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export const StyledTextField = styled(TextField)(() => ({
  width: '384px',
  height: '36px',
  borderRadius: '4px',
  border: '1px',
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
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <Stack direction={'column'} gap={1} paddingTop={1}>
      <Typography
        text={label}
        variant="caption"
        color="primary.main"
        paddingTop={2}
      />
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
