import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.10.118:3000",
  timeout: 5000, // tiempo máximo de espera
});

