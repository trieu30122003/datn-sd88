import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Bill_Service from "../../../Api/Bill_Service";
import { Button, Space, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPen,faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Bill_List_Conponents() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await Bill_Service.getAllBill();
      const data = response.data;
      setPageData(data);
    } catch (error) { console.log(error); }
  };
  const Delete = (e) => {
    // console.log(e);
    Bill_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa hóa đơn thành công!");
        window.location = "/bill";
      }
    });
  };
  const columns = [
    {
      title: 'Khách hàng',
      key: 'name',
      // ...getColumnSearchProps('name'),
      render: (record) => `${record.customer.firstName} ${record.customer.lastName}`,
    },
    {
      title: 'Nhân viên',
      key: 'nameEmployee',
      // ...getColumnSearchProps('name'),
      render: (record) => `${record.employee.firstName} ${record.employee.lastName}`,
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'Ngày thanh toán',
      dataIndex: 'paymentDate',
      render: (text) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      },
      key: 'paymentDate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return text === 0 ? 'Đã thanh toán' : 'Chưa thanh toán';
      },
    },
    {
      title: 'Action',
      dataIndex: 'brandCode',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          {/* <Button danger type="primary" onClick={() => Delete(record.billCode)}><FontAwesomeIcon icon={faTrash} /></Button> */}
          <Button type="primary" onClick={() => Edit(record.billCode)}><FontAwesomeIcon icon={faPen} /></Button>
        </Space>
      ),
    },
  ]
  return (
    <>
      <Sidebar />
      <div id="content">
        <main>
          <div className="table-data container">
            <div className="order">
              <h2 style={{ textAlign: "center" }}>Hóa đơn</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link to="/bill/add" className="btn btn-primary">
                    Add
                  </Link>
                </div>
                <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="date" name="searchNgayTao" />
                  <Link to={`/api/bill/search?ngayTao=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div>
              </div>
              <br />
              <Table columns={columns} dataSource={pageData} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}