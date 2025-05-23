import { Typography as MUITypography, TypographyProps } from '@mui/material';

interface ITypography extends TypographyProps {
  text: string;
}

const Typography = ({ text, ...rest }: ITypography) => {
  return <MUITypography {...rest}>{text}</MUITypography>;
};
export default Typography;
