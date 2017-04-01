import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './components/App';
import Main from './components/Main';
import ContentContainer from './components/Content'

ReactDOM.render((
  <Router>
    <App>
      <Main>
        <Route exact path="/:contentId?" component={ContentContainer}/>
      </Main>
    </App>
  </Router>
  ),
document.getElementById('root'))
