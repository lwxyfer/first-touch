import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

import 'amazeui-touch/dist/amazeui.touch.min.css';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
