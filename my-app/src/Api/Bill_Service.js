import { instance } from "./instance";
const API = "api/bill/"
class Bill_Service{
    getAllBill(){
        return instance.get(API+"new");
    }
    getById(id) {
        return instance.get(API + "new/" + id);
    }
    save(bill){
        return instance.post(API + "new/add/", bill);
    }
    update(id,bill){
        return instance.put(API + "update/"+id,bill);
    }
    delete(id){
        return instance.put(API + "delete/"+id);
    }
}
export default new Bill_Service();