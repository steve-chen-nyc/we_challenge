import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import App from './components/App';
import Main from './components/Main';
import ContentContainer from './containers/ContentContainer'

ReactDOM.render((
  <Router>
    <App>
      <Main>
        <Route path="/:contentId?" component={ContentContainer}/>
      </Main>
    </App>
  </Router>
  ),
document.getElementById('root'))
