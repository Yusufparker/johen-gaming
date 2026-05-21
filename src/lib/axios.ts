import axios from "axios";

const api = axios.create({
    baseURL: "https://mock-api-production-86bb.up.railway.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
