import Icon from '../../atoms/Icon/Icon';
import './index.css';
import InfoIcon from '../../../assests/InfoIcon.png';
import { SxProps } from '@mui/material';
import { StyledText } from '../../atoms/Typography/index.styles';
interface SummaryCardHeaderProps {
  text: string;
  sx?: SxProps;
}
const SummaryCardHeader = ({ text }: SummaryCardHeaderProps) => {
  return (
    <div id="SummaryCardHeader">
      <StyledText customfontsize={24} customweight={600}>
        {text}
      </StyledText>
      <Icon source={InfoIcon} />
    </div>
  );
};

export default SummaryCardHeader;
