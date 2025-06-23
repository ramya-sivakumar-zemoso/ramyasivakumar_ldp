import { styled } from '@mui/material';
import { Typography } from '@mui/material';
import theme from '../../../theme/theme';

interface StyledTypographyProps {
  customcolor?: string;
  customfontfamily?: string;
  customfontsize?: number | string;
  customfontweight?: number | string;
}

const StyledTypography = styled(Typography)<StyledTypographyProps>((props) => ({
  color: props.customcolor || theme.palette.secondary.light,
  fontFamily: props.customfontfamily || 'Gilroy-Regular',
  fontSize: props.customfontsize || theme.spacing(6),
  fontWeight: props.customfontweight || theme.spacing(125),
}));
export default StyledTypography;
