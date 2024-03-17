import {axiosInstance} from "../AxiosConfig";

export async function getAllProducts() {

    try{
        const response = await axiosInstance.get('/products');
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

export async function getProductsByCategory(categoryId) {

    try{
        const response = await axiosInstance.get('/products/category/'+categoryId);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

export async function getProductById(id) {

    try{
        const response = await axiosInstance.get('/products/'+id);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        
    }
    
}