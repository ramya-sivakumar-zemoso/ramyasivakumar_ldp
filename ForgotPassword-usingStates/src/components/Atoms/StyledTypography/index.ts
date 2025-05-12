import { styled } from '@mui/material';
import { Typography } from '@mui/material';

interface StyledTypographyProps {
  customcolor?: string;
  customfontfamily?: string;
  customfontsize?: number | string;
  customfontweight?: number | string;
}

const StyledTypography = styled(Typography)<StyledTypographyProps>((props) => ({
  color: props.customcolor || '#a5a5a6',
  fontFamily: props.customfontfamily || 'Gilroy-Regular',
  fontSize: props.customfontsize || 24,
  fontWeight: props.customfontweight || 500,
}));
export default StyledTypography;
