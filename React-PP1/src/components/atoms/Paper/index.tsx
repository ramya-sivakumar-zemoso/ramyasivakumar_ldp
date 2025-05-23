import { Paper, styled, PaperProps } from '@mui/material';
import { theme } from '../../../theme';

export const StyledPaper = styled(Paper)<PaperProps>(() => ({
  width: theme.spacing(240),
  height: theme.spacing(336),
  borderRadius: theme.spacing(3),
  color: theme.palette.secondary.light,
}));
