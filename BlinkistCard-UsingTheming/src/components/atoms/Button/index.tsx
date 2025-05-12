import { ButtonProps, Button as MUIButton } from '@mui/material';

interface IButton extends ButtonProps {
  label: React.ReactNode;
}

export const Button = ({ label, ...rest }: IButton) => {
  return <MUIButton {...rest}>{label}</MUIButton>;
};
