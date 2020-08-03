import React from 'react'

export default class DelayedButton extends React.Component {

  handleOnClick = (event) => {
    event.persist()

    setTimeout( () =>
      this.props.delay, this.props.onDelayedClick(event))
  }

  render() {
    return (
      <button
        onClick={ this.handleOnClick } >
      </button>
    )
  }
}