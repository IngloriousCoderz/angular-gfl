import { Task } from 'src/08-api/task';

interface Action {
  type: string;
  payload: string | number;
}

export function todoList(state: Task[], action: Action) {
  switch (action.type) {
    case 'add-task': {
      const maxId = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: maxId + 1, text: action.payload }];
    }

    case 'toggle-completed': {
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

    case 'remove-task': {
      // const index = state.findIndex((task) => task.id === action.payload);
      // return [...state.slice(0, index), ...state.slice(index + 1)];
      return state.filter((task) => task.id !== action.payload);
    }

    default:
      return state;
  }
}
