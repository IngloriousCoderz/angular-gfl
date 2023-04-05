import { createReducer, on } from '@ngrx/store';

import { ListActions } from '../app.actions';
import { Task } from '../task';

export interface ListState {
  tasks: Task[];
}

const initialState: Task[] = [];

export const listReducer = createReducer(
  initialState,

  on(ListActions.receiveTasks, (state, { tasks }) => {
    return tasks;
  })
);

export const selectTasks = (state: ListState) => state.tasks;
