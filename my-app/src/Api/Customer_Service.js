import { instance } from "./instance";
const API = "/customer";
class Customer_Service{
  getAllCustomer() {
    return instance.get(`${API}`);
    // ?page=${9}
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(kh) {
    return instance.post(API, kh);
  }
  update(id,kh){
      return instance.put(`${API}/${id}`,kh);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
  search(name){
      return instance.get(`${API}/search?colorName=${name}`);
  }
}
export default new Customer_Service();