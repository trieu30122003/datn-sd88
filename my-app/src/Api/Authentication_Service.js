import { PORT, instance } from "./instance";
class Authentication_Service {
    login(username, password) {
        return instance.post(`${PORT}/api/auth/login`, { username: username, password: password });
    }

}
export default new Authentication_Service();