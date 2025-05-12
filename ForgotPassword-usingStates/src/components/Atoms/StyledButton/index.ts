import { styled, Button } from '@mui/material';

interface StyledButtonProps {
  ButtonColor?: string;
}
const StyledButton = styled(Button)<StyledButtonProps>((props) => ({
  color: props.ButtonColor || '#E8E7F0',
  fontFamily: 'Gilroy-Regular',
  width: 434,
  height: 60,
  borderRadius: 12,
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#6C5DD3',
  marginTop: 50,
}));
export default StyledButton;
