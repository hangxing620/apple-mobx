import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class AddToDo extends Component {
  handleKeyUp(e) {
    const { addToDoEvent } = this.props.todo
    if (e.key === 'Enter') {
      const taskName = e.target.value
      if (taskName.trim().length === 0) {
        return
      }
      addToDoEvent(taskName)
      e.target.value = ''
    }
  }
	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" onKeyUp={this.handleKeyUp.bind(this)} placeholder="What needs to be done?" />
			</header>
		);
	}
}

export default AddToDo