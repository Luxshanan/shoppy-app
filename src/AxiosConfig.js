import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://5d7cdc4e-3fa4-47d5-a36b-52141669a3ee-dev.e1-us-cdp-2.choreoapis.dev/zyhg/shoppyservice/shoppy-api-5c6/v1.0/api",
    headers: {
        'API-Key': 'key'
    }
});