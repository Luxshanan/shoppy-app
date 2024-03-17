import {axiosInstance} from "../AxiosConfig";


export async function createUser(user) {
    const response = await axiosInstance.post(`/users`, user);
    
    return response.data;
}
