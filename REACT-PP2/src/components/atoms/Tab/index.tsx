import { Tab as MUITab, type TabProps } from '@mui/material';

const Tab = ({ ...rest }: TabProps) => {
  return <MUITab {...rest} />;
};

export default Tab;
