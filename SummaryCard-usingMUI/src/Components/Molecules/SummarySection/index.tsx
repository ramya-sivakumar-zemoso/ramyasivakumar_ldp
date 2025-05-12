import { StyledTypograhy } from '../../Atoms/StyledTypography/index.jsx';
import { SummaryRow } from '../SummaryRow';
import { StyledStack } from '../../Atoms/Stack';
import { data } from '../../../utils/constants';

const SummarySection = () => {
  return (
    <StyledStack>
      <SummaryRow text1={data.term.name} text2={data.term.value}></SummaryRow>
      <SummaryRow
        text1={data.selectedContracts.name}
        text2={data.selectedContracts.value}
      ></SummaryRow>
      <SummaryRow
        text1={data.payBack.name}
        text2={data.payBack.value}
      ></SummaryRow>
      <SummaryRow
        text1={data.rate.name}
        text2={
          <StyledTypograhy
            customColor=" #E8E7F0"
            display={'flex'}
            alignItems={'center'}
            gap={1}
          >
            <StyledTypograhy size={12}>{data.rate.subValue}</StyledTypograhy>
            {data.rate.value}
          </StyledTypograhy>
        }
      ></SummaryRow>
    </StyledStack>
  );
};

export default SummarySection;
