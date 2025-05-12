import { Paper, styled } from '@mui/material';

interface StyledPaperProps {
  customwidth?: number | string;
  customheight?: number | string;
  custombgcolor?: string;
  customradius?: string | number;
}

const StyledPaper = styled(Paper)<StyledPaperProps>((props) => ({
  width: props.customwidth || 434,
  height: props.customheight || 111,
  top: 236,
  left: 729,
  borderRadius: props.customradius || 12,
  borderWidth: 1,
  gap: 12,
  padding: 24,
  backgroundColor: props.custombgcolor || '#201f24',
}));
export default StyledPaper;
