import { Routes, Route } from "react-router-dom";
import "../src/style/js/swiper.scss.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home_Page from "./Components/Home/Home_Page";
import Service from "./Components/Home/Service";
import About from "./Components/Home/About";
import Booking from "./Components/Home/Booking";
import Contact from "./Components/Home/Contact";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Sidebar from "./Components/Admin/Layout/Sidebar";
import { APP_ROUTERS } from "./Contants";
import Bill_List_Conponents from "./Components/Admin/Bill/Bill_List_Conponents";
import Bill_Detail_Components from "./Components/Admin/Bill/Bill_Detail_Conponents";
import Bill_Add_Components from "./Components/Admin/Bill/Bill_ViewAdd_Conponents";

import Brand_List_Components from "./Components/Admin/Brand/Brand_List_Component";

import Color_List_Components from "./Components/Admin/Color/Color_List_Components";
import Color_Add_Components from "./Components/Admin/Color/Color_Add_Components";
import Color_Detail_Components from "./Components/Admin/Color/Color_Detail_Components";

import Product_List_Components from "./Components/Admin/Product/Product_List_Components";
import Product_Add_Components from "./Components/Admin/Product/Product_Add_Components";

import Employee_List_Components from "./Components/Admin/Employee/Employee_List_Components";
import Employee_Add_Components from "./Components/Admin/Employee/Employee_Add_Components";
import Employee_Detail_Components from "./Components/Admin/Employee/Employee_Detail_Components"; 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" excact element={<Home_Page />}></Route>
        <Route path="/home" element={<Home_Page />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path={APP_ROUTERS.BILL.INDEX.VALUE} element={<Bill_List_Conponents />}></Route>
        <Route path={APP_ROUTERS.BILL.DETAIL.VALUE} element={<Bill_Detail_Components />}></Route>
        <Route path={APP_ROUTERS.BILL.VIEW_ADD.VALUE} element={<Bill_Add_Components />}></Route>

        <Route path={APP_ROUTERS.COLOR.INDEX.VALUE} element={<Color_List_Components />}></Route>
        <Route path={APP_ROUTERS.COLOR.VIEW_ADD.VALUE} element={<Color_Add_Components />}></Route>
        <Route path={APP_ROUTERS.COLOR.DETAIL.VALUE} element={<Color_Detail_Components />}></Route>

        <Route path={APP_ROUTERS.BRAND.INDEX.VALUE} element={<Brand_List_Components />}></Route>
        
        <Route path={APP_ROUTERS.PRODUCT.INDEX.VALUE} element={<Brand_List_Components />}></Route>

        <Route path={APP_ROUTERS.EMPLOYEE.INDEX.VALUE} element={<Employee_List_Components />}></Route>
        <Route path={APP_ROUTERS.EMPLOYEE.VIEW_ADD.VALUE} element={<Employee_Add_Components />}></Route>
        <Route path={APP_ROUTERS.EMPLOYEE.DETAIL.VALUE} element={<Employee_Detail_Components />}></Route>
      </Routes>
    </div>
  );
}
export default App;
