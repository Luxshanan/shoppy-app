import { BASE_URL } from "../Constants";

const axios = require('axios');


export async function getCartItemsByCart(cartId) {

    try{
        const response = await axios.get(BASE_URL+'/cartItems/carts/'+cartId);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}



export async function addCartItem(cartItem) {
    const response = await axios.post(BASE_URL+`/cartItems`, cartItem);
    console.log("Add CART ITEM @#@##",response)
    return response.data;
}

export async function updateCartItem(cartItem) {
    const response = await axios.patch(BASE_URL+`/cartItems`, cartItem);
    console.log("Update cart Item @#@##",response)
    return response.data;
}

export async function removeCartItem(cartItemId) {
    const response = await axios.delete(BASE_URL+`/cartItems/`+ cartItemId);
    console.log("Delete cart Item @#@##",response)
    return response.data;
}