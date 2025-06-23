import StyledPaper from '../../atoms/StyledPaper';
import StyledTypography from '../../atoms/StyledTypography';
import success from '../../../../src/assets/success.png';
import Icon from '../../atoms/Icon';
import { StyledStack } from '../../atoms/StyledStack';
import theme from '../../../theme/theme';
import DATA from '../../../utils/constants';

const EmailSentBanner = () => {
  return (
    <StyledPaper>
      <StyledStack direction={'row'}>
        <Icon source={success}></Icon>
        <StyledStack>
          <StyledTypography customcolor={theme.palette.primary.main}>
            {DATA.success_banner_title}
          </StyledTypography>

          <StyledTypography customfontsize={theme.spacing(4)}>
            {DATA.success_banner_text}
          </StyledTypography>
        </StyledStack>
      </StyledStack>
    </StyledPaper>
  );
};

export default EmailSentBanner;
