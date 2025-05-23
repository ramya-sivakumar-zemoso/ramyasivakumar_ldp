import { styled } from '@mui/material';
import { Paper } from '@mui/material';

interface PaperProps {
  custommargin?: number | string;
  customcolor?: string;
  customheight?: string;
}

export const StyledPaper = styled(Paper)<PaperProps>((props) => ({
  backgroundColor: props.customcolor || '#201f24',
  borderRadius: '10px',
  padding: '50px',
  fontFamily: 'Gilroy',
  margin: props.custommargin || '50px',
  maxHeight: props.customheight || '525px',
}));
