import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import { Button, Input, Pagination, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Highlighter from "react-highlight-words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import Product_Detail_Service from "../../../Api/Product_Detail_Service";
impor


export default function Product_List_Components() {
  const [pageData, setPageData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    if (selectedKeys && selectedKeys.length > 0) {
      fetchData(1, 10, selectedKeys[0])
      setFilter(selectedKeys[0])
    }
    // confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
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
    fetchData(1, 10, '');
  }, []);

  const fetchData = async (page, limit, filter) => {
    try {
      const response = await Product_Detail_Service.getAllProductDetail(page, limit, filter);
      setPageData(response.data.list);
      setTotal(response.data.total)
    } catch (error) {
      console.log(error);
    }
  };

  const Delete = (e) => {
    console.log(e);
    Product_Detail_Service.delete(e).then((res) => {
      if (res.status === 200) {
        alert("Xóa sản phẩm thành công!");
        window.location = "/product";
      }
    });
  };
  const Edit = (e) => {
    console.log(e);
    debugger
    Product_Detail_Service.getById(e).then((res) => {
      if (res.status === 200) {
        // alert("Xóa hóa đơn thành công!");
        window.location = `/product/${res.data.id}`;
      }
    });
  };
  console.log("data", pageData);

  const onFilter = (current, pageSize) => {
    if (current == 0) current = 1;
    fetchData(current, pageSize, filter)
  };

  const columns = [
    {
      title: "Giá Gốc",
      dataIndex: "defaultPrice",
      key: "defaultPrice",
      ...getColumnSearchProps("defaultPrice"),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      ...getColumnSearchProps("price"),
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Ngày Tạo",
      dataIndex: "createDate",
      key: "createDate",
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
      title: "Action",
      dataIndex: "quantity",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button
            danger
            type="primary"
            onClick={() => Delete(record.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button type="primary" onClick={() => Edit(record.id)}>
            <FontAwesomeIcon icon={faPen} />
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
              <h2 style={{ textAlign: "center" }}>Sản Phẩm Chi Tiết</h2>
              <br />
              <div className="head">
                {/* <i className="bx bx-filter" /> */}
                <div>
                  <Link className="btn btn-primary" to="/product-detail/add">
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </div>
                {/* <div style={{ display: "flex", position: "relative", left: "500px" }}>
                  <input className="form-control" type="text" name="colorName" />
                  <Link to={`/color/search?colorName=`}>
                    <i class="btn border bi bi-search"></i>
                  </Link>

                </div> */}
              </div>
              <br />
              <Table
                columns={columns}
                dataSource={pageData}
              // pagination={{
              //   defaultPageSize: 2,
              //   showSizeChanger: true,
              //   pageSizeOptions: ["1", "2", "5"],
              // }}
              />
              <Pagination
                showSizeChanger={true}
                onShowSizeChange={onFilter}
                onChange={onFilter}
                total={total}
                pageSizeOptions={[1, 5, 10, 50]}
              />
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
