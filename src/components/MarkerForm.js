import React, { Component } from 'react';
import { guid } from '.././utils';

class MarkerForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input style={{width: '196px'}}
          type="text"
          value={this.state.text}
          placeholder="Новая точка маршрута" 
          onChange={this.onChangeMarkerTitle} />
      </form>
    )
  }

  onChangeMarkerTitle = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addMarker(guid(), this.state.text);
    this.setState({text: ''})
  }
}

export default MarkerForm;