import { instance } from "./instance";
const API = "/brand";
class Brand_Service{
  getAllBrand() {
    return instance.get(`${API}`);
    // ?page=${9}
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(brand) {
    return instance.post(API, brand);
  }
  update(id,brand){
      return instance.put(`${API}/${id}`,brand);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
  search(name){
      return instance.get(`${API}/search?colorName=${name}`);
  }
}
export default new Brand_Service();