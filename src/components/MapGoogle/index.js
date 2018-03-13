import React, { Component } from 'react';
import './MapGoogle.css';

class MapGoogle extends Component {
  componentDidUpdate() {
    return false;
  }

  render(){  
    return (
      <div 
        className="map-google"
        ref={this.props.mapRef}>
      </div>
    )
  }
}

export default MapGoogle;