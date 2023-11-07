import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Color_Service from "../../../Api/Color_Service";
import { Button, Pagination, Space, Table } from 'antd'

export default function Color_List_Components() {
  const [pageData, setPageData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 2,
    total: 0,
  });
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await Color_Service.getAllColor();
      const data = response.data;
      setPageData(data);
      setPagination({
        ...pagination,
        total: response.total,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const handlePageChange = (page) => {
  //   setPagination({
  //     ...pagination,
  //     current: page,
  //   });
  // };
  const Delete = (e) => {
    console.log(e);
    Color_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa hóa đơn thành công!");
        window.location = "/color";
      }
    });
  };
  const Edit = (e) => {
    console.log(e);
    Color_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/color/${res.data.colorCode}`;
      }
    });
  };
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
    },
    {
      title: 'Action',
      dataIndex: 'colorCode',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button type="primary" onClick={() => Delete(record.colorCode)}>Xóa</Button>
          <Button type="primary" onClick={() => Edit(record.colorCode)}>Edit</Button>
        </Space>
      ),
    },
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
                  <Link className="btn btn-primary" to='/color/add'>ADD</Link>
                </div>
                <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="text" name="searchNgayTao" />
                  <Link to={`/api/bill/search?ngayTao=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div>
              </div>
              <br />
              <Table columns={columns} dataSource={pageData} />
              {/* <Pagination
                defaultCurrent={0}
              /> */}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}