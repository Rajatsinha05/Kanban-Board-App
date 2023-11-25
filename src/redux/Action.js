// actions.js

import axios from 'axios';
import {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  LOGIN,
  SIGNUP,
} from './ActionType';

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

// Thunk action for getting tasks
const getTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('https://kanban-board.cyclic.app/task');
    dispatch(getTasksSuccess(response.data));
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

// Thunk action for creating a task
const createTask = (taskData) => async (dispatch) => {
  try {
    const response = await axios.post('https://kanban-board.cyclic.app/task/create', taskData);
    dispatch(createTaskSuccess(response.data));
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

// Thunk action for updating a task
const updateTask = (taskId, updatedTaskData) => async (dispatch) => {
  try {
    const response = await axios.patch(`https://kanban-board.cyclic.app/task/update${taskId}`, updatedTaskData);
    dispatch(updateTaskSuccess(taskId, response.data));
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

// Thunk action for deleting a task
const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`https://kanban-board.cyclic.app/task/delete/${taskId}`);
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

// Thunk action for user login
const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://kanban-board.cyclic.app/user/login', userData);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Thunk action for user sign up
const signup = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://kanban-board.cyclic.app/user/signup', userData);
    dispatch(signupSuccess(response.data));
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

export {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  login,
  signup,
};
