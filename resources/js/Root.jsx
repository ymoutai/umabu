import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// containers
import Top from './containers/Top';
import Profile from './containers/Profile';
import Blog from './containers/Blog';
import NotFound from './containers/NotFound';
import Registration from './containers/Registration';

function Root() {
  return (
    <div className="Root">
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Top />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/blog/:id">
            <Blog />
          </Route>

          <Route exact path="/regstration">
            <Registration />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default Root;