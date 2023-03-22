import { createReducer, on } from '@ngrx/store';

import { ListActions } from '../app.actions';

const initialState = [
  { id: 1, text: 'Learn Redux', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
];

export const listReducer = createReducer(
  initialState,

  on(ListActions.addTask, (state, { text }) => {
    const maxId = state.length ? state[state.length - 1].id : 0;
    return [...state, { id: maxId + 1, text }];
  }),

  on(ListActions.toggleCompleted, (state, { id }) => {
    return state.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }),

  on(ListActions.removeTask, (state, { id }) => {
    return state.filter((task) => task.id !== id);
  })
);
