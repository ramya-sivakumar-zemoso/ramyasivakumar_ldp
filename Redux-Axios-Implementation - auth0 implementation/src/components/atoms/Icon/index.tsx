import { Icon as MUIIcon } from '@mui/material';
import type { IconProps } from '@mui/material';

const Icon = ({ ...rest }: IconProps) => {
  return <MUIIcon {...rest} />;
};

export default Icon;
