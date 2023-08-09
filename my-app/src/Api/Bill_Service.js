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
    update(bill,id){
        return instance.put(API + "update/"+id,bill);
    }
}
export default new Bill_Service();