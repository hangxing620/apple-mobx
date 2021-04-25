import { observable, action, computed } from 'mobx';

class TodoStore {
  // todo 列表
  @observable todos = [];
  // 任务筛选条件
  @observable filter = 'all';
  // 添加任务
  @action.bound addToDoEvent (taskName) {
    this.todos.push({
      taskName,
      isCompleted: false
    })
  }
  // 修改任务的状态
  @action.bound changeToDoStatus(index, flag) {
    this.todos[index].isCompleted = flag
  }
  // 删除任务
  @action.bound deleteTask(index) {
    this.todos.splice(index, 1)
  }

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => todo.isCompleted === false).length
  }

  @action.bound changeFilter(condition) {
    this.filter = condition
  }

  @computed get filterTodos () {
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

const todo = new TodoStore();

export default todo;