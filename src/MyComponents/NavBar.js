import React from "react";
import propTypes from 'prop-types';

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h5>{props.title }</h5>
          
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/" style={{color:"white" , paddingLeft:"20px" , }}>
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}


NavBar.propTypes ={
  title:propTypes.string.isRequired ,
  aboutText:propTypes.string.isRequired
}

NavBar.defaultProps ={
  title : 'Set Title here',
  aboutText : 'Set About text here'
}