import { instance } from "./instance";
const API = "/category";
class Category_Service{
  getAllCategory() {
    return instance.get(`${API}`);
    // ?page=${9}
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(category) {
    return instance.post(API, category);
  }
  update(id,category){
      return instance.put(`${API}/${id}`,category);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
  search(name){
      return instance.get(`${API}/search?categoryName=${name}`);
  }
}
export default new Category_Service();