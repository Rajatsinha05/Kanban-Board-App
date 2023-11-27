// actions.js

import axios from "axios";
import {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  LOGIN,
  SIGNUP,
} from "./ActionType";

// Action creators

// Task actions
const getTasksSuccess = (tasks) => ({
  type: GET_TASKS,
  payload: tasks,
});

const createTaskSuccess = (task) => ({
  type: CREATE_TASK,
  payload: task,
});

const updateTaskSuccess = (taskId, updatedTask) => ({
  type: UPDATE_TASK,
  payload: { taskId, updatedTask },
});

const deleteTaskSuccess = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

// Auth actions
const loginSuccess = (userData) => ({
  type: LOGIN,
  payload: userData,
});

const signupSuccess = (userData) => ({
  type: SIGNUP,
  payload: userData,
});

// Thunk actions

const handleApiError = (error, actionName) => {
  console.log(`Error ${actionName}:`, error.message);
  // Handle the error as needed, e.g., show an error message to the user
};

const getTasks = (token ) => async (dispatch) => {
  try {
    const response = await axios.get("https://kanban-board.cyclic.app/task", {
      headers: {
        Authorization: token
        
      }
    });
    dispatch(getTasksSuccess(response.data));
  } catch (error) {
    handleApiError(error, "fetching tasks");
  }
};

const createTask = (taskData,token) => async (dispatch) => {
  console.log('token: ', token);
  try {
    const response = await axios.post(
      "https://kanban-board.cyclic.app/task/create",
      taskData, {
        headers: {
          Authorization: token
          
        }
      }
    );
    dispatch(createTaskSuccess(response.data));
  } catch (error) {
    handleApiError(error, "creating task");
  }
};

const updateTask = (taskId, updatedTaskData,token) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `https://kanban-board.cyclic.app/task/update/${taskId}`,
      updatedTaskData, {
        headers: {
          Authorization: token
          
        }
      }
    );
    dispatch(updateTaskSuccess(taskId, response.data));
  } catch (error) {
    handleApiError(error, "updating task");
  }
};

const deleteTask = (taskId,token) => async (dispatch) => {
  try {
    await axios.delete(`https://kanban-board.cyclic.app/task/delete/${taskId}`, {
      headers: {
        Authorization: token
        
      }
    });
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    handleApiError(error, "deleting task");
  }
};

const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://kanban-board.cyclic.app/user/login",
      userData
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    handleApiError(error, "logging in");
  }
};

const signup = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://kanban-board.cyclic.app/user/signup",
      userData
    );
    dispatch(signupSuccess(response.data));
  } catch (error) {
    handleApiError(error, "signing up");
  }
};

export {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  login,
  signup,
  loginSuccess
};
