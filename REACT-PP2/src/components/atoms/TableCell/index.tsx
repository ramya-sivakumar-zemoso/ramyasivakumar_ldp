import { TableCell as MUITableCell, type TableCellProps } from '@mui/material';

const TableCell = ({ ...rest }: TableCellProps) => {
  return <MUITableCell {...rest} />;
};

export default TableCell;
