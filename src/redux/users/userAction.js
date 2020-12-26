import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userType";
import axios from "axios";

export const fetchUserReq = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserReq);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUserFailure(error));
      });
  };
};
