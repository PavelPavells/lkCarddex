import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, LOGIN_SUCCESS_AUTH0, LOGIN_FAILURE_AUTH0 } from "./types";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/"))
    .catch(err => {
      //if(err.status === 200 || err.status === 400 || err.status === 404) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data            
        })
      //}
    });
};

// Login with AUTH0

export const loginSuccessAuth0 = () => dispatch => {
  return {
    type: LOGIN_SUCCESS_AUTH0
  }
}
export const loginFailureAuth0 = () => dispatch => {
  return {
    type: LOGIN_FAILURE_AUTH0
  }
}

// Login - get user token

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { session_token } = res.data;
      localStorage.setItem("jwtTokenTeams", session_token);
      // Set token to Auth header
      setAuthToken(session_token);
      // Decode token to get user data
      const decoded = jwt_decode(session_token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      //if(err.status === 200 || err.status === 400 || err.status === 404) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data            
        })
      //}
    });
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = history => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtTokenTeams");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  history.push("/dashboard");
};