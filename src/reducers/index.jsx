import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import produk from "./produk";

export default combineReducers({
  auth,
  message,
  produk
});
