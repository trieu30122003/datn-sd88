import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Color_Service from "../../../Api/Color_Service";
import { Button, Pagination, Space, Table } from 'antd'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPen,faPlus } from '@fortawesome/free-solid-svg-icons'


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
    Color_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/color/${res.data.colorCode}`;
      }
    });
  };
  const searchName = (e) => {
    Color_Service.search(e).then((res) => {
      
    })
  }
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
          <Button danger type="primary" onClick={() => Delete(record.colorCode)}><FontAwesomeIcon icon={faTrash} /></Button>
          <Button type="primary" onClick={() => Edit(record.colorCode)}><FontAwesomeIcon icon={faPen} /></Button>
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
                  <Link className="btn btn-primary" to='/color/add'><FontAwesomeIcon icon={faPlus} /></Link>
                </div>
                <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="text" name="colorName" />
                  <Link to={`/color/search?colorName=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div>
              </div>
              <br />
              <Table columns={columns} dataSource={pageData} pagination={{ pageSize: 5 }}/>
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