import {
  Typography as MUITypograhy,
  type TypographyProps,
} from '@mui/material';

const Typography = ({ ...rest }: TypographyProps) => {
  return <MUITypograhy {...rest} />;
};

export default Typography;
