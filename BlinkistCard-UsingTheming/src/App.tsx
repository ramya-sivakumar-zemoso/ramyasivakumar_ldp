import { Stack, ThemeProvider, Typography, styled } from '@mui/material';
import './App.css';
import { DATA } from './Utils/constants';
import { theme } from './Theme/theme';
import InfoMolecule from './components/molecules/Info';
import Headset from '/assets/headset.svg';
import Timer from '/assets/timer.svg';
import Component from '/assets/component-image.svg';
import { ActionButtons } from './components/molecules/ActionButtons';
import ImageAtom from './components/atoms/Icon';

interface StyledImageProps {
  customheight?: string | number;
  customwidth?: string | number;
}

const StyledImageAtom = styled(ImageAtom)<StyledImageProps>(() => ({
  height: theme.spacing(152),
  width: theme.spacing(152),
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={'row'} spacing={theme.spacing(62)}>
        <Stack gap={theme.spacing(4)}>
          <Typography variant="body2" color="primary">
            {DATA.subtitle}
          </Typography>
          <Typography variant="h1" color="primary">
            {DATA.Heading}
          </Typography>
          <Typography variant="subtitle1" color="primary.main">
            {DATA.tagline}
          </Typography>
          <Typography variant="body1" color="primary.light">
            {DATA.author}
          </Typography>
          <Stack
            direction={'row'}
            spacing={theme.spacing(1)}
            paddingTop={theme.spacing(10)}
          >
            <InfoMolecule source={Timer} text={DATA.readtime}></InfoMolecule>
            <InfoMolecule source={Headset} text={DATA.audio}></InfoMolecule>
          </Stack>
          <ActionButtons />
        </Stack>
        <StyledImageAtom source={Component} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
