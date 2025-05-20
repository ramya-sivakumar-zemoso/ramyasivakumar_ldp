import {
  Table,
  TableHead,
  TableCell,
  Typography,
  Tabs,
  Tab,
  Stack,
} from '@mui/material';

import { TabNames, Heading } from '../../../utils/constants';
import TABLEDATA from '../../../utils/constants';
import { useState } from 'react';

import AssetsTableBody from '../../molecules/AssetsTable';

const AssetsTable = () => {
  const [allAssets] = useState(TABLEDATA);
  const [watchlist, setWatchlist] = useState<typeof allAssets>([]);
  const [tab, setTab] = useState<string>('All Assets');

  const handleWatchToggle = (name: string) => {
    const asset = allAssets.find((item) => item.name === name);
    if (!asset) return;

    if (watchlist.find((item) => item.name === name)) {
      setWatchlist(watchlist.filter((item) => item.name !== name));
    } else {
      setWatchlist((prev) => [...prev, asset]);
    }
  };

  return (
    <Stack>
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        sx={{
          '.MuiTab-root': {
            color: 'black',
          },
          '.Mui-selected': {
            color: 'blue',
          },
          '.MuiTabs-indicator': {
            backgroundColor: 'blue',
          },
        }}
      >
        <Tab label={TabNames.tab1} value="All Assets" />
        <Tab label={TabNames.tab2} value="Watchlist" />
      </Tabs>

      <Table>
        <TableHead>
          {Heading.map((title) => (
            <TableCell key={title}>
              <Typography>{title}</Typography>
            </TableCell>
          ))}
        </TableHead>
        <AssetsTableBody
          rows={tab === 'All Assets' ? allAssets : watchlist}
          watchlist={watchlist}
          onToggleWatchlist={handleWatchToggle}
          showChangeColor={true}
        />
      </Table>
    </Stack>
  );
};

export default AssetsTable;
