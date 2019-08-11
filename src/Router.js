import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ClipContainer from './containers/ClipContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/clip' component={ClipContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
