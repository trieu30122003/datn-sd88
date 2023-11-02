import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Bill_Service from "../../../Api/Bill_Service";



function Bill_Add_Components() {
  const [ngayNhanXe, setNgayNhanXe] = useState('');
  const [loaiHoaDon, setLoaiHoaDon] = useState(true);
  const [ngayTraXe, setNgayTraXe] = useState('');
  const [ngayThanhToan, setNgayThanhToan] = useState('');
  const [ngayTao, setNgayTao] = useState('');
  const [ngaySua, setNgaySua] = useState('');
  const [isDisable] = useState(0);
  const [lichHen, setLichHen] = useState('');
  // const [lichHen, setLichHen] = useState('');

  // useEffect(() => {
  //     ListCustomer();
  // }, [])
  // const ListCustomer = () => {
  //     Customer_Service.getAllCustomer().then((response) => {
  //         setCustomer(response.data);
  //         console.log(customer);
  //     }).catch((error) => console.log(error));
  // }

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
  // const changeLichHen =(e) => {
  //     setLichHen(e.target.value);
  // }
  const save = (e) => {
    e.preventDefault();
    let bill = {
      ngayNhanXe,
      ngayTraXe,
      ngayThanhToan,
      ngaySua,
      ngayTao,
      loaiHoaDon,
      isDisable,
      lichHen,
      // idLichHen: { id: lichHen }
    }
    console.log('bill =>' + JSON.stringify(bill));
    if (ngayNhanXe === '') {
      alert("Hãy chọn ngày nhận xe!");
    } else if (ngayTraXe === '') {
      alert("Hãy chọn ngày trả xe!");
    }
    else if (ngayThanhToan === "") {
      alert("Hãy chọn ngày thanh toán!");
    }
    else if (ngaySua === "") {
      alert("Hãy chọn ngày sửa!");
    }
    else if (ngayTao === "") {
      alert("Hãy chọn ngày tạo!");
    }
    else if (ngayTao === "") {
      alert("Hãy chọn loại hóa đơn !");
    }
    else {

      Bill_Service.save(bill).then((res) => {
        if (res.status === 200) {
          alert("Thêm hóa đơn thành công!");
          window.location = "/api/bill/new";
        } else {
          console.log(res.error);
        }
      })

    }
  }
  return (
    <>
      <Sidebar />
      <section id="content">
        {/* MAIN */}
        <main>
          <div>
            <div className="container">
              <h3 className="text-center">ADD Bill</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày tạo
                      </label>
                      <input className="form-control" type="date" onChange={changeNgayTao} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày sửa
                      </label>
                      <input className="form-control" type="date" onChange={changeNgaySua} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày trả xe
                      </label>
                      <input className="form-control" type="date"
                        onChange={changeNgayTraXe} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày nhận xe
                      </label>
                      <input className="form-control" type="date"
                        onChange={changeNgayNhanXe} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày thanh toán
                      </label>
                      <input className="form-control" type="date"
                        onChange={changeNgayThanhToan} />
                    </div>
                  </div>
                  {/* <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">
                                                Lịch hẹn
                                            </label>
                                            <input className="form-control" type="text"
                                            value={'d3a40721-be57-4c70-86ca-3d544f6e6031'} 
                                            onChange={changeLichHen}/>
                                        </div>
                                    </div> */}
                  <div className="row">
                    <div className="col-md-5">
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
                  </div>
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
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <br />
                        <button type="submit" className="btn btn-success" onClick={save} >ADD</button>
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

export default Bill_Add_Components
