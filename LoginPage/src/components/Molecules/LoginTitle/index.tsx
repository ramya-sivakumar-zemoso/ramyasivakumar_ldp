import { HeaderText } from '../../Atoms/HeaderText';
import './index.css';
const LoginTitle = () => {
  return (
    <div>
      <div id="title">
        <HeaderText text="Login to Seeder" />
      </div>
      <div id="SubTitle" />
      <HeaderText text="Enter your mail id and password to login" />
    </div>
  );
};

export default LoginTitle;
