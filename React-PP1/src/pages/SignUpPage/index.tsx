import SignUpLeft from '/assets/svgs/SignUpLeft.svg';
import { theme } from '../../theme';
import Icons from '../../components/atoms/Icons';
import SignUpCard from '../../components/organisms/SignUpCard';
import SignUpTemplate from '../../components/templates/SignUpTemplate';

const SignUpPage = () => {
  return (
    <SignUpTemplate
      leftComponent={
        <Icons
          source={SignUpLeft}
          width={theme.spacing(191)}
          alt="Left Section Image"
        />
      }
      rightComponent={<SignUpCard />}
    />
  );
};

export default SignUpPage;
