import { HeaderText } from '../../Atoms/HeaderText';
import { TextLink } from '../../Atoms/TextLink';
import './index.css';
const SignUpRequest = () => {
  return (
    <div id="sign-up">
      <HeaderText text="Don't have an account?" />
      <div id="link">
        <TextLink link_text="Sign Up" />
      </div>
    </div>
  );
};
export default SignUpRequest;
