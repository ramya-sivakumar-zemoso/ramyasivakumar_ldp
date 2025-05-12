import StyledPaper from '../../Atoms/StyledPaper';
import StyledTypography from '../../Atoms/StyledTypography';
import success from '../../../../src/assets/success.png';
import Icon from '../../Atoms/Icon';

import { StyledStack } from '../../Atoms/StyledStack';

const EmailSentBanner = () => {
  return (
    <StyledPaper>
      <StyledStack direction={'row'}>
        <Icon source={success}></Icon>
        <StyledStack>
          <StyledTypography customcolor="#e8e7f0">
            Reset email sent
          </StyledTypography>

          <StyledTypography customfontsize={14}>
            We have sent mail to yourmail@gmail.com with reset password
            instructions
          </StyledTypography>
        </StyledStack>
      </StyledStack>
    </StyledPaper>
  );
};

export default EmailSentBanner;
