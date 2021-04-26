import { observable, action, computed, makeAutoObservable } from 'mobx';

class TodoStore {

  constructor() {
    makeAutoObservable(this, {
      addToDoEvent: action.bound,
      changeToDoStatus: action.bound,
      deleteTask: action.bound,
      changeFilter: action.bound
    })
  }
  // todo 列表
  todos = [];
  // 任务筛选条件
  filter = 'all';
  // 添加任务
  addToDoEvent (taskName) {
    this.todos.push({
      taskName,
      isCompleted: false
    })
  }
  // 修改任务的状态
  changeToDoStatus(index, flag) {
    this.todos[index].isCompleted = flag
  }
  // 删除任务
  deleteTask(index) {
    this.todos.splice(index, 1)
  }

  get unfinishedTodoCount() {
    return this.todos.filter(todo => todo.isCompleted === false).length
  }

  changeFilter(condition) {
    this.filter = condition
  }

  get filterTodos () {
    switch (this.filter) {
      case 'all':
        return this.todos
      case 'active':
        return this.todos.filter(todo => todo.isCompleted === false)
      case 'completed':
        return this.todos.filter(todo => todo.isCompleted === true)
      default:
        return this.todos
    }
  }
}


export default TodoStore;