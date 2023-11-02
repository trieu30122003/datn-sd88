import { useState } from "react";
import { instance } from "./instance";
const API = "color"
class Color_Service {
  getAllColor() {
    return instance.get(`${API}?page=${9}`);
  }
  getById(id) {
    return instance.get(`${API}/${id}`);
  }
  save(color) {
    return instance.post(API, color);
  }
  update(id,color){
      return instance.put(`${API}/${id}`,color);
  }
  delete(id){
      return instance.delete(`${API}/${id}`);
  }
}
export default new Color_Service();