import axios from "axios";
import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  TASKS_LOADING
} from "./types";

// CREATE TASK

export const createTask = taskData => dispatch => {
  axios
    .post("/api/tasks/create", taskData)
    .then(res =>
      dispatch({
        type: CREATE_TASK,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// GET TASKS by Project ID

export const getTasks = id => dispatch => {
  dispatch(setTasksLoading());
  axios
    .get(`/api/tasks/${id}`)
    .then(res =>
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TASKS,
        payload: null
      })
    );
};

// DELETE TASK

export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/tasks/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    )
    .catch(err => console.log(err));
};

// UPDATE TASKS

export const updateTask = taskData => dispatch => {
  axios
    .patch("/api/tasks/update", taskData)
    .then(res =>
      dispatch({
        type: UPDATE_TASK,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// LOADING TASKS

export const setTasksLoading = () => {
  return {
    type: TASKS_LOADING
  };
};