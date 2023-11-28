import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import "../src/style/js/swiper.scss.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home_Page from "./Components/Home/Home_Page.jsx";
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

import Color_List_Components from "./Components/Admin/Color/Color_List_Components";
import Color_Add_Components from "./Components/Admin/Color/Color_Add_Components";
import Color_Detail_Components from "./Components/Admin/Color/Color_Detail_Components";

import Brand_Add_Components from "./Components/Admin/Brand/Brand_Add_Components";
import Brand_Detail_Components from "./Components/Admin/Brand/Brand_Detail_Components";
import Brand_List_Components from "./Components/Admin/Brand/Brand_List_Component";

import Customer_List_Components from "./Components/Admin/Customer/Customer_List_Components";
import Customer_Add_Components from "./Components/Admin/Customer/Customer_Add_Conponents";
import Customer_Detail_Components from "./Components/Admin/Customer/Customer_Detail_Components";


import Product_List_Components from "./Components/Admin/Product/Product_List_Components";
import Product_Add_Components from "./Components/Admin/Product/Product_Add_Components";
import Product_Detail_Components from "./Components/Admin/Product/Product_Detail_Components.jsx";

import Employee_List_Components from "./Components/Admin/Employee/Employee_List_Components";
import Employee_Add_Components from "./Components/Admin/Employee/Employee_Add_Components";
import Employee_Detail_Components from "./Components/Admin/Employee/Employee_Detail_Components";

import Product_detail_page from "./Components/Home/Product_detail._page";
import Order_Confirmation from "./Components/Admin/Bill/Order_Confirmation";
import All_Product from "./Components/Home/All_Product";
import LoginForm from "./Components/Account/Login.jsx";
import { getUser } from "./Utils/index.js";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(!getUser) return navigate('/login');
  // }, [getUser])
 
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" excact element={getUser && <Home_Page />}></Route>
        <Route path="/home" element={<Home_Page />}></Route>
        <Route path={APP_ROUTERS.HOME.DETAIL.VALUE} element={getUser && <Product_detail_page />}></Route>
        <Route path={APP_ROUTERS.HOME.ALL.VALUE} element={getUser && <All_Product />}></Route>
        <Route path="/about" element={getUser && <About />}></Route>
        <Route path="/service" element={getUser && <Service />}></Route>
        <Route path="/booking" element={getUser && <Booking />}></Route>
        <Route path="/contact" element={getUser && <Contact />}></Route>

        <Route path={APP_ROUTERS.BILL.INDEX.VALUE} element={getUser && <Bill_List_Conponents />}></Route>
        <Route path={APP_ROUTERS.BILL.DETAIL.VALUE} element={getUser && <Bill_Detail_Components />}></Route>
        <Route path={APP_ROUTERS.BILL.VIEW_ADD.VALUE} element={getUser && <Bill_Add_Components />}></Route>
        <Route path={APP_ROUTERS.BILL.CONFIRM.VALUE} element={getUser && <Order_Confirmation />}></Route>

        <Route path={APP_ROUTERS.COLOR.INDEX.VALUE} element={getUser && <Color_List_Components />}></Route>
        <Route path={APP_ROUTERS.COLOR.VIEW_ADD.VALUE} element={getUser && <Color_Add_Components />}></Route>
        <Route path={APP_ROUTERS.COLOR.DETAIL.VALUE} element={getUser && <Color_Detail_Components />}></Route>

        <Route path={APP_ROUTERS.BRAND.INDEX.VALUE} element={getUser && <Brand_List_Components />}></Route>
        <Route path={APP_ROUTERS.BRAND.VIEW_ADD.VALUE} element={getUser && <Brand_Add_Components />}></Route>
        <Route path={APP_ROUTERS.BRAND.DETAIL.VALUE} element={getUser && <Brand_Detail_Components />}></Route>

        <Route path={APP_ROUTERS.Customer.INDEX.VALUE} element={getUser && <Customer_List_Components />}></Route>
        <Route path={APP_ROUTERS.Customer.VIEW_ADD.VALUE} element={getUser && <Customer_Add_Components />}></Route>
        <Route path={APP_ROUTERS.Customer.DETAIL.VALUE} element={getUser && <Customer_Detail_Components />}></Route>

        <Route path={APP_ROUTERS.PRODUCT.INDEX.VALUE} element={getUser && <Product_List_Components />}></Route>
        <Route path={APP_ROUTERS.PRODUCT.VIEW_ADD.VALUE} element={getUser && <Product_Add_Components />}></Route>
        <Route path={APP_ROUTERS.PRODUCT.DETAIL.VALUE} element={getUser && <Product_Detail_Components />}></Route>

        <Route path={APP_ROUTERS.EMPLOYEE.INDEX.VALUE} element={getUser && <Employee_List_Components />}></Route>
        <Route path={APP_ROUTERS.EMPLOYEE.VIEW_ADD.VALUE} element={getUser && <Employee_Add_Components />}></Route>
        <Route path={APP_ROUTERS.EMPLOYEE.DETAIL.VALUE} element={getUser && <Employee_Detail_Components />}></Route>
      </Routes>
    </div>
  );
}
export default App;
