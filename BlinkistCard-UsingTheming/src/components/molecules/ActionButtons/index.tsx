import { Stack, styled } from '@mui/material';
import { Button } from '../../atoms/Button';
import { DATA } from '../../../Utils/constants';
import { Typography } from '../../atoms/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { theme } from '../../../Theme/theme';

interface IStyledButton {
  customheight?: string | number;
  customwidth?: string | number;
  customborder?: string | number;
}

export const StyledButton = styled(Button)<IStyledButton>((props) => ({
  height: props.customheight || theme.spacing(22),
  width: props.customwidth || theme.spacing(76),
  borderRadius: props.customborder || theme.spacing(2),
}));

export const ActionButtons = () => {
  return (
    <Stack
      direction={'row'}
      spacing={theme.spacing(2)}
      gap={theme.spacing(4)}
      paddingTop={theme.spacing(4)}
    >
      <StyledButton
        label={DATA.library}
        variant="contained"
        color="secondary"
      ></StyledButton>
      <StyledButton
        label={<Typography color="secondary" text={DATA.buy}></Typography>}
        variant="outlined"
        startIcon={<ShoppingCartIcon />}
      ></StyledButton>
      <StyledButton
        label={
          <Typography
            variant="body2"
            color="primary.light"
            text={DATA.kindle}
          ></Typography>
        }
        variant="text"
        endIcon={<ArrowRightAltIcon />}
      ></StyledButton>
    </Stack>
  );
};
