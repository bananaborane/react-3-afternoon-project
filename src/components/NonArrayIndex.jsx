import React, { Component } from 'react'

class NonArrayIndex extends Component {
  render() {
    return (
      <div>
        <b>
            {this.props.currentIndex + 1}/{this.props.currentArrayLength}
        </b>
      </div>
    )
  }
}

export default NonArrayIndex
