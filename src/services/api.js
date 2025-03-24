import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090/api/notas-fiscais",
});

export default api;
