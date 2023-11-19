import { instance } from "./instance";
const API = "/employee"
class Employee_Service {
  getAllEmployee() {
    return instance.get(`${API}`);
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(employee) {
    return instance.post(API, employee);
  }
  update(id,employee){
      return instance.put(`${API}/${id}`,employee);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
  search(employeeCode){
    return instance.get(`${API}/search?employeeCode=${employeeCode}`);
}
}
export default new Employee_Service();