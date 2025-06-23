import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';

export interface IButtonProps extends MUIButtonProps {}

const Button = ({ ...rest }: IButtonProps) => {
  return <MUIButton {...rest} />;
};

export default Button;
