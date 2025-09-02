import { TableCell, TableContainer } from '@mui/material';
import { styled } from '@mui/material';

interface StyledCellProps {
  isSelected?: boolean;
}

export const StyledTableCell = styled(TableCell)<StyledCellProps>((props) => ({
  minWidth: '150px',
  backgroundColor: props.isSelected ? '#4b3c64' : '#201f24',
  fontFamily: 'Gilroy-Regular',
  border: '1px solid #201f24',
  color: 'white',
}));

export const StyledTableContainer = styled(TableContainer)(() => ({
  fontFamily: 'Gilroy',
  marginTop: '20px',
  width: '800px',
}));
