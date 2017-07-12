import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {unmountCanvas, mountCanvas} from '../landing/landingActions';

class Navbar extends Component {
  render() {
    const showCanvas = this.props.showCanvas;
    return(
      <div className="navbar" style={{backgroundColor: showCanvas ? 'rgba(255,255,255,0)' : 'rgb(34,34,34)'}}>
        <div className="navbar-elements">
        <NavLink exact to={showCanvas ? '#' : '/'} onClick={this.props.mountCanvas}>
          <img className="nav-logo" src="https://s3.amazonaws.com/minimal-spaces/heart-400.png"/>
        </NavLink>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink exact
              activeClassName='active' 
              className={showCanvas ? 'nav-link' : 'nav-link-dark' }  
              to="/admissions" 
              onClick={this.props.unmountCanvas}>ADMISSIONS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              activeClassName='active' 
              className={showCanvas ? 'nav-link' : 'nav-link-dark' }  
              to="/learn" 
              onClick={this.props.unmountCanvas}>LEARN MORE</NavLink>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  showCanvas: PropTypes.bool.isRequired,
  unmountCanvas: PropTypes.func.isRequired,
  mountCanvas: PropTypes.func.isRequired
};

const mapStateToProps = ({showCanvas}) => {
  return {
    showCanvas
  };
};

export default withRouter(connect(mapStateToProps, {unmountCanvas, mountCanvas})(Navbar));