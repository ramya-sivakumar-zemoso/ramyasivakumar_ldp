import { Paper, styled } from '@mui/material';
import theme from '../../../theme/theme';

interface StyledPaperProps {
  customwidth?: number | string;
  customheight?: number | string;
  custombgcolor?: string;
  customradius?: string | number;
}

const StyledPaper = styled(Paper)<StyledPaperProps>((props) => ({
  width: props.customwidth || theme.spacing(109),
  height: props.customheight || theme.spacing(28),
  top: theme.spacing(59),
  left: theme.spacing(183),
  borderRadius: props.customradius || theme.spacing(3),
  borderWidth: 1,
  gap: theme.spacing(3),
  padding: theme.spacing(8),
  backgroundColor: props.custombgcolor || theme.palette.primary.light,
}));
export default StyledPaper;
