//import { Button } from '@mui/material';
import { ActionButton } from './MUIButton.styled';
import { StyledText } from '../Typography/index.styles';
interface ButtonTextType {
  text: string;
}

const MUIButton = ({ text }: ButtonTextType) => {
  return (
    <ActionButton disabled>
      <StyledText color=" #e8e8e9">{text}</StyledText>
    </ActionButton>
  );
};

export default MUIButton;
