import { Task } from 'src/08-api/task';

interface Action {
  type: string;
  payload: string | number;
}

// action types
const ADD_TASK = 'add-task';
const TOGGLE_COMPLETED = 'toggle-completed';
const REMOVE_TASK = 'remove-task';

// action creators
export const addTask = (text: string) => ({ type: ADD_TASK, payload: text });
export const toggleCompleted = (id: number) => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});
export const removeTask = (id: number) => ({ type: REMOVE_TASK, payload: id });

// reducer
export function todoList(state: Task[], action: Action) {
  switch (action.type) {
    case ADD_TASK: {
      const maxId = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: maxId + 1, text: action.payload }];
    }

    case TOGGLE_COMPLETED: {
      // const index = state.findIndex((task) => task.id === action.payload);
      // return [
      //   ...state.slice(0, index),
      //   { ...state[index], completed: !state[index].completed },
      //   ...state.slice(index + 1),
      // ];
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    }

    case REMOVE_TASK: {
      // const index = state.findIndex((task) => task.id === action.payload);
      // return [...state.slice(0, index), ...state.slice(index + 1)];
      return state.filter((task) => task.id !== action.payload);
    }

    default:
      return state;
  }
}

// selectors
export const selectTasks = (state: Task[]) => state;
export const selectTask = (state: Task[], id: number) =>
  state.find((task) => task.id === id);
