import { BASE_URL } from "../Constants";

const axios = require('axios');

export async function getAllProducts() {

    try{
        const response = await axios.get(BASE_URL+'/products');
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

export async function getProductsByCategory(categoryId) {

    try{
        const response = await axios.get(BASE_URL+'/products/category/'+categoryId);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

export async function getProductById(id) {

    try{
        const response = await axios.get(BASE_URL+'/products/'+id);
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        
    }
    
}