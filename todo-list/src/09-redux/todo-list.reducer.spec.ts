import { todoList } from './todo-list.reducer';

describe('Todo List - Redux', () => {
  it('should add a new task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = { type: 'add-task', payload: 'New task' };
    const stateAfter = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ];

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should toggle the "completed" property on a task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = { type: 'toggle-completed', payload: 2 };
    const stateAfter = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should remove a task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = { type: 'remove-task', payload: 2 };
    const stateAfter = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });
});
