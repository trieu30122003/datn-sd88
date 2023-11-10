import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Collar_Service from "../../../Api/Collar_Service";
import { Button, Pagination, Space, Table } from 'antd'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPen,faPlus } from '@fortawesome/free-solid-svg-icons'


export default function Collar_List_Components() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await Collar_Service.getAllCollar();
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
    Collar_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa hóa đơn thành công!");
        window.location = "/color";
      }
    });
  };
  const Edit = (e) => {
    Collar_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/color/${res.data.collarCode}`;
      }
    });
  };
  const searchName = (e) => {
    Collar_Service.search(e).then((res) => {
      
    })
  }
  console.log("data", pageData);

  const columns = [
    {
      title: 'name',
      dataIndex: 'collarName',
      key: 'collarName',
    },
    {
      title: 'Mã cúc áo',
      dataIndex: 'collarCode',
      key: 'collarCode',
    },
    {
      title: 'Action',
      dataIndex: 'collarCode',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button danger type="primary" onClick={() => Delete(record.collarCode)}><FontAwesomeIcon icon={faTrash} /></Button>
          <Button type="primary" onClick={() => Edit(record.collarCode)}><FontAwesomeIcon icon={faPen} /></Button>
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
              <h2 style={{ textAlign: "center" }}>Cúc Áo</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link className="btn btn-primary" to='/collar/add'><FontAwesomeIcon icon={faPlus} /></Link>
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