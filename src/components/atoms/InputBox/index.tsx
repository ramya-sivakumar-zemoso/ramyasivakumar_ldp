import { TextField as MUITextField } from '@mui/material';

interface TextFieldProps {
  placeholder?: React.ReactNode;
}

const TextField = ({ placeholder, ...rest }: TextFieldProps) => {
  return <MUITextField {...rest}>{placeholder}</MUITextField>;
};

export default TextField;
