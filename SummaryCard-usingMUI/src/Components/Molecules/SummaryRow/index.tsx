import { StyledStack } from '../../Atoms/Stack';
import { StyledTypograhy } from '../../Atoms/StyledTypography';
// import './SummaryRow.css';

interface SummaryRowProp {
  text1?: string | React.ReactNode;
  text2?: string | React.ReactNode;
}

export const SummaryRow = ({ text1, text2 }: SummaryRowProp) => {
  return (
    <StyledStack direction={'row'}>
      <StyledTypograhy>{text1}</StyledTypograhy>
      <StyledTypograhy customColor=" #E8E7F0">{text2}</StyledTypograhy>
    </StyledStack>
  );
};
