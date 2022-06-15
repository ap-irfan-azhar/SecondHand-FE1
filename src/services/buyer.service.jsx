/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/user/?roleName=";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getBuyerBoard = () => {
  return axios.get(API_URL + "BUYER", { headers: authHeader() });
};

const getSellerBoard = () => {
  return axios.get(API_URL + "seller", { headers: authHeader() });
};


export default {
  getPublicContent,
  getBuyerBoard,
  getSellerBoard,
};