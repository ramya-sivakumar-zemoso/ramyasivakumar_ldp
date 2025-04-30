import { Typography as MUITypography, TypographyProps } from '@mui/material';

interface ITypography extends TypographyProps {
  text: string;
  text2?: React.ReactNode;
}

const Typography = ({ text, text2, ...rest }: ITypography) => {
  return (
    <MUITypography {...rest}>
      {text} {text2}
    </MUITypography>
  );
};
export default Typography;
