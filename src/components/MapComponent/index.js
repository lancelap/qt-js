import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapGoogle from '../MapGoogle';
import MarkersListContainer from '../MarkersListContainer';
import { loadScriptMap } from '../../utils'
import './MapComponent.css';

class MapComponent extends Component {
  constructor() {
    super();
    this.map = null;
    this.googleMaps = null;
    this.state = {
      loaded: false
    };
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
    });

    this.setState({ loaded: true });
  }

  render() {
    return(
      <div className="map-component">
        <MarkersListContainer
          map={this.map}
          googleMaps={this.googleMaps}
          loadedMap={this.state.loaded}>
          
        </MarkersListContainer>
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

MapComponent.propTypes = {
  lat: PropTypes.number, 
  lng: PropTypes.number, 
  zoom: PropTypes.number, 
  mapTypeId: PropTypes.string
};

export default MapComponent;