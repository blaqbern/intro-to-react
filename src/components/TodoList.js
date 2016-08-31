import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    )
  }
}
TodoList.propTypes = {
  todos: React.PropTypes.array,
}
