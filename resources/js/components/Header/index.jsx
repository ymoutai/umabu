import React from 'react';
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

const MyNameItem = () => {
  return (
    <h1>Moutai</h1>
  );
}

const TitleButton = styled.nav `
  margin-left: auto;
  ul {
    display: flex;
    list-style: none;
  };

  ul li {
    margin-left: 20px;
  };

  ul li span {
    color: #777777;
  };

  ul li a {
    text-decoration: none;
  };
`;

const TitleButtons = () => {
  return (
    <TitleButton>
      <ul>
        <li>
          <Link to="/"><span>Blog</span></Link>
        </li>
        <li>
          <Link to="/profile"><span>Profile</span></Link>
        </li>
        <li>
          <a href="https://www.tocca-net.jp/"><span>Tocca</span></a>
        </li>
      </ul>
    </TitleButton>
  );
}

const TitleArea = styled.div `
  display: flex;
  height:50px;
  align-items: center;
  padding: 0 20px;
`;

function Title() {
  return (
    <TitleArea>
      <MyNameItem />
      <TitleButtons />
    </TitleArea>
  );
}

const MyNameArea = styled.div `
  h2 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 2.5em;
  };
  background: #3BA8E5;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MyNameContainer() {
  return (
    <MyNameArea>
      <h2>UMA BLOG</h2>
    </MyNameArea>
  );
}

const Header = () => {
  return (
    <div className="Top">
      <Title />
      <MyNameContainer />
    </div>
  );
}

export default Header;