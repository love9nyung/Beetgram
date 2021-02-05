import axios from "axios";

const api = axios.create({
  baseURL: "http://f5b5983d2303.ngrok.io/",
  headers: { Authorization: localStorage.getItem("token") },
});

export default api;
