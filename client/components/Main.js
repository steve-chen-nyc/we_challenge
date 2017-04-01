import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

function Main(props) {
  return(
    <div id="mainContainer">
      <div id="categoryNavigation">
        <h3 id="categoryHeadline"> Categories </h3>
        <ul id="categoryList">
          <li><Link to="/Bedding"> Bedding </Link></li>
          <li><Link to="/Bath"> Bath </Link></li>
          <li><Link to="/Rooms"> Rooms </Link> </li>
          <li><Link to="/Kitchen"> Kitchen </Link></li>
          <li><Link to="/Living"> Living </Link></li>
          <li><Link to="/Cars"> Cars </Link></li>
          <li><Link to="/Birds"> Birds </Link></li>
          <li><Link to="/Planes"> Planes </Link></li>
        </ul>

        <h3 id="categoryHeadline"> Pages </h3>
        <ul id="categoryList">
          <li><Link to="/bedding"> Bedding </Link></li>
          <li><Link to="/bath"> Bath </Link></li>
          <li><Link to="/rooms"> Rooms </Link> </li>
          <li><Link to="/kitchen"> Kitchen </Link></li>
          <li><Link to="/living"> Living </Link></li>
          <li><Link to="/cars"> Cars </Link></li>
          <li><Link to="/birds"> Birds </Link></li>
          <li><Link to="/planes"> Planes </Link></li>
        </ul>
      </div>
      {props.children}
    </div>
  )
}


export default Main
