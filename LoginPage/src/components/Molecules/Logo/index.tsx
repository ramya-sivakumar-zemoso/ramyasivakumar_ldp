import { HeaderText } from '../../Atoms/HeaderText';
import ImageAtom from '../../Atoms/ImageAtom';
import logo from '../../../assets/logo.png';
import './index.css';
const Logo = () => {
  return (
    <div id="logo">
      <div>
        <ImageAtom source={logo} />
      </div>
      <div>
        <HeaderText text="Seeder" />
      </div>
    </div>
  );
};

export default Logo;
