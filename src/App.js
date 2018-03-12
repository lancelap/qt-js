import React, { Component } from 'react';
import MapComponent from './components/MapComponent';

class App extends Component {
  render() {
    return <MapComponent zoom={12}/>;
  }
}

export default App;
