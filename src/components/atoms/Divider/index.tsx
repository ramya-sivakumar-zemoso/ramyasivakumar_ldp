import { DividerProps, Divider as MUIDivider } from '@mui/material';

interface IDivider extends DividerProps {
  text: React.ReactNode;
}

export const Divider = ({ text, ...rest }: IDivider) => {
  return <MUIDivider {...rest}>{text}</MUIDivider>;
};
