import { Typography as MUITypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

interface Props extends TypographyProps {
  text: string;
}

export const Typography = ({ text, ...rest }: Props) => {
  return <MUITypography {...rest}>{text}</MUITypography>;
};
