import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

import App from './components/App';
import Default from './components/Default';
import NotFound from './components/NotFound';
import AddressBook from './components/AddressBook';
// import Find from './components/Find';
// import Me from './components/Me';


// <Route path='chatMessage' component={ChatMessage} />
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Default} />
      <Route path='/address' component={AddressBook} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

export default routes;
