import React, {Component} from 'react';
import './Marker.css';
// import Placeholder from './Placeholder';

class Marker extends Component {
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
      <li
        className="marker"
        data-id={id}
        draggable="true"
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDragEnd={dragEnd}
        onDragStart={dragStart}>{text}
        <button className="marker__close" draggable="false" onClick={this.clickHandler(id, deleteMarker)}>X</button>
      </li>
    )
  }

  clickHandler = (id, deleteMarker) => (e) => {
    e.preventDefault();
    deleteMarker(id);
  }
}

export default Marker;