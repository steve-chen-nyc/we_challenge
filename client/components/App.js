import React, { Component } from 'react';
import Login from './Login';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
        <Login />
        {this.props.children}
        <Footer /> 
      </div>
    )
  }
}

export default App;
