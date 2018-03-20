import React, {Component} from 'react';
import Marker from './Marker';

class GoogleMarker extends Component {
  componentDidMount() {
    const { map, googleMaps, text, coordinates, editMarker, id } = this.props;
    const infoWindow = new googleMaps.InfoWindow({
      content: text
    });
    this.marker = new googleMaps.Marker({
      position: coordinates, 
      map, 
      draggable: true
    });
    this.markerListner = () => {
      infoWindow.open(map, this.marker);
    };
    this.clickListner = this.marker.addListener('click', () => {
      infoWindow.open(map, this.marker);
    });
    this.dragendListner = this.marker.addListener('dragend', () => {
      const coordinates = {
        lat: this.marker.getPosition().lat(), 
        lng: this.marker.getPosition().lng()
      };
      editMarker(id, coordinates);
    });
    this.marker.setMap(map);
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.props.googleMaps.event.clearInstanceListeners(this.marker);
  }

  render() { 
    const {text, id, deleteMarker, dragStart, dragEnd, dragEnter, dragLeave} = this.props;
    return(
      <Marker
        id={id}
        dragEnter={dragEnter}
        dragLeave={dragLeave}
        dragEnd={dragEnd}
        dragStart={dragStart}
        deleteMarker={deleteMarker}
        text={text} />
    )
  }
}

export default GoogleMarker;