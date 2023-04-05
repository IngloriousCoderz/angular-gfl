import { createActionGroup, props } from '@ngrx/store';
import { Task } from './task';

export const ListActions = createActionGroup({
  source: 'List',
  events: {
    'Fetch Tasks': props<{ error?: any }>(),
    'Receive Tasks': props<{ tasks: Task[] }>(),
    'Add Task': props<{ text: string }>(),
    'Toggle Completed': props<{ id: number }>(),
    'Remove Task': props<{ id: number }>(),
  },
});

// export const addTask = createAction('add-task', props<{ text: string }>());
// export const toggleCompleted = createAction(
//   'toggle-completed',
//   props<{ id: number }>()
// );
// export const removeTask = createAction('remove-task', props<{ id: number }>());
