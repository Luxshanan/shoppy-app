import {axiosInstance} from "../AxiosConfig";

export async  function getAllCategories() {

    try{
        const response =  await axiosInstance.get('/productCategories');
        return response.data;
    }catch(error) {
        return [];
    }
    
}

