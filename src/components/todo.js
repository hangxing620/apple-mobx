import React from 'react'
import AddToDo from './addTodo'
import ToDoList from './todoList'
import ToDoExtra from './todoExtra'
import '../styles/todo.css'

function ToDo() {
  return (
    <div className="todoapp">
      <AddToDo />
      <ToDoList />
      <ToDoExtra />
    </div>
  )
}

export default ToDo