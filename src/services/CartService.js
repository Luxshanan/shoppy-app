import {axiosInstance} from "../AxiosConfig";


export async function getCartsByUserAndStatus(userId,cartStatus) {

    try{
        const response = await axiosInstance.get('/carts/users/'+userId+'/'+cartStatus);
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getCart(cartId) {
    try{
        const response = await axiosInstance.get('/carts/'+cartId);
        return response.data;
    }catch(error) {
        return {};
    }
    
}


export async function createCart(cart) {
    const response = await axiosInstance.post(`/carts`, cart);
    return response.data;
}

export async function updateCart(cart) {
    const response = await axiosInstance.patch(`/carts`, cart);
    return response.data;
}

export async function removeCart(cartId) {
    const response = await axiosInstance.delete(`/carts/`+ cartId);
    return response.data;
}