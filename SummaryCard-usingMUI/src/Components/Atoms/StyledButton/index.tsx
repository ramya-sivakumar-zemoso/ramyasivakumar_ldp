import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { StyledTypograhy } from '../../Atoms/StyledTypography/index.jsx';

interface reviewButtonProps {
  children?: string;
}

interface StyledButtonProps {}

export const StyledButton = styled(Button)<StyledButtonProps>(() => ({
  width: 276,
  height: 59,
  borderRadius: 12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  color: 'white',
  backgroundColor: '#6c5dd3',
  marginTop: '30px',
  marginLeft: '20px',
  textTransform: 'capitalize',
}));

export const ReviewButton = ({ children }: reviewButtonProps) => {
  return (
    <StyledButton>
      <StyledTypograhy customColor="#E8E7F0">{children}</StyledTypograhy>
    </StyledButton>
  );
};
