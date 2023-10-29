import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Brand_Service from "../../../Api/Brand_Service";
import { Table } from 'antd'

export default function Brand_List_Components() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await Brand_Service.getAllBrand();
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
      title: 'Mã hãng',
      dataIndex: 'brandCode',
      key: 'brandCode',
    },
    {
      title: 'Tên hãng',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createDate',
      key: 'createDate',
      render: (text) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      },
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updateDate',
      key: 'updateDate',
      render: (text) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return text === 0 ? 'Đang hoạt động' : 'Không hoạt động';
      },
    },
  ];
  return (
    <>
      <Sidebar />
      <div id="content">
        <main>
          <div className="table-data container">
            <div className="order">
              <h2 style={{ textAlign: "center" }}>Hãng</h2>
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