import { styled } from '@mui/material';
import { Typography } from '@mui/material';

interface StyledTypograhyProps {
  size?: number | string;
  family?: string;
  weight?: number | string;
  customColor?: string;
}

export const StyledTypograhy = styled(Typography)<StyledTypograhyProps>(
  (props) => ({
    fontFamily: props.family || 'Gilroy-Regular',
    fontSize: props.size || 16,
    fontWeight: props.weight || 500,
    color: props.customColor || '#a5a5a6',
    textTransform: 'none',
  })
);
