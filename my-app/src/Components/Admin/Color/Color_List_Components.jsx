import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Color_Service from "../../../Api/Color_Service";
import { Table } from 'antd'

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
  console.log("data", pageData);

  const columns = [
    {
      title: 'name',
      dataIndex: 'colorName',
      key: 'colorName',
    },
    {
      title: 'Mã màu',
      dataIndex: 'colorCode',
      key: 'colorCode',
    }
  ];
  return (
    <>
      <Sidebar />
      <div id="content">
        <main>
          <div className="table-data container">
            <div className="order">
              <h2 style={{ textAlign: "center" }}>Màu sắc</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link to="" className="btn btn-primary">
                    Add
                  </Link>
                </div>
                <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="text" name="searchNgayTao" />
                  <Link to={`/api/bill/search?ngayTao=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div>
              </div>
              <br />
              <Table columns={columns} dataSource={pageData} pagination={{ pageSize: 1, }} scroll={{ y: 240, }} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}