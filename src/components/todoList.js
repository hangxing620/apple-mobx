import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../stores/RootStore";

function ToDoList() {
	const { todoStore } = useRootStore();
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<ul className="todo-list">
				{todoStore.filterTodos.map((todo, index) => (
					<li className={todo.isCompleted ? "completed" : ""} key={index}>
						<div className="view">
							<input
								className="toggle"
								type="checkbox"
								onChange={(event) =>
									todoStore.changeToDoStatus(index, event.target.checked)
								}
								checked={todo.isCompleted}
							/>
							<label>{todo.taskName}</label>
							<button
								className="destroy"
								onClick={() => todoStore.deleteTask(index)}
							></button>
						</div>
						<input className="edit" />
					</li>
				))}
			</ul>
		</section>
	);
}

export default observer(ToDoList);
