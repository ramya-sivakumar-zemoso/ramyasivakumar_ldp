import { TextField as MUITextField, TextFieldProps } from '@mui/material';

const TextField = ({ placeholder, value, ...rest }: TextFieldProps) => {
  return <MUITextField {...rest} placeholder={placeholder} value={value} />;
};

export default TextField;
