import React from 'react';
import { Link }  from 'react-router-dom';

function Navigation() {
  return (
      <div>
        <div>
          <Link to="/"><img id="logo" src="../assets/west_elm_logo.png"></img></Link>
        </div>
        <ul className="nav nav-tabs">
          <li role="presentation"> <a href="#">Home</a> </li>
          <li role="presentation"><a href="#">About</a> </li>
          <li role="presentation" className="active"> <a href="#">Take The Challenge </a> </li>
        </ul>
      </div>
  )
}

export default Navigation;
