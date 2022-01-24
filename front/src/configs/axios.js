import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVEUR,
  timeout: 1000,
});

export const apiMeteo = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
  timeout: 1000,
});
