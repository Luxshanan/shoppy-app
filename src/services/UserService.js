import { BASE_URL } from "../Constants";

const axios = require('axios');


export async function createUser(user) {
    const response = await axios.post(BASE_URL+`/users`, user);
    
    return response.data;
}
