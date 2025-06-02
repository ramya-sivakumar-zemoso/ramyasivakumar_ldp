// src/components/atoms/Typography.tsx

import { Typography as MUITypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

const Typography = ({ children, ...rest }: TypographyProps) => {
  return <MUITypography {...rest}>{children}</MUITypography>;
};

export default Typography;
