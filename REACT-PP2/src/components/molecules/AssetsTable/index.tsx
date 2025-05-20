import {
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Checkbox,
  styled,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import TradeName from '../TradeName';
import theme from '../../../theme/theme';

interface Asset {
  name: string;
  shortform: string;
  price: string;
  change: string;
  marketCap: string;
  source: string;
}

interface AssetProps {
  rows: Asset[];
  watchlist: Asset[];
  onToggleWatchlist: (name: string) => void;
  showChangeColor?: boolean;
}

const StyledRow = styled(TableRow)(() => ({
  border: theme.spacing(1),
  borderRadius: theme.spacing(2),
  color: theme.palette.info.light,
  marginBottom: theme.spacing(5),
}));

const AssetsTableBody = ({
  rows,
  watchlist,
  onToggleWatchlist,
  showChangeColor = false,
}: AssetProps) => {
  return (
    <TableBody>
      {rows.map((data) => (
        <StyledRow>
          <TableCell>
            <TradeName
              alt={data.name}
              name={data.name}
              shortform={data.shortform}
              source={data.source}
            />
          </TableCell>
          <TableCell>
            <Typography variant="h1">{data.price}</Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h1"
              color={
                showChangeColor
                  ? data.change.startsWith('+')
                    ? theme.palette.secondary.main
                    : theme.palette.secondary.light
                  : 'inherit'
              }
            >
              {data.change}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h1">{data.marketCap}</Typography>
          </TableCell>
          <TableCell>
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon sx={{ color: 'blue' }} />}
              checked={watchlist.some((item) => item.name === data.name)}
              onChange={() => onToggleWatchlist(data.name)}
            />
          </TableCell>
        </StyledRow>
      ))}
    </TableBody>
  );
};

export default AssetsTableBody;
