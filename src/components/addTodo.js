import React from 'react';
import { observer } from 'mobx-react-lite'
import { useRootStore } from "../stores/RootStore";

function AddToDo() {
	const { todoStore } = useRootStore();
  function handleKeyUp(e) {
    if (e.key === 'Enter') {
      const taskName = e.target.value
      if (taskName.trim().length === 0) {
        return
      }
      todoStore.addToDoEvent(taskName)
      e.target.value = ''
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" onKeyUp={handleKeyUp} placeholder="What needs to be done?" />
    </header>
  );
}

export default observer(AddToDo)