// import { useState } from 'react';
// import viteLogo from '/vite.svg';
import Logo from './components/Molecules/Logo/index.tsx';
import { ActionButton } from './components/Atoms/ActionButton/index.tsx';
import './App.css';
import { InputField } from './components/Atoms/InputField/index.tsx';
import { HeaderText } from './components/Atoms/HeaderText/index.tsx';
import SocialMediaLogin from './components/Molecules/SocialMediaLogin/index.tsx';
import SignUpRequest from './components/Molecules/SignUpRequest/index.tsx';
import LoginTitle from './components/Molecules/LoginTitle/index.tsx';
import ImageAtom from './components/Atoms/ImageAtom/index.tsx';
import LoginImage from './assets/LoginImage.png';
//import { useState } from 'react';

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
