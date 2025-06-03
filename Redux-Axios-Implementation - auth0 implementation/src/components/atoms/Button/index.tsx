import { Button as MUIButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  text: string;
}

const Button = ({ text, ...rest }: IButtonProps) => {
  return <MUIButton {...rest}>{text}</MUIButton>;
};

export default Button;
