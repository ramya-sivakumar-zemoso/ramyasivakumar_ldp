import { CheckboxProps, Checkbox as MUICheckbox } from '@mui/material';

export const Checkbox = ({ ...rest }: CheckboxProps) => {
  return <MUICheckbox {...rest} />;
};
