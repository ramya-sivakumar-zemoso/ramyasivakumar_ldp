import { ThemeProvider, Stack, styled, Typography, Box } from '@mui/material';
import { DATA } from '../../../utils/constants';
import { MyTypography } from '../../atoms/Typography';
import { theme } from '../../../theme';
import TextField from '../../atoms/InputBox';
import Button from '../../atoms/Button';

const StyledTextField = styled(TextField)(() => ({
  width: '296px',
  height: '40px',
}));

const CreateButton = styled(Button)(() => ({
  backgroundColor: '#2ce080',
  width: '296px',
  height: '44px',
}));

const SummaryCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyTypography
        text={DATA.Header}
        variant="h1"
        color="primary.main"
      ></MyTypography>
      <Stack direction={'column'} gap={'24px'}>
        <StyledTextField
          placeholder={
            <MyTypography
              text={DATA.InputField.email}
              variant="body1"
              color="secondary.main"
            ></MyTypography>
          }
        ></StyledTextField>
        <StyledTextField
          placeholder={
            <MyTypography
              text={DATA.InputField.email}
              variant="body1"
              color="secondary.main"
            ></MyTypography>
          }
        ></StyledTextField>
        <CreateButton
          variant="contained"
          label={
            <MyTypography
              variant="body1"
              color="primary.main"
              text={DATA.Button}
            ></MyTypography>
          }
        />
        <MyTypography
          text={DATA.socialoption1}
          variant="caption"
          text2={
            <Button
              label={
                <MyTypography
                  text={DATA.socialoption2}
                  color="primary.light"
                  textTransform={'none'}
                />
              }
              variant="text"
            />
          }
        ></MyTypography>
        <Box width={'392px'} height={'433px'} justifyContent={'center'}>
          <MyTypography
            text={DATA.terms}
            variant="subtitle1"
            color="secondary.main"
          />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default SummaryCard;
