import Logo from './components/molecules/Logo/index.tsx';
import { ActionButton } from './components/atoms/ActionButton/index.tsx';
import './App.css';
import { InputField } from './components/atoms/InputField/index.tsx';
import { HeaderText } from './components/atoms/HeaderText/index.tsx';
import SocialMediaLogin from './components/molecules/SocialMediaLogin/index.tsx';
import SignUpRequest from './components/molecules/SignUpRequest/index.tsx';
import LoginTitle from './components/molecules/LoginTitle/index.tsx';
import ImageAtom from './components/atoms/ImageAtom/index.tsx';
import LoginImage from './assets/LoginImage.png';

function App() {
  return (
    <main id="app">
      <section id="left">
        <Logo />
        <ImageAtom source={LoginImage} />
      </section>
      <section id="right">
        <LoginTitle />
        <section>
          <InputField text="Enter your email id" />
          <InputField text="Enter your password" />
        </section>
        <HeaderText text="Forgot Password?" />
        <section id="continue-button">
          <ActionButton button_text="Continue" />
        </section>
        <section>
          <SocialMediaLogin />
        </section>
        <section>
          <SignUpRequest />
        </section>
      </section>
    </main>
  );
}

export default App;
