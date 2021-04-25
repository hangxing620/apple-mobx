import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class ToDoList extends Component {
	render() {
		const { filterTodos, changeToDoStatus, deleteTask } = this.props.todo;
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{filterTodos.map((todo, index) => (
						<li className={todo.isCompleted ? "completed" : ""} key={index}>
							<div className="view">
								<input
									className="toggle"
									type="checkbox"
									onChange={(event) =>
										changeToDoStatus(index, event.target.checked)
									}
									checked={todo.isCompleted}
								/>
								<label>{todo.taskName}</label>
								<button
									className="destroy"
									onClick={() => deleteTask(index)}
								></button>
							</div>
							<input className="edit" />
						</li>
					))}
				</ul>
			</section>
		);
	}
}

export default ToDoList;
