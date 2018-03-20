import React from 'react';
import PropTypes from 'prop-types';
import MarkerForm from '../MarkerForm';
import GoogleMarker from '../GoogleMarker';
import Polyline from '../Polyline';
import './MarkersList.css';

function MarkersList(props) {
  const { map, 
    googleMaps, 
    loadedMap, 
    markers, 
    addMarker, 
    deleteMarker, 
    editMarker, 
    dragStart, 
    dragEnd, 
    dragEnter, 
    dragLeave, 
    dragOver } = props;
  if(!loadedMap) { return null };
  let markersCoord = [];
  let markersArr = [];

  markers.forEach(marker => {
    markersCoord.push(marker.coordinates);
    markersArr.push(
      <GoogleMarker
        key={marker.id} 
        id={marker.id} 
        text={marker.text}
        coordinates={marker.coordinates}
        deleteMarker={deleteMarker}
        editMarker={editMarker}
        dragStart={dragStart}
        dragEnd={dragEnd}
        dragEnter={dragEnter}
        dragLeave={dragLeave}
        map={map}
        googleMaps={googleMaps}>
      </GoogleMarker>
    )
  });

  return(
    <div>
      <MarkerForm addMarker={addMarker} map={map} />
      <ul className="list-of-markers" onDragOver={dragOver}>
        {markersArr}    
      </ul>
      <Polyline coordinates={markersCoord} map={map} googleMaps={googleMaps}/>
    </div>
  )
}

MarkersList.propTypes = {
  text: PropTypes.string, 
  id: PropTypes.string, 
  deleteMarker: PropTypes.func, 
  dragStart: PropTypes.func,
  dragEnd: PropTypes.func,
  dragEnter: PropTypes.func,
  dragLeave: PropTypes.func
};

export default MarkersList;