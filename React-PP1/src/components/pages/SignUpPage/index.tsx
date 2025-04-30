import Icons from '../../atoms/Icons';
import SignUpCard from '../../organisms/SignUpCard';
import SignUpTemplate from '../../templates/SignUpTemplate';
import SignUpLeft from '/assets/svgs/SignUpLeft.svg';

const SignUpPage = () => {
  return (
    <SignUpTemplate
      leftcomponent={<Icons source={SignUpLeft} width="292px"></Icons>}
      rightcomponent={<SignUpCard></SignUpCard>}
    ></SignUpTemplate>
  );
};

export default SignUpPage;
