import axios from "axios";
import { BASE_URL } from "../Constants";


class AuthService {
  login(email, password) {
    return axios.post(BASE_URL + "/auth/signin", { "email":email, "password": password})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
        
      },err=>{
        throw err;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post(BASE_URL + "/auth/signup", {
      username,
      email,
      password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
    console.log("getCurrentUser",localStorage.getItem('user'))
  }
}
export default new AuthService();