import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import { Button, Input, Pagination, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Highlighter from "react-highlight-words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import Employee_Service from "../../../Api/Employee_Service";

export default function Employee_List_Components() {
  const [pageData, setPageData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 50,
            }}
          >
            {/* Search */}
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      (record[dataIndex] &&
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase())) ||
      false,
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
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
    } catch (error) {
      console.log(error);
    }
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
  const searchName = (e) => {
    Color_Service.search(e).then((res) => {
      
    })
  }
  console.log("data", pageData);

  const columns = [
    {
      title: "Name",
      key: "firstName",
      ...getColumnSearchProps('name'),
      render: (record) => `${record.firstName} ${record.lastName}`,
    },

    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (text) => {
        return text === 0 ? 'Nữ' : 'Nam';
      },
      filters: [
        {
          text: 'Nam',
          value: 'Nam',
        },
        {
          text: 'Nữ',
          value: 'Nữ',
        }
      ],
      onFilter: (value, record) => record.gender,
      filterSearch: false,
      width: '20%',
    },

    {
      title: "Ngày tháng năm sinh",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
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
      ...getColumnSearchProps('phoneNumber'),
    },
    {
      title: "Mã hóa mật khẩu",
      dataIndex: "encryptedPassword",
      key: "encryptedPassword",
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
      ...getColumnSearchProps('employeeCode'),
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "employeeCode",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button danger type="primary" onClick={() => Delete(record.employeeCode)}><FontAwesomeIcon icon={faTrash} /></Button>
          <Button type="primary" onClick={() => Edit(record.employeeCode)}><FontAwesomeIcon icon={faPen} /></Button>
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
                  <Link className="btn btn-primary" to='/employee/add'><FontAwesomeIcon icon={faPlus} /></Link>
                </div>
                {/* <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="text" name="colorName" />
                  <Link to={`/color/search?colorName=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div> */}
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
