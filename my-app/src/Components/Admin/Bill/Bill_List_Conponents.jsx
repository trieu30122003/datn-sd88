import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Bill_Service from "../../../Api/Bill_Service";
import { Button, Space, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

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
  console.log(pageData);
  const add = () => {
    Bill_Service.getAllBill().then((res) => {
      if (res.status === 200) {
        const lastBill = res.data[res.data.length - 1];
        const lastId = lastBill ? lastBill.id : 0;
        console.log(lastId);
        const newId = lastId + 1;
        const billCode = `HD00${newId.toString().padStart(3, '0')}`;

        const billData = {
          billCode: billCode,
          // other properties
        };

        Bill_Service.save(billData).then((res) => {
          if (res.status === 200) {
            window.location.href = `/bill`;
            // /add?billCode=${newId}
          }
        });
      }
    });
  }
  const Edit = (e) => {
    Bill_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/bill/${res.data.id}`;
      }
    });
  };
  // const Delete = (e) => {
  //   // console.log(e);
  //   Bill_Service.delete(e).then((res) => {
  //     if (res.status === 200) {
  //       alert("Xóa hóa đơn thành công!");
  //       window.location = "/bill";
  //     }
  //   });
  // };

  const columns = [
    {
      title: 'Khách hàng',
      key: 'name',
      // ...getColumnSearchProps('name'),
      render: (record) => {
        if (record.customer) {
          return `${record.customer.firstName} ${record.customer.lastName}`;
        } else {
          return null;
        }
      },
    },
    {
      title: 'Nhân viên',
      key: 'nameEmployee',
      // ...getColumnSearchProps('name'),
      render: (record) => {
        if (record.employee) {
          return `${record.employee.firstName} ${record.employee.lastName}`;
        } else {
          return null;
        }
      },
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      sorter: (a, b) => a.totalAmount - b.totalAmount,
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
      filters: [
        {
          text: 'Đã thanh toán',
          value: 0,
        },
        {
          text: 'Chưa thanh toán',
          value: 1,
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          {/* <Button danger type="primary" onClick={() => Delete(record.billCode)}><FontAwesomeIcon icon={faTrash} /></Button> */}
          <Button type="primary" onClick={() => Edit(record.id)}><FontAwesomeIcon icon={faPen} /></Button>
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
                  <Button onClick={add} className="btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </div>
                <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="date" name="searchNgayTao" />
                  <Link to={`/api/bill/search?ngayTao=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div>
              </div>
              <br />
              <Table columns={columns} dataSource={pageData.listBill} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}