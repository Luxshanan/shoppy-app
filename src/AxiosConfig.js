import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://shoppyservice-854388473:8080/api",
    headers: {
        'API-Key': 'key'
    }
});