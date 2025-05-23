import { HeaderText } from '../../atoms/HeaderText';
import { TextLink } from '../../atoms/TextLink';
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
