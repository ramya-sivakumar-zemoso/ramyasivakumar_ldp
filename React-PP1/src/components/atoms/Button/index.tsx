import { Button as MUIButton, ButtonProps } from '@mui/material';

interface IButton extends ButtonProps {
  text: string | React.ReactNode;
}

const Button = ({ text, ...rest }: IButton) => {
  return <MUIButton {...rest}>{text}</MUIButton>;
};
export default Button;
