// import { instance } from "./instance";
import axios from "axios"

const API = "/api/auth";
const PORT = 'http://localhost:8080';
export const instance = axios.create({
    baseURL: PORT,
    // timeout: 10000,
    // withCredentials: true,
    headers: {
      'Authorization': 'Bearer',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  });

class Authentication_Service {

    login(username, password) {
        return instance.post(`${API}/login`, { username: username, password: password });
    }

}
export default new Authentication_Service();