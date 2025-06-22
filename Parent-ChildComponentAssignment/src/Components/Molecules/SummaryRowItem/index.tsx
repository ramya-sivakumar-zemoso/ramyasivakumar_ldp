//import { SxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/material';
import { StyledText } from '../../atoms/Typography/index.styles';
import './index.css';

type SummaryRowItemType = {
  t1: string | React.ReactNode;
  t2: React.ReactNode;
  t3?: React.ReactNode;
  sx?: SxProps;
};
const SummaryRowItem = ({ t1, t2 }: SummaryRowItemType) => {
  return (
    <div id="row-section">
      {/* <SummaryCardText
        $customColor="purple"
        variant="h1"
        $customFontFamily="Gilroy-HeavyItalic"
      >
        Sales Summary
      </SummaryCardText> */}
      <StyledText color="#a5a5a6">{t1}</StyledText>
      <StyledText>{t2}</StyledText>
    </div>
  );
};

export default SummaryRowItem;
