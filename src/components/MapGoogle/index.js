import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

MapGoogle.propTypes = {
  mapRef: PropTypes.func.isRequired
};

export default MapGoogle;