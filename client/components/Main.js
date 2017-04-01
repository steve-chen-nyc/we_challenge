import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import categoryList from '../data/categoryList';

function Main(props) {
  const linkElements = categoryList.map((item,index) => (
    <li key={index}><NavLink to={`/${item}`}> {item} </NavLink></li>
  ));
  return(
    <div id="mainContainer">
      <div id="categoryNavigation">
        <h3 id="categoryHeadline"> Categories </h3>
        <ul id="categoryList">
          {linkElements}
        </ul>

        <h3 id="pageHeadline"> Pages </h3>
        <ul id="pageList">
          {linkElements}
        </ul>
      </div>
      {props.children}
    </div>
  )
}

export default Main
