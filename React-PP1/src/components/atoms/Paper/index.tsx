import { Paper, styled, PaperProps } from '@mui/material';

export const StyledPaper = styled(Paper)<PaperProps>(() => ({
  width: '480px',
  height: '672px',

  borderRadius: '6px',
  color: 'white',
}));
