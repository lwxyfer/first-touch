import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';
import 'amazeui-touch/dist/amazeui.touch.min.css';
import {
  Button,
  Card,
  Container,
  Group,
} from 'amazeui-touch';
import TabsExample from './js/tabtest';
import AccordionExample from './js/accordion';
import App from './js/App';
import NotFound from './js/NotFound'


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path=":component" component={AccordionExample} />
      <IndexRoute component={TabsExample} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', ()=>
  ReactDOM.render(routes, document.getElementById('root'))
);
