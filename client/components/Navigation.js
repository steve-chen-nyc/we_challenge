import React from 'react';

function Navigation(props) {
  return (
      <div>
        <div>
          <img id="logo" src="../client/assets/west_elm_logo.png"></img>
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
