import { TextField as MUITextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

const TextField = ({ placeholder, ...rest }: TextFieldProps) => {
  return <MUITextField {...rest}>{placeholder}</MUITextField>;
};

export default TextField;
