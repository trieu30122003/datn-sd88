import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Employee_Service from "../../../Api/Employee_Service";
import { Button, Pagination, Space, Table } from "antd";

export default function Employee_List_Components() {
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
      // const response = await axios.get('/api/some-endpoint');
      const response = await Employee_Service.getAllEmployee();
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
    Employee_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa nhân viên thành công!");
        window.location = "/employee";
      }
    });
  };
  const Edit = (e) => {
    console.log(e);
    Employee_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/employee/${res.data.employeeCode}`;
      }
    });
  };
  console.log("data", pageData);

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Tên Đệm",
      dataIndex: "lastName",
      key: "lastName",
    },

    {
      title: "Giới Tính",
      dataIndex: "gender",
      key: "gender",
    },

    {
      title: "Ngày tháng năm sinh",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (text) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Mã hóa mật khẩu",
      dataIndex: "encryptedPassword",
      key: "encryptedPassword",
    },
    {
      title: "Ngày Tạo",
      dataIndex: "createDate",
      key: "createDate",
      render: (text) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      },
    },
    {
      title: "Ngày Sửa",
      dataIndex: "updateDate",
      key: "updateDate",
      render: (text) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      },
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Mã Nhân Viên",
      dataIndex: "employeeCode",
      key: "employeeCode",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        return text === 0 ? "Làm việc" : "Nghỉ việc";
      },
    },
    {
      title: "Action",
      dataIndex: "employeeCode",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button type="primary" onClick={() => Delete(record.employeeCode)}>
            Xóa
          </Button>
          <Button type="primary" onClick={() => Edit(record.employeeCode)}>
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
              <h2 style={{ textAlign: "center" }}>Nhân Viên</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link className="btn btn-primary" to="/employee/add">
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
