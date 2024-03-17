import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://shoppyws-2108198921:8080/api",
    headers: {
        'API-Key': process.env.REACT_APP_API_KEY
    }
});