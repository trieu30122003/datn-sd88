import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
// import moment from 'moment';
import Bill_Service from "../../../Api/Bill_Service";

function Bill_Detail_Components() {
    const { id } = useParams();
    const [ngayNhanXe, setNgayNhanXe] = useState('');
    const [trangThai, setTrangThai] = useState(1);
    const [loaiHoaDon, setLoaiHoaDon] = useState(true);
    const [ngayTraXe, setNgayTraXe] = useState('');
    const [ngayThanhToan, setNgayThanhToan] = useState('');
    const [ngayTao, setNgayTao] = useState('');
    const [ngaySua, setNgaySua] = useState('');
    const [lichHen, setLichHen] = useState('');
    useEffect(() => {
        Bill_Service.getById(id).then((response) => {
            let bill = response.data;
            setNgayNhanXe(bill.ngayNhanXe);
            setTrangThai(bill.trangThai);
            setLoaiHoaDon(bill.loaiHoaDon);
            setNgayThanhToan(bill.ngayThanhToan);
            setNgayTao(bill.ngayTao);
            setNgaySua(bill.ngaySua);
            setNgayTraXe(bill.ngayTraXe);
            setLichHen(bill.lichHen);
            // console.log(appointment);
        });
    }, [id])
    const changeNgayNhanXe = (e) => {
        setNgayNhanXe(e.target.value);
    }
    const changeNgayTraXe = (e) => {
        setNgayTraXe(e.target.value);
    }
    const changeNgayThanhToan = (e) => {
        setNgayThanhToan(e.target.value);
    }
    const changeNgayTao = (e) => {
        setNgayTao(e.target.value);
    }
    const changeNgaySua = (e) => {
        setNgaySua(e.target.value);
    }
    const changeLoaiHoaDon = (e) => {
        setLoaiHoaDon(e.target.value);
    }
    const changeLichHen = (e) => {
        setLichHen(e.target.value);
    }
    const update = (e) => {
        e.preventDefault();
        let bill = {
            ngayNhanXe,
            loaiHoaDon,
            trangThai,
            ngayTraXe,
            ngayTao,
            ngayThanhToan,
            ngaySua,
            // kh: { id: selectedCustomer }
        }
        console.log('bill =>' + JSON.stringify(bill));
        // Bill_Service.validateFU(bill).then((respose) => {
        // if (respose.data === "ok") {
        Bill_Service.update(id, bill).then((res) => {
            if (res.status === 200) {
                alert("Sửa Thành Công!");
                window.location = "/api/bill/new";
            } else {
                console.log(res.error);
            }
        })
        // } else {
        // alert(respose.data);
        // }
        // })
    }
    return (
        <>
            <Sidebar />
            <section id="content">
                {/* MAIN */}
                <main>
                    <div>
                        <div className="container">
                            <h3 className="text-center">Detail Bill {id}</h3>
                            <br />
                            <form className="col-md-10" id="myForm">
                                <div className="row">
                                    {/* <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Thời Gian Đặt
                                            </label>
                                            <select class="form-select" aria-label="Default select example" value={gioDat}
                                                onChange={changeHour}>
                                                <option selected>Open this select menu</option>
                                                <option value="07:30:00">7:30</option>
                                                <option value="08:30:00">8:30</option>
                                                <option value="09:30:00">9:30</option>
                                                <option value="10:30:00">10:30</option>
                                                <option value="11:30:00">11:30</option>
                                                <option value="13:30:00">13:30</option>
                                                <option value="14:30:00">14:30</option>
                                                <option value="15:30:00">15:30</option>
                                                <option value="16:30:00">16:30</option>
                                            </select>
                                            <span className="padd"></span>
                                            <input type="date" value={ngayDat}
                                                onChange={changeDay} className='form-control' />
                                            <span className="padd"></span>
                                        </div>
                                    </div> */}
                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Ngày sửa
                                            </label>
                                            <input className="form-control" type="date" value={ngaySua} onChange={changeNgaySua} />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Trạng Thái
                                            </label>
                                            <select class="form-select" aria-label="Default select example" value={trangThai}>
                                                <option value="0" selected>Chờ Xác Nhận</option>
                                                <option value="1">Đã Xác Nhận</option>
                                                <option value="2">Đã Hoàn Thành</option>
                                                <option value="3">Quá Hẹn</option>
                                                <option value="4">Đã Huỷ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Ngày trả xe
                                            </label>
                                            <input className="form-control" type="date" value={ngayTraXe}
                                                onChange={changeNgayTraXe}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Ngày nhận xe
                                            </label>
                                            <input className="form-control" type="date" value={ngayNhanXe}
                                                onChange={changeNgayNhanXe}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Ngày thanh toán
                                            </label>
                                            <input className="form-control" type="date" value={ngayThanhToan}
                                                onChange={changeNgayThanhToan}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Ngày tạo
                                            </label>
                                            <input className="form-control" type="date" value={ngayTao} onChange={changeNgayTao} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="row">
                                        <label className="form-label">
                                            Loại hóa đơn
                                        </label>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" value="true"
                                                checked={loaiHoaDon} onChange={() => setLoaiHoaDon(true)} /> Online
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" value="false"
                                                checked={!loaiHoaDon} onChange={() => setLoaiHoaDon(false)} /> Offline
                                        </div>
                                    </div>
                                    {/* <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Lịch hẹn
                                            </label>
                                            <input className="form-control" type="text" value={'d3a40721-be57-4c70-86ca-3d544f6e6031'} onChange={changeLichHen} />
                                        </div>
                                    </div> */}
                                </div>

                                {/* <div className="row">
                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Thời Gian Dự Kiến
                                            </label>
                                            <select class="form-select" aria-label="Default select example" value={thoiGianDuKien} onChange={changeTime}>
                                                <option value="0" selected>Open this select menu</option>
                                                <option value="15 Phút">15 Phút</option>
                                                <option value="30 Phút">30 Phút</option>
                                                <option value="1 Giờ">1 Giờ</option>
                                                <option value="2 Giờ">2 Giờ</option>
                                                <option value="4 Giờ">4 Giờ</option>
                                                <option value="null">Chưa Xác Định</option>
                                            </select>
                                        </div>
                                    </div> */}
                                {/* <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Lịch hẹn
                                            </label>
                                            <select class="form-select" aria-label="Default select example" value={lichHen} >
                                                <option value={0}>Select Customer</option>
                                                {customer.map((cus) => (
                                                    <option key={cus.id} value={cus.id}>
                                                        {cus.ho + " " + cus.ten + " " + cus.maKhachHang}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="row">
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <br />
                                                <button type="submit" className="btn btn-success" onClick={update}>Update</button>
                                            </div>
                                            <div className="col-md-2">
                                                <br />
                                                <div className="col-md-2 padd2"><Link className="btn btn-danger" to="/api/bill/new">Back</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Bill_Detail_Components
