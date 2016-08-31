import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}
Header.propTypes = {
  title: React.PropTypes.string,
}
