import { StyledTypograhy } from '../../Atoms/StyledTypography';
import Icon from '../../Atoms/Icon';
import info from '/src/assets/info.png';
import { StyledStack } from '../../Atoms/Stack';

interface SummaryHeaderProp {
  t1?: string;
  src?: React.ReactNode;
}

export const SummaryHeader = ({ t1 }: SummaryHeaderProp) => {
  return (
    <StyledStack
      direction={'row'}
      gap={8}
      customJustify="flex-start"
      customHeight={29}
    >
      <StyledTypograhy size={24} weight={600} customColor={'#E8E7F0'}>
        {t1}
      </StyledTypograhy>
      <Icon source={info} />
    </StyledStack>
  );
};
