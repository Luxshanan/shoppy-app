import {axiosInstance} from "../AxiosConfig";

export async function createOrder(order) {
    const response = await axiosInstance.post(`/orderDetails`, order);
    return response.data;
}