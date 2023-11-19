import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Bill_Service from "../../../Api/Bill_Service";
import { Button, Input, Space, Table } from "antd";
import Employee_Service from "../../../Api/Employee_Service";
import Customer_Service from "../../../Api/Customer_Service";
import Product_Detail_Service from "../../../Api/Product_Detail_Service";
import { SearchOutlined } from '@ant-design/icons';
import Bill_Detail_Service from "../../../Api/Bill_Detail_Service";


function Bill_Add_Components() {
  const urlParams = new URLSearchParams(window.location.search);
  const billCode = urlParams.get('billCode');
  const [pageData, setPageData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [customer, setCustomer] = useState([]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const [customerPayment, setCustomerPayment] = useState('');
  const [changeAmount, setChangeAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
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
          <Button
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
          </Button>
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
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      (record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase())) ||
      (pageData && record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase())) ||
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
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  //checkbox
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
      calculateTotalPrice();
    }, 1000);
  };
  const onSelectChange = (newSelectedRowIds) => {
    console.log('selectedRowIds changed: ', newSelectedRowIds);
    setSelectedRowKeys(newSelectedRowIds);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,

  };
  const hasSelected = selectedRowKeys.length > 0;

  const calculateTotalPrice = async () => {
    let totalPrice = 0;
    if (selectedRowKeys.length > 0) {
      for (const rowKey of selectedRowKeys) {
        try {
          const response = await Product_Detail_Service.getById(rowKey);
          console.log(response.data);
          const productDetail = response.data;
          const price = productDetail.price;
          console.log(price);
          totalPrice += price;
        } catch (error) {
          console.error(`Error getting productDetail with id ${rowKey}:`, error);
        }
      }
    }
    setTotalPrice(totalPrice);
  };
  const handlePaymentChange = (event) => {
    const paymentAmount = parseFloat(event.target.value);
    const changeAmount = paymentAmount - totalPrice;

    if (isNaN(changeAmount) || changeAmount < 0) {
      // Nếu giá trị nhập vào không hợp lệ hoặc không đủ để thanh toán
      setChangeAmount(0);
    } else {
      setChangeAmount(changeAmount.toFixed(2));
    }

    setCustomerPayment(event.target.value);
  };
  //getall
  useEffect(() => {
    fetchData();
    calculateTotalPrice();
  }, [selectedRowKeys])
  const fetchData = async () => {
    try {
      const response = await Product_Detail_Service.getAllProductDetail();
      const data = response.data.map(item => ({ ...item, key: item.id }));
      setPageData(data);

      const employeeResponse = await Employee_Service.getAllEmployee();
      const employeeData = employeeResponse.data;
      setEmployees(employeeData);

      const customerResponse = await Customer_Service.getAllCustomer();
      const customerData = customerResponse.data;
      setCustomer(customerData);
    } catch (error) { console.log(error); }
  };
  const columns = [
    {
      title: "Tên sản phẩm",
      ...getColumnSearchProps('name'),
      render: (record) => `${record.product.productName}`,

    },
    {
      title: "Hãng",
      render: (record) => `${record.product.brand.brandName}`,
    },
    {
      title: "Số lượng",
      render: (record) => `${record.product.quantity}`,
    },
    {
      title: "Giá",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "size",
      dataIndex: "size",
    }

  ];


  const createBillDetailsForSelectedRows = async () => {
    const selectedRows = selectedRowKeys.map(async (rowKey) => {
      try {
        // Gọi phương thức getById của lớp Bill_Detail_Service để lấy billDetail dựa trên rowKey
        const response = await Bill_Detail_Service.getById(rowKey);
        const billDetail = response.data;
        console.log(billDetail);
        // Thêm id được chọn và billCode vào billDetail
        billDetail.id = rowKey;
        billDetail.bill.id = billCode;

        await Bill_Detail_Service.save(billDetail);
        return billDetail;
      } catch (error) {
        console.error(`Error getting billDetail with id ${rowKey}:`, error);
        return null;
      }
    });

    // Đợi tất cả các promise trong selectedRows hoàn thành và trả về kết quả
    const billDetails = await Promise.all(selectedRows);
    const filteredBillDetails = billDetails.filter((billDetail) => billDetail !== null);

    // Điều hướng đến trang /bill
    window.location.href = "/bill";
    return filteredBillDetails;
  };
  return (
    <>
      <Sidebar />
      <section id="content">
        {/* MAIN */}
        <main>
          <div>
            <div className="container">
              <h3 className="text-center">Bill {billCode}</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-9" style={{ border: "1px solid violet",backgroundColor:"white" }}>
                    <div
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      <Button style={{ marginTop: 8 }} type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                        Reload
                      </Button>
                      <span
                        style={{
                          marginLeft: 8,
                        }}
                      >
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                      </span>
                    </div>
                    <Table columns={columns} dataSource={pageData} rowSelection={rowSelection} />
                  </div>
                  <div className="col-3" style={{ border: "1px solid violet" }}>
                    {/* Cột có span 4 */}
                    <select class="form-select" style={{ marginTop: 8, marginBottom: 8 }}>
                      <option value="">Khách hàng</option>
                      {customer.map((employee) => (
                        <option key={employee.id} value={employee.id}>
                          {employee.firstName} {employee.lastName}
                        </option>
                      ))}
                    </select>
                    <select class="form-select" style={{ marginBottom: 8 }}>
                      <option value="">Nhân viên</option>
                      {employees.map((employee) => (
                        <option key={employee.id} value={employee.id}>
                          {employee.firstName} {employee.lastName}
                        </option>
                      ))}
                    </select>
                    <div>
                      <p>Tổng tiền: {totalPrice} VNĐ</p>
                      <p>Tiền khách đưa: <input className="form-control" type="text" placeholder="VD:35000000,...VNĐ" value={customerPayment} onChange={handlePaymentChange} /></p>
                      <p>Tiền thừa: {changeAmount} VNĐ</p>
                    </div>
                  </div>
                  <button style={{ marginTop: 8, marginBottom: 8 }} className="btn btn-primary" onClick={createBillDetailsForSelectedRows}>Thanh toán</button>
                  <Button danger to="/bill" >Back</Button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Bill_Add_Components
