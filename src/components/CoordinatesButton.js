import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  positionOfMouse = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.positionOfMouse}>
      </button>
    )
  }
}