import { instance } from "./instance";
const API = "brand";
class Brand_Service{
  getAllBrand(){
        return instance.get(API);
    }
}
export default new Brand_Service();