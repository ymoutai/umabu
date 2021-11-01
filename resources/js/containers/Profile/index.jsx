import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/animal_stand_uma.png'

const Title = styled.h1`
  padding-top: 1em;
`;

const TitleContent = () => {
  return <Title>Profile</Title>;
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

const Main = styled.div`
  text-align:center;
`;

const Profile = () => {
  return (
    <Main>
      <TitleContent />
      <MyImgContent />
      <MyNameContent />
      <IntroductionContent />
    </Main>
  );
}

export default Profile;