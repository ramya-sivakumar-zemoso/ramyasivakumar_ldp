import { Stack, styled } from '@mui/material';
import { Button } from '../../atoms/Button';
import { DATA } from '../../../Utils/constants';
import { Typography } from '../../atoms/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface IStyledButton {
  customheight?: string | number;
  customwidth?: string | number;
  customborder?: string | number;
}

export const StyledButton = styled(Button)<IStyledButton>((props) => ({
  height: props.customheight || 44,
  width: props.customwidth || 151,
  borderRadius: props.customborder || 4,
}));

export const ActionButtons = () => {
  return (
    <Stack direction={'row'} spacing={2} gap={'8px'} paddingTop={'8px'}>
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
