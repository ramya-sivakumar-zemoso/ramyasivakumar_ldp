import { Typography as MUITypography, TypographyProps } from '@mui/material';

interface ITypography extends TypographyProps {
  text: string;
  text2?: React.ReactNode;
}

export const MyTypography = ({ text2, text, ...rest }: ITypography) => {
  return (
    <MUITypography {...rest}>
      {text}
      {text2}
    </MUITypography>
  );
};
