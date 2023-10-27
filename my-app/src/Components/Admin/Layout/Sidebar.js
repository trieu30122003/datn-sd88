import "../../../css/admin.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faMapLocationDot,faPalette } from '@fortawesome/free-solid-svg-icons'
export default function Sidebar() {
  const [value, setValue] = useState("");
  const select = (e) => {
    e.preventDefault();
    setValue("active");
  };
  return (
    <>
      <section id="sidebar">
        <Link to="#" className="brand">
          <span className="text">YoungBoy</span>
        </Link>
        <ul className="side-menu top">
          <li className={value === "customer" ? "active" : ""}>
            <Link to="/admin/customer" onClick={() => setValue("customer")}>
            <FontAwesomeIcon icon={faShirt} />
              <span className="text">Sản phẩm</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
            <i class="bi bi-receipt"></i>
              <span className="text">Bill</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
            <FontAwesomeIcon icon={faMapLocationDot} />
              <span className="text">Địa chỉ</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
              <i class="bi bi-person-lines-fill"></i>
              <span className="text">Hãng</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
            <FontAwesomeIcon icon={faPalette} />
              <span className="text">Màu sắc</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
              <i class="bi bi-person-lines-fill"></i>
              <span className="text">Cúc áo</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
              <i class="bi bi-person-lines-fill"></i>
              <span className="text">Loại</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
              <i class="bi bi-person-lines-fill"></i>
              <span className="text">Khách hàng</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
              <i class="bi bi-person-lines-fill"></i>
              <span className="text">Thiết kế</span>
            </Link>
          </li>
          <li className={value === "bill" ? "active" : ""}>
            <Link to="/api/bill/new" onClick={() => setValue("bill")}>
              <i class="bi bi-person-lines-fill"></i>
              <span className="text">Size</span>
            </Link>
          </li>
          <li className={value === "appointment" ? "active" : ""}>
            <Link
              to="/admin/appointment"
              onClick={() => setValue("appiontment")}
            >
              <i class="bi bi-calendar"></i>
              <span className="text">Appointment</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bxs-message-dots" />
              <span className="text">Message</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bxs-group" />
              <span className="text">Team</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
