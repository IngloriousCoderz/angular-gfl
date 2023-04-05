import { listReducer } from './list.reducer';
import { ListActions } from '../app.actions';

describe('Todo List - List Reducer', () => {
  it('should add a new task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = ListActions.addTask({ text: 'New task' });
    const stateAfter = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ];

    const state = listReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should toggle the "completed" property on a task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = ListActions.toggleCompleted({ id: 2 });
    const stateAfter = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    const state = listReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should remove a task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = ListActions.removeTask({ id: 2 });
    const stateAfter = [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    const state = listReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });
});
