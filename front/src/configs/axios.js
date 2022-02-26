import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVEUR,
  headers: { "X-Custom-Header": "Skew application" },
  timeout: 1000,
});

export const apiSiret = axios.create({
  baseURL: "https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/",
  timeout: 1000,
});
