import { BASE_URL } from "../Constants";
const axios = require('axios');


export async  function getAllCategories() {

    try{
        const response =  await axios.get(BASE_URL+'/productCategories');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

