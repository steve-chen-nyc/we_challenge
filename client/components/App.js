import React from 'react';
import Login from './Login';
import Navigation from './Navigation';
import Footer from './Footer';


function App(props) {
  return (
    <div>
      <Login />
      <Navigation />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Mark Up Challenge</h1>
        </div>
      </div>
      {props.children}
      <Footer />
    </div>
  )
}

export default App;
