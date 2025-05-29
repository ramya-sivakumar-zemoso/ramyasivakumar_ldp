import { Stack as MUIStack, StackProps as MUIStackProps } from '@mui/material';

export interface IStackProps extends MUIStackProps {}

const Stack = ({ ...rest }: IStackProps) => {
  return <MUIStack {...rest} />;
};

export default Stack;
