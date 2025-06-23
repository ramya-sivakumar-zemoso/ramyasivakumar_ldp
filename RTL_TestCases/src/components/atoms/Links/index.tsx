import Link from '@mui/material/Link';
import type { LinkProps } from '@mui/material/Link';

const TextLink = ({ children, ...rest }: LinkProps) => {
  return (
    <Link {...rest} underline="hover">
      {children}
    </Link>
  );
};

export default TextLink;
