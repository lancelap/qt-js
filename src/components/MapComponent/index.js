import React, { Component } from 'react';
import MapGoogle from '../MapGoogle';
import ListOfMarkers from '../ListOfMarkers';
import { loadScriptMap } from '../../utils'
import './MapComponent.css';

class MapComponent extends Component {
  constructor() {
    super();
    this.map = null;
    this.googleMaps = null;
  }

  componentDidMount() {
    loadScriptMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyAiBcx6TQn07d3HmzVfKbJIedwaWHgkuk4&callback=init&libraries=places')
      .then(this.initMap)
      .catch(error => console.error(error))
  }

  initMap = () => {
    const { lat, lng, zoom, mapTypeId } = this.props;
    this.googleMaps = window.google.maps;
    this.map = new this.googleMaps.Map(this.mapRef, {
      center: { lat, lng },
      zoom,
      mapTypeId
    })

    this.forceUpdate();
  }

  render() {
    return(
      <div className="map-component">
        <ListOfMarkers
          map={this.map}
          googleMaps={this.googleMaps}>
        </ListOfMarkers>
        <MapGoogle mapRef={this.getMapRef} />
      </div>
    )
  }

  getMapRef = (ref) => {
    this.mapRef = ref;
  }
}

MapComponent.defaultProps = {
  lat: -33.8688, 
  lng: 151.2195, 
  zoom: 8, 
  mapTypeId: 'roadmap'
};

export default MapComponent;