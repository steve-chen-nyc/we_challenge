import React from 'react';

function ContentItem(props) {
  return (
    <div className="contentContainer">
      <h1>{props.category}</h1>
      <div className="bodyCopyContainer">
        <p>{props.copy}</p>
      </div>

      <div className=" grid imageGallery">
        <div className="cell">
          <img src={props.imageOne}></img>
        </div>

        <div className="cell">
          <img src={props.imageTwo}></img>
        </div>

        <div className="cell">
          <img src={props.imageThree}></img>
        </div>

        <div className="cell">
          <img src={props.imageFour}></img>
        </div>
      </div>

      <div id="secondBodyContainer">
        <div className="bodyCopyContainerTwo">
          <p className="subCopy"> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
           officia deserunt mollit anim id est laborum. </p>
        </div>

        <div className="bodyCopyContainerThree">
          <p className="subCopy"> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
           officia deserunt mollit anim id est laborum. </p>
        </div>
      </div>
    </div>
  )
}

export default ContentItem;
