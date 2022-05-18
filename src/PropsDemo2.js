import React, { Component } from 'react'

export default class PropsDemo2 extends Component {
  render() {
      
    return (
      <div>
          {this.props.a} and {this.props.b}
      </div>
    )
  }
}
