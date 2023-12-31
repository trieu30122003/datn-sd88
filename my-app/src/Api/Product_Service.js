import { instance } from "./instance";
const API = "/product"
class Product_Service {
  getAllProduct(page, limit, filter) {
    return instance.get(`${API}?page=${page}&limit=${limit}&filter=${filter}`);

  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(product) {
    return instance.post(API, product);
  }
  update(id, product) {
    return instance.put(`${API}/${id}`, product);
  }
  delete(id) {
    return instance.delete(`${API}/${id}`);
  }
  search(name) {
    return instance.get(`${API}/search?productName=${name}`);
  }
}
export default new Product_Service();