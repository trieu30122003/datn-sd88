import { instance } from "./instance";
const API = "/size"
class Size_Service {
  getAllSize() {
    return instance.get(`${API}?page=${page}&limit=${limit}&filter=${filter}`);
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(size) {
    return instance.post(API, size);
  }
  update(id,size){
      return instance.put(`${API}/${id}`,size);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
  search(name) {
    return instance.get(`${API}/search?sizeName=${name}`);
  }
}
export default new Size_Service ();