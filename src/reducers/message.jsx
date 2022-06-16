/* eslint-disable import/no-anonymous-default-export */
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //Mengirim message dari backend, untuk disimpan di global store, berlaku semua message.
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
