import { Component } from 'react';

class Polyline extends Component {
  componentDidMount() {
    const { map, googleMaps, coordinates } = this.props;
    this.polyline = createPolyline(googleMaps, coordinates);
    this.polyline.setMap(map);
  }

  componentWillReceiveProps(nextProps) {
    const { map, googleMaps, coordinates } = nextProps;
    this.polyline.setMap(null);
    this.polyline = createPolyline(googleMaps, coordinates);
    this.polyline.setMap(map);
  }

  componentWillUnmount() {
    this.polyline.setMap(null);
  }
  
  render() {
    return null;
  }
}

function createPolyline(googleMaps, coordinates) {
  return(
    new googleMaps.Polyline({
      path: coordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 4
    })
  )
}

export default Polyline;