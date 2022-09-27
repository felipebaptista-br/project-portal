import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/portal",
})

export default api;
