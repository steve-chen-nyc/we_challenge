import React from 'React';

function Content(props) {
  return(
    <div className="contentContainer">
      <h1> {props.headLine} </h1>
      <div className="bodyCopyContainer">
        <p> {props.bodyCopy }</p>
      </div>

      <div className="row imageGallery">
        <div className="col-md-2 col-md-offset-1">
          <img className="img-responsive" src={props.imageOne} />
        </div>

        <div className="col-md-2">
          <img className="img-responsive" src={props.imageTwo}  />
        </div>

        <div className="col-md-2">
          <img className="img-responsive" src={props.imageThree}  />
        </div>

        <div className="col-md-2">
          <img className="img-responsive" src={props.imageFour}  />
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

export default Content;
