import axios from "axios"


//base para o backend
const BASE_URL = "https://localhost:8080";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});