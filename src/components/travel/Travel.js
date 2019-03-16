import React, { Component } from 'react';
import './Travel.css';
import {Link} from 'react-router-dom';

class Travel extends Component {
  render() {
    return (
      <div className="Travel">
        Hello and welcome to the travel page!

        Where would you like to go?
        <ul>
          <li><Link to="/travel/Canada">Canada</Link></li>
          <li><Link to="/travel/Sweden">Sweden</Link></li>
          <li><Link to="/travel/Germany">Germany</Link></li>
          <li><Link to="/travel/Hong Kong">Hong Kong</Link></li>
          <li><Link to="/travel/Peru">Peru</Link></li>
        </ul>

      </div>
    );
  }
}

export default Travel;
