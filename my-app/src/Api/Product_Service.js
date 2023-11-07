import { instance } from "./instance";
const API = "product"
class Product_Service {
  getAllColor() {
    return instance.get(`${API}?page=${9}`);
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(product) {
    return instance.post(API, product);
  }
  update(id,product){
      return instance.put(`${API}/${id}`,product);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
}
export default new Product_Service();