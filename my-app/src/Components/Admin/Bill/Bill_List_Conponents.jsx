import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Bill_Service from "../../../Api/Bill_Service";

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
        console.log(e);
        Bill_Service.delete(e).then((res) => {
            if (res.status === 200) {
                alert("Xóa hóa đơn thành công!");
                window.location = "/api/bill/new";
            }
        });
    };
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
                                    <Link to="/api/bill/new/add/" className="btn btn-primary">
                                        Add
                                    </Link>
                                </div>
                                <div style={{ display: "flex", position: "relative", left: "500px" }}>
                                    <input className="form-control" type="date" name="searchNgayTao"/>
                                    <Link to={`/api/bill/search?ngayTao=`}>
                                        <i class="btn border bi bi-search"></i>
                                    </Link>

                                </div>
                            </div>
                            <br />
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ngày nhận xe</th>
                                        <th>Ngày trả xe</th>
                                        <th>Loại hóa đơn</th>
                                        <th>Ngày thanh toán</th>
                                        <th>Ngày tạo</th>
                                        <th>Ngày nhận xe</th>
                                        <th>Ngày sửa</th>
                                        <th>Loại lịch hẹn</th>
                                        <th>Trạng thái</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pageData.map(
                                            (bill, index) =>
                                                <tr key={bill.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{bill.ngayNhanXe}</td>
                                                    <td>{bill.ngayTraXe}</td>
                                                    <td>{bill.loaiHoaDon == true ? "Online" : "Offline"}</td>
                                                    <td>{bill.ngayThanhToan}</td>
                                                    <td>{bill.ngayTao}</td>
                                                    <td>{bill.ngayNhanXe}</td>
                                                    <td>{bill.ngaySua}</td>
                                                    <td>lichHen</td>
                                                    <td>{bill.trangThai == 1 ? "Đã thanh toán" : "Chưa thanh toán"}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-info">
                                                            <Link to={`/api/bill/new/${bill.id}`}>
                                                                <i class="bi bi-pencil-square"></i>
                                                            </Link>
                                                        </button>
                                                        {/* <Link to={`/api/bill/delete/${bill.id}`}>
                                                            <i class="bi bi-trash text-danger"></i>
                                                        </Link> */}
                                                        <button
                                                            onClick={(e) => Delete(bill.id)}
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            <i class="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}