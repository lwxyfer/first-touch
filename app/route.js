import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

import App from './components/App';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Default} />
      <Route path=":component" component={Detail} />
    </Route>
  </Router>
);

export default routes;
