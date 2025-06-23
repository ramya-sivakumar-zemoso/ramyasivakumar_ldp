import Icon from '@mui/material/Icon';
import type { IconProps } from '@mui/material';

const MUIIcon = ({ children, ...rest }: IconProps) => {
  return <Icon {...rest}>{children}</Icon>;
};

export default MUIIcon;
