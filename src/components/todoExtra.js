import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class ToDoExtra extends Component {
	render() {
		const { changeFilter, filter, unfinishedTodoCount } = this.props.todo;
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{unfinishedTodoCount}</strong> item left
				</span>
				<ul className="filters">
					<li>
						<button
							className={filter === "all" ? "selected" : ""}
							onClick={() => changeFilter("all")}
						>
							All
						</button>
					</li>
					<li>
						<button
							className={filter === "active" ? "selected" : ""}
							onClick={() => changeFilter("active")}
						>
							Active
						</button>
					</li>
					<li>
						<button
							className={filter === "completed" ? "selected" : ""}
							onClick={() => changeFilter("completed")}
						>
							Completed
						</button>
					</li>
				</ul>

				<button className="clear-completed">Clear completed</button>
			</footer>
		);
	}
}

export default ToDoExtra;
