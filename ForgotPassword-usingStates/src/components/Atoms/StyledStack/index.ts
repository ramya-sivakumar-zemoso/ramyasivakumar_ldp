import { styled, Stack } from '@mui/material';
import theme from '../../../theme/theme';

export const StyledStack = styled(Stack)(() => ({
  padding: theme.spacing(0.5),
  gap: theme.spacing(2),
}));
