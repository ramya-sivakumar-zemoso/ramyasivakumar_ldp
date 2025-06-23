import { Typography as MUITypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

interface ITypographyProps extends TypographyProps {
  text: string | React.ReactNode;
}

const Typography = ({ text, ...rest }: ITypographyProps) => {
  return <MUITypography {...rest}>{text}</MUITypography>;
};

export default Typography;
