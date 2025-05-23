import Typography from '../../atoms/Typography';
import Image from '../../atoms/Image';
import theme from '../../../theme/theme';
import { ThemeProvider, Stack } from '@mui/material';

interface ITrade {
  alt: string;
  source: string;
  name: string;
  shortform: string;
}

const TradeName = ({ alt, source, name, shortform }: ITrade) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={'row'} gap={theme.spacing(5)}>
        <Image
          height={theme.spacing(21)}
          width={theme.spacing(21)}
          alt={alt}
          src={source}
        />
        <Stack gap={theme.spacing(2)}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h2" color={theme.palette.primary.light}>
            {shortform}
          </Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default TradeName;
