import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <App>
      <Route exact path='/' component={Home}/>
    </App>
  </Router>
  ),
document.getElementById('root'))
