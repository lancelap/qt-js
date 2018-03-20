import React, { Component } from 'react';
import MarkersList from './MarkersList';

class MarkersListContainer extends Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  render() {
    return <MarkersList 
      markers={this.state.markers}
      dragStart={this.dragStart} 
      dragEnd={this.dragEnd} 
      dragOver={this.dragOver} 
      dragEnter={this.dragEnter} 
      dragLeave={this.dragLeave} 
      addMarker={this.addMarker} 
      editMarker={this.editMarker}
      deleteMarker={this.deleteMarker}
      {...this.props} />
  }

  dragStart = (e) => {
    this.dragged = e.currentTarget;
    this.dragged.classList.add('drag');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
    this.dragged.style.display = "block";
  }
  
  dragEnd = (e) => {
    let markers = this.state.markers;
    this.dragged.classList.remove('drag');
    this.over.classList.remove('over');
    const from = this.state.markers.findIndex((obj => obj.id === this.dragged.dataset.id));
    let to = this.state.markers.findIndex((obj => obj.id === this.over.dataset.id));
    if(from < to) to--;
    markers.splice(to, 0, markers.splice(from, 1)[0]);
    this.setState({markers});
  }

  dragOver = (e) => {
    e.preventDefault(); 
    this.over = e.target;
  }

  dragEnter = (e) => {
    e.currentTarget.classList.add('over');
  }

  dragLeave = (e) => {
    e.currentTarget.classList.remove('over');
  }

  addMarker = (id, text) => {
    const coordinates = {
      lat: this.props.map.center.lat(), 
      lng: this.props.map.center.lng()
    };
    const marker = {id, text, coordinates};
    this.setState({markers: [...this.state.markers, marker]});
  }

  editMarker = (id, newPosition) => {
    const index = this.state.markers.findIndex((obj => obj.id === id));
    let markers = [...this.state.markers];
    markers[index].coordinates = newPosition;
    this.setState({markers});
  }

  deleteMarker = (id) => {
    const markers = this.state.markers.filter((marker) => {
      if (marker.id === id) {
        return false;
      }
      return true;
    })
    this.setState({markers});
  }
}

export default MarkersListContainer;