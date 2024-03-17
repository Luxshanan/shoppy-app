import {axiosInstance} from "../AxiosConfig";


export async function getCartItemsByCart(cartId) {

    try{
        const response = await axiosInstance.get('/cartItems/carts/'+cartId);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}



export async function addCartItem(cartItem) {
    const response = await axiosInstance.post(`/cartItems`, cartItem);
    console.log("Add CART ITEM @#@##",response)
    return response.data;
}

export async function updateCartItem(cartItem) {
    const response = await axiosInstance.patch(`/cartItems`, cartItem);
    console.log("Update cart Item @#@##",response)
    return response.data;
}

export async function removeCartItem(cartItemId) {
    const response = await axiosInstance.delete(`/cartItems/`+ cartItemId);
    console.log("Delete cart Item @#@##",response)
    return response.data;
}