import { instance } from "./instance";
const API = "collar"
class Collar_Service {
  getAllCollar() {
    return instance.get(API);
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(collar) {
    return instance.post(API, collar);
  }
  update(id,collar){
      return instance.put(`${API}/${id}`,collar);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
  // search(name){
  //     return instance.get(`${API}/search?colorName=${name}`);
  // }
}
export default new Collar_Service();