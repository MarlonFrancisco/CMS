import axios from "axios";
import { getToken } from "./../auth";

const api = axios.create({
    baseURL: process.env.BASE_URL_API,
});

api.interceptors.request.use(async (config) => {
    const token = getToken();

    if (token) {
        config.headers.authorization = token;
    }

    return config;
});

export default api;
