import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink className="navlink" exact to="/" activeClassName="active">Home</NavLink>
        <NavLink className="navlink" to="/travel" activeClassName="active">Travel</NavLink>
        <NavLink className="navlink" to="/about" activeClassName="active">About</NavLink>
      </div>
    );
  }
}

export default Header;
