import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../stores/RootStore";

function ToDoExtra() {
	const { todoStore } = useRootStore();
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{todoStore.unfinishedTodoCount}</strong> item left
			</span>
			<ul className="filters">
				<li>
					<button
						className={todoStore.filter === "all" ? "selected" : ""}
						onClick={() => todoStore.changeFilter("all")}
					>
						All
					</button>
				</li>
				<li>
					<button
						className={todoStore.filter === "active" ? "selected" : ""}
						onClick={() => todoStore.changeFilter("active")}
					>
						Active
					</button>
				</li>
				<li>
					<button
						className={todoStore.filter === "completed" ? "selected" : ""}
						onClick={() => todoStore.changeFilter("completed")}
					>
						Completed
					</button>
				</li>
			</ul>

			<button className="clear-completed">Clear completed</button>
		</footer>
	);
}

export default observer(ToDoExtra);
