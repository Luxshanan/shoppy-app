import {axiosInstance} from "../AxiosConfig";


class AuthService {
  login(email, password) {
    return axiosInstance.post( "/auth/signin", { "email":email, "password": password})
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
    return axiosInstance.post( "/auth/signup", {
      username,
      email,
      password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();