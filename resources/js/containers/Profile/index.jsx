import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/animal_stand_uma.png'

const TitleContent = () => {
  return <h1>Profile</h1>;
}

const MyImgStyle = styled.p `
  img {
    height: 15em;
  }
`;

const MyImgContent = () => {
  return <MyImgStyle><img src={Logo} alt="uma" /></MyImgStyle>
}

const MyNameContent = () => {
  return <h2>Name : Moutai</h2>
}

const IntroductionContent = () => {
  return (
    <div>
      <p>株式会社トッカシステムズという会社で勤務しているエンジニア。</p>
      <p>主にLaravelをメインとしてコーディングしています。</p>
      <p>日常的な事からプログラミングに関してまで記事にしています。</p>
    </div>
  );
}

const Profile = () => {
  return (
    <div class="main">
      <TitleContent />
      <MyImgContent />
      <MyNameContent />
      <IntroductionContent />
    </div>
  );
}

export default Profile;