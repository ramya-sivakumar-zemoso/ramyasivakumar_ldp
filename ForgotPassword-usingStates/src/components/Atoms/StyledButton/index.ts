import { styled, Button } from '@mui/material';
import theme from '../../../theme/theme';

interface StyledButtonProps {
  ButtonColor?: string;
}
const StyledButton = styled(Button)<StyledButtonProps>((props) => ({
  color: props.ButtonColor || theme.palette.primary.main,
  fontFamily: 'Gilroy-Regular',
  width: theme.spacing(109),
  height: theme.spacing(15),
  borderRadius: theme.spacing(3),
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  marginTop: theme.spacing(12),
}));
export default StyledButton;
