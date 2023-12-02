import { instance } from "./instance";
const API = "/product-detail"
class Product_Detail_Service {
  getAllProductDetail() {
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
    return instance.get(`${API}/search?productDetail=${name}`);
  }
}
export default new Product_Detail_Service();