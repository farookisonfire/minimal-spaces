import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <img className="nav-logo" src="https://s3.amazonaws.com/minimal-spaces/heart-400.png"/>
        <ul className="nav-items">
          <li className="nav-item"><a className="nav-link" href="#">Apply Now</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Learn More</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;