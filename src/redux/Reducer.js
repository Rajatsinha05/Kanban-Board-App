// reducers.js

import {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  LOGIN,
  SIGNUP,
} from "./ActionType";

const initialState = {
  tasks: [],
  user: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case UPDATE_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      const remainingTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: remainingTasks,
      };

    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case SIGNUP:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
