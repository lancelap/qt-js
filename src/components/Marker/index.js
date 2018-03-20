import React from 'react';
import PropTypes from 'prop-types';
import './Marker.css';

function Marker(props) {
  const {text, id, deleteMarker, dragStart, dragEnd, dragEnter, dragLeave} = props;
  const clickHandler = (id, deleteMarker) => (e) => {
    e.preventDefault();
    deleteMarker(id);
  }
  
  return(
    <li
      className="marker"
      data-id={id}
      draggable="true"
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragEnd={dragEnd}
      onDragStart={dragStart}>
        {text}
        <button className="marker__close" draggable="false" onClick={clickHandler(id, deleteMarker)}>X</button>
    </li>
  );
}

Marker.propTypes = {
  text: PropTypes.string, 
  id: PropTypes.string, 
  deleteMarker: PropTypes.func, 
  dragStart: PropTypes.func,
  dragEnd: PropTypes.func,
  dragEnter: PropTypes.func,
  dragLeave: PropTypes.func
};

export default Marker;