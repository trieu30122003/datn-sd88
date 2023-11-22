import { instance } from "./instance";

const API = "/api/auth";
class Authentication_Service {

    login(username, password) {
        return instance.post(`${API}/login`, { username: username, password: password });
    }

}
export default new Authentication_Service();