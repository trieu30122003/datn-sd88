import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Product_Service from "../../../Api/Product_Service";
import { Button, Pagination, Space, Table } from "antd";

export default function Product_List_Components() {
  const [pageData, setPageData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 2,
    total: 0,
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await Product_Service.getAllProduct();
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
  const handlePageChange = (page) => {
    setPagination({
      ...pagination,
      current: page,
    });
  };
  const Delete = (e) => {
    console.log(e);
    Product_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa sản phẩm thành công!");
        window.location = "/color";
      }
    });
  };
  const Edit = (e) => {
    console.log(e);
    Product_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/product/${res.data.productCode}`;
      }
    });
  };
  console.log("data", pageData);

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Ảnh",
      dataIndex: "mainImage",
      key: "mainImage",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Ngày Tạo",
      dataIndex: "createDate",
      key: "createDate",
      },
    
      {
        title: "Ngày Sửa",
        dataIndex: "updateDate",
        key: "updateDate",
      },

    //   {
    //     title: "Trạng Thái",
    //     dataIndex: "status",
    //     key: "status",
    //   },

    //   {
    //     title: "Số lượng",
    //     dataIndex: "quantity",
    //     key: "quantity",
    //   },

    //   {
    //     title: "Trạng Thái",
    //     dataIndex: "status",
    //     key: "status",
    //   },
    {
      title: "Action",
      dataIndex: "productName",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button type="primary" onClick={() => Delete(record.productName)}>
            Xóa
          </Button>
          <Button type="primary" onClick={() => Edit(record.productName)}>
            Edit
          </Button>
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
              <h2 style={{ textAlign: "center" }}>Sản phẩm</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link className="btn btn-primary" to="/product/add">
                    ADD
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    left: "500px",
                  }}
                >
                  <input
                    className="form-control"
                    type="text"
                    name="searchNgayTao"
                  />
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
  );
}
