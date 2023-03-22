// import { todoList } from './todo-list.object';
// import { createTodoList } from './todo-list.factory';
import { TodoList } from './todo-list.class';

describe('Todo List App', () => {
  it('should add a new task', () => {
    // const todoList = createTodoList();
    const todoList = new TodoList();
    todoList.addTask('New task');

    expect(todoList.tasks).toEqual([
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ]);
  });

  it('should toggle the "completed" property on a task', () => {
    // const todoList = createTodoList();
    const todoList = new TodoList();
    todoList.toggleCompleted(2);

    expect(todoList.tasks).toEqual([
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ]);
  });

  it('should remove a task', () => {
    // const todoList = createTodoList();
    const todoList = new TodoList();
    todoList.removeTask(2);

    expect(todoList.tasks).toEqual([
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 3, text: 'Forget everything' },
    ]);
  });
});
