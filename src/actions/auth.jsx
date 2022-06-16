import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  // proses action untuk register ke1 , connect ke API
  return AuthService.register(username, email, password).then(
    // proses action untuk register ke2 , menunggu konfirmasi dari API dari authservice
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return (
    AuthService.login(username, password)
      //Proses action Login ke-2, dia menunggu konfirmasi dari proses AuthService
      .then(
        (data) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { buyer: data },
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(error.response, "utk cek message");
          dispatch({
            type: LOGIN_FAIL,
          });

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        }
      )
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
