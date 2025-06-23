import { Button as MUIButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';

const Button = ({ children, ...rest }: ButtonProps) => {
  return <MUIButton {...rest}>{children}</MUIButton>;
};

export default Button;
