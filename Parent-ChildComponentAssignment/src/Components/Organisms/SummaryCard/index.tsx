import SummaryCardHeader from '../../Molecules/SummaryCardHeader';
import SummarySection1 from '../../Molecules/SummarySection1';
import DividerLine from '../../Atoms/Divider';
import './index.css';
import { StyledPaper } from '../../Atoms/Paper/Paper.styles';
import MUIButton from '../../Atoms/Button';
import { MUIChip } from '../../Atoms/Chip';
import { StyledText } from '../../Atoms/Typography/index.styles';
import ResetSlider from '../../Atoms/ResetSlider';

const SummaryCard = () => {
  return (
    <StyledPaper elevation={10} square={false}>
      <section id="Summary-section">
        <SummaryCardHeader text="Summary" />
        <SummarySection1 text1="Term" text2="12 months" />
        <SummarySection1 text1="Selected contracts" text2="0" />
        <SummarySection1
          text1="Slide to autoselect"
          text2={
            <MUIChip label={<StyledText color="#413f4d">Reset</StyledText>} />
          }
        />
        <ResetSlider />
        <SummarySection1
          text1={
            <StyledText>
              <span id="value">$0.00</span>selected of $880,000.00
            </StyledText>
          }
          text2={<StyledText></StyledText>}
        />
        <SummarySection1 text1="Pay back Amount" text2="$0.00" />
        <SummarySection1
          text1="Rate%"
          text2={
            <StyledText>
              <span id="Rate">(0.00%)</span>$0.00{' '}
            </StyledText>
          }
        />
        <DividerLine />
        <SummarySection1
          text1={<StyledText customFontSize={24}>Total Payout</StyledText>}
          text2={<StyledText>$0.00</StyledText>}
        />
        <MUIButton text="Review Your Credits" />
      </section>
    </StyledPaper>
  );
};

export default SummaryCard;
