import StyledButton from './index';

interface ButtonText {
  text?: string;
}

export const MyButton = ({ text }: ButtonText) => {
  return <StyledButton>{text}</StyledButton>;
};
