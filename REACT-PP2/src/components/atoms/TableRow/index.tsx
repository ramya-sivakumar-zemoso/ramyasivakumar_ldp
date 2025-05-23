import { TableRow as MUITableRow, type TableRowProps } from '@mui/material';

const TableRow = ({ ...rest }: TableRowProps) => {
  return <MUITableRow {...rest} />;
};

export default TableRow;
