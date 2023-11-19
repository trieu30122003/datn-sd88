import { instance } from "./instance";
const API = "/product-detail"
class Product_Detail_Service {
  getAllProductDetail() {
    return instance.get(`${API}`);
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
export default new Product_Detail_Service();