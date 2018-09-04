import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import LandinPage from './components/Landing';
import SignInPage from './components/SignIn';
import HomePage from './components/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandinPage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/sigin" exact component={SignInPage} />
        </Switch>
    </BrowserRouter>
  );

export default Routes;