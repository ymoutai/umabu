import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// containers
import Top from './containers/Top';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';

function Root() {
  return (
    <div className="Root">
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Top />
          </Route>

          <Route path="/profile">
            <Profile />
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