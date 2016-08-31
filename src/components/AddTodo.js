import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.handleSubmit(this.state.value)
            this.setState({ value: '' })
          }}
        >
          +ADD
        </button>
      </div>
    )
  }
}
AddTodo.propTypes = {
  handleSubmit: React.PropTypes.func,
}
