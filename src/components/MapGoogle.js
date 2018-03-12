import React, { Component } from 'react';

class MapGoogle extends Component {
  componentDidUpdate() {
    return false;
  }

  render(){  
    return (
      <div 
        style={{width: '400px', height: '400px'}} 
        ref={this.props.mapRef}>
      </div>
    )
  }
}

export default MapGoogle;