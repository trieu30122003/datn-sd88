import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Color_Service from "../../../Api/Color_Service";

export default function Color_List_Components() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await Color_Service.getAllColor();
      const data = response.data;
      setPageData(data);
    } catch (error) {
      console.log(error);
    }
  };
  // const Delete = (e) => {
  //   console.log(e);
  //   Bill_Service.delete(e).then((res) => {
  //     if (res.status === 200) {
  //       alert("Xóa hóa đơn thành công!");
  //       window.location = "/api/bill/new";
  //     }
  //   });
  // };
  console.log("data",pageData);
  return (
    <>
      {/* <Sidebar /> */}
    <h1>.</h1>
    </>
  )
}