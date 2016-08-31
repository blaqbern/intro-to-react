import React, { Component } from 'react'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }
  render() {
    return (
      <div>
        <Header title={'React Todo App'} />
        <AddTodo handleSubmit={newTodo =>
          this.setState({
            todos: [
              ...this.state.todos,
              newTodo,
            ],
          })}
        />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
