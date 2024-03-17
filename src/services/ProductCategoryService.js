import {axiosInstance} from "../AxiosConfig";

export async  function getAllCategories() {

    try{
        const response =  await axiosInstance.get('/productCategories');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        console.log('error  ', error)
        return [];
    }
    
}

