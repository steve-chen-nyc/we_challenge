import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Main from './components/Main.js';
import Bedding from './components/Bedding.js';
import Bath from './components/Bath.js';
import Rooms from './components/Rooms.js';
import Kitchen from './components/Kitchen.js';
import Living from './components/Living.js';
import Cars  from './components/Cars.js';
import Planes  from './components/Planes.js';
import Birds  from './components/Birds.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <App>
      <Main>
        <Route exact path="/" component={Bedding}/>
        <Route path="/bath" component={Bath}/>
        <Route path="/rooms" component={Rooms}/>
        <Route path="/kitchen" component={Kitchen}/>
        <Route path="/living" component={Living}/>
        <Route path="/cars" component={Cars}/>
        <Route path="/birds" component={Birds}/>
        <Route path="/planes" component={Planes}/>
      </Main>
    </App>
  </Router>
  ),
document.getElementById('root'))
