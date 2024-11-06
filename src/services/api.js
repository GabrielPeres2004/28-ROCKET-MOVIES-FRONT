import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-nb4c.onrender.com",
    withCredentials: true
})