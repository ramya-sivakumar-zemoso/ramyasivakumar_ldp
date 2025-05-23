import { StyledDivider } from '../../Atoms/Divider';
import { SummaryHeader } from '../../Molecules/SummaryHeader';
import { SummaryRow } from '../../Molecules/SummaryRow';
import { StyledPaper } from '../../Atoms/Paper';
import { ReviewButton } from '../../Atoms/StyledButton';
import SummarySection from '../../Molecules/SummarySection';
import { StyledTypograhy } from '../../Atoms/StyledTypography';
import { StyledStack } from '../../Atoms/Stack';
import { data } from '../../../utils/constants';

export const SummaryCard = () => {
  return (
    <StyledPaper>
      <SummaryHeader t1={data.summaryHeader}></SummaryHeader>
      <SummarySection></SummarySection>
      <StyledDivider></StyledDivider>
      <StyledStack gap={12} customHeight={29} width={276} customMargin={5}>
        <SummaryRow
          text1={
            <StyledTypograhy size={18} weight={500}>
              {data.total.name}
            </StyledTypograhy>
          }
          text2={
            <StyledTypograhy size={24} weight={600} customColor={'#E8E7F0'}>
              {data.total.value}
            </StyledTypograhy>
          }
        ></SummaryRow>
      </StyledStack>
      <ReviewButton>{data.buttonText}</ReviewButton>
    </StyledPaper>
  );
};
