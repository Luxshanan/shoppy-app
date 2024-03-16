
import { BASE_URL } from "../Constants";

const axios = require('axios');

export async function createOrder(order) {
    const response = await axios.post(BASE_URL+`/orderDetails`, order);
    return response.data;
}