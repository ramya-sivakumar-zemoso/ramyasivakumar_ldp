import { Checkbox, Stack } from '@mui/material';
import { DATA } from '../../../utils/constants';
import Typography from '../../atoms/Typography';

export const RememberBox = () => {
  return (
    <Stack
      direction={'row'}
      display={'flex'}
      alignItems={'center'}
      marginTop={2}
    >
      <Checkbox></Checkbox>
      <Typography
        text={DATA.remember}
        variant="body1"
        color="primary.main"
      ></Typography>
    </Stack>
  );
};
