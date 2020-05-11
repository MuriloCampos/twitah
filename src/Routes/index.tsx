import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Feed} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
