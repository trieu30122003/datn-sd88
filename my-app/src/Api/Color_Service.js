import { instance } from "./instance";
const API = "color"
class Color_Service{
  getAllColor(){
        return instance.get(API);
    }
    // getById(id) {
    //     return instance.get(API + "new/" + id);
    // }
    // save(bill){
    //     return instance.post(API + "new/add/", bill);
    // }
    // update(id,bill){
    //     return instance.put(API + "update/"+id,bill);
    // }
    // delete(id){
    //     return instance.put(API + "delete/"+id);
    // }
}
export default new Color_Service();