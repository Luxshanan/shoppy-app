
import { BASE_URL } from "../Constants";
const axios = require('axios');


export async function getCartsByUserAndStatus(userId,cartStatus) {

    try{
        const response = await axios.get(BASE_URL+'/carts/users/'+userId+'/'+cartStatus);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

export async function getCart(cartId) {
    try{
        const response = await axios.get(BASE_URL+'/carts/'+cartId);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return {};
    }
    
}


export async function createCart(cart) {
    const response = await axios.post(BASE_URL+`/carts`, cart);
    return response.data;
}

export async function updateCart(cart) {
    const response = await axios.patch(BASE_URL+`/carts`, cart);
    return response.data;
}

export async function removeCart(cartId) {
    const response = await axios.delete(BASE_URL+`/carts/`+ cartId);
    return response.data;
}