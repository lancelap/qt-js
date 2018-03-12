import { Component } from 'react';

class Polyline extends Component {
  componentDidMount() {
    const { map, googleMaps, coordinates } = this.props;
    this.polyline = new googleMaps.Polyline({
      path: coordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 4
    });
    this.polyline.setMap(map);
  }

  componentWillReceiveProps(nextProps) {
    const { map, googleMaps, coordinates } = nextProps;
    this.polyline.setMap(null);
    this.polyline = new googleMaps.Polyline({
      path: coordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 4
    });
    this.polyline.setMap(map);
  }

  componentWillUnmount() {
    this.polyline.setMap(null);
  }
  
  render() {
    return null;
  }
}

export default Polyline;