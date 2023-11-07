import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Brand_Service from "../../../Api/Brand_Service";
import { Button, Space, Table } from 'antd'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPen,faPlus } from '@fortawesome/free-solid-svg-icons'
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
  const Delete = (e) => {
    // console.log(e);
    Brand_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa hóa đơn thành công!");
        window.location = "/brand";
      }
    });
  };
  const Edit = (e) => {
    Brand_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/brand/${res.data.brandCode}`;
      }
    });
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
    // {
    //   title: 'Mã hãng',
    //   dataIndex: 'brandCode',
    //   key: 'brandCode',
    // },
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
    {
      title: 'Action',
      dataIndex: 'brandCode',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button danger type="primary" onClick={() => Delete(record.brandCode)}><FontAwesomeIcon icon={faTrash} /></Button>
          <Button type="primary" onClick={() => Edit(record.brandCode)}><FontAwesomeIcon icon={faPen} /></Button>
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
              <h2 style={{ textAlign: "center" }}>Hãng</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link to="/brand/add" className="btn btn-primary">
                  <FontAwesomeIcon icon={faPlus} />
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
              <Table columns={columns} dataSource={pageData}  />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}