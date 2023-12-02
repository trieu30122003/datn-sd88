import {
  Routes,
  Route,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom";
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
import NotFound from "./Components/Admin/NotFound/index.js";
import { useEffect } from "react";

function App() {
  const user = getUser();

 useEffect(() => {
  user && <Navigate  to="/" replace={true}/>
 }, [user])
  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route path="/" excact element={<Home_Page />}></Route>
          <Route path="/home" element={<Home_Page />}></Route>
          <Route
            path={APP_ROUTERS.HOME.DETAIL.VALUE}
            element={<Product_detail_page />}
          ></Route>
          <Route
            path={APP_ROUTERS.HOME.ALL.VALUE}
            element={<All_Product />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route
            path={APP_ROUTERS.BILL.INDEX.VALUE}
            element={<Bill_List_Conponents />}
          ></Route>
          <Route
            path={APP_ROUTERS.BILL.DETAIL.VALUE}
            element={<Bill_Detail_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.BILL.VIEW_ADD.VALUE}
            element={<Bill_Add_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.BILL.CONFIRM.VALUE}
            element={<Order_Confirmation />}
          ></Route>

          <Route
            path={APP_ROUTERS.COLOR.INDEX.VALUE}
            element={<Color_List_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.COLOR.VIEW_ADD.VALUE}
            element={<Color_Add_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.COLOR.DETAIL.VALUE}
            element={<Color_Detail_Components />}
          ></Route>

          <Route
            path={APP_ROUTERS.BRAND.INDEX.VALUE}
            element={<Brand_List_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.BRAND.VIEW_ADD.VALUE}
            element={<Brand_Add_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.BRAND.DETAIL.VALUE}
            element={<Brand_Detail_Components />}
          ></Route>

          <Route
            path={APP_ROUTERS.Customer.INDEX.VALUE}
            element={<Customer_List_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.Customer.VIEW_ADD.VALUE}
            element={<Customer_Add_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.Customer.DETAIL.VALUE}
            element={<Customer_Detail_Components />}
          ></Route>

          <Route
            path={APP_ROUTERS.PRODUCT.INDEX.VALUE}
            element={<Product_List_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.PRODUCT.VIEW_ADD.VALUE}
            element={<Product_Add_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.PRODUCT.DETAIL.VALUE}
            element={<Product_Detail_Components />}
          ></Route>

          <Route
            path={APP_ROUTERS.EMPLOYEE.INDEX.VALUE}
            element={<Employee_List_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.EMPLOYEE.VIEW_ADD.VALUE}
            element={<Employee_Add_Components />}
          ></Route>
          <Route
            path={APP_ROUTERS.EMPLOYEE.DETAIL.VALUE}
            element={<Employee_Detail_Components />}
          ></Route>
           <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<NotFound />} path="*" /> 
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<NotFound />} path="*" /> 
        </Routes>
      )}
    </div>
  );
}
export default App;
