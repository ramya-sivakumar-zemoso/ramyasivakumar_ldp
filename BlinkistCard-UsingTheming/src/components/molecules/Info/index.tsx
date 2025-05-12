import ImageAtom from '../../atoms/Icon';
import { Typography, Stack } from '@mui/material';

interface IInfo {
  source: string;
  text: string;
}

const InfoMolecule = ({ source, text }: IInfo) => {
  return (
    <Stack direction={'row'} alignItems={'center'} gap={1}>
      <ImageAtom source={source}></ImageAtom>
      <Typography variant="caption" color="primary.light">
        {text}
      </Typography>
    </Stack>
  );
};

export default InfoMolecule;
