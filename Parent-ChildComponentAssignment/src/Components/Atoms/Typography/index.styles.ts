import { styled } from '@mui/material';
import { Typography } from '@mui/material';

interface SummaryCardTextProps {
  customcolor?: string;
  customweight?: number | string;
  customfontfamily?: string;
  customfontsize?: number | string;
}

export const StyledText = styled(Typography)<SummaryCardTextProps>((props) => ({
  fontFamily: props.customfontfamily || 'Gilroy-Regular',
  fontWeight: props.customweight || 400,
  fontSize: props.customfontsize || 16,
  lineHeight: '140%',
  letterSpacing: '0%',
  textAlign: 'left',
  color: props.customcolor || '#e8e7f0',
}));
