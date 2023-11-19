import { instance } from "./instance";
const API = "/bill-detail"
class Bill_Detail_Service{
    getAllBill(){
        return instance.get(API);
    }
    getById(id) {
        return instance.get(`${API}/${id}`);
    }
    save(bill){
        return instance.post(API, bill);
    }
    update(id,bill){
        return instance.put(`${API}/${id}`,bill);
    }
    delete(id){
        return instance.put(`${API}/${id}`);
    }
}
export default new Bill_Detail_Service();

