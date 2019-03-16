import React, { Component } from 'react';
import './Place.css';

class Place extends Component {
  render() {
    return (
      <div className="Place">
        Hello and welcome to the {this.props.match.params.place} page!
      </div>
    );
  }
}

export default Place;
