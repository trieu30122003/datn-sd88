import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import { Link, useParams } from "react-router-dom";
import Customer_Service from "../../../Api/Customer_Service";

export default function Customer_Detail_Components() {
  const { customerCode } = useParams();
  // console.log(brandCode);
  // const [colorCode, setMaMau] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setHo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGioiTinh] = useState("");
  const [dateOfBirth, setNgaySinh] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [createDate, setCreate] = useState("");
  const [updateDate, setUpdate] = useState("");
  // const [encryptedPassword, setEncryptedPassword] = useState("");
  // const [status, setStatus] = useState(0);


  useEffect(() => {
    Customer_Service.getById(customerCode).then((res) => {
      let kh = res.data;
      const NgayTao = new Date(kh.createDate);
      const formattedDate = NgayTao.toISOString().split("T")[0];
      const NgaySua = new Date(kh.updateDate);
      const formattedNgaySua = NgaySua.toISOString().split("T")[0];
      setHo(kh.firstName);
      setName(kh.lastName);
      setEmail(kh.email);
      setPhone(kh.phoneNumber);
      setNgaySinh(kh.dateOfBirth);
      setGioiTinh(kh.gender);
      setCreate(formattedDate);
      setUpdate(formattedNgaySua);

    })
  }, [customerCode])
  console.log(createDate);
  const changeTen = (e) => {
    setTen(e.target.value);
  }
  const changeNgayTao = (e) => {
    setCreate(e.target.value);
  }
  const changeNgaySua = (e) => {
    setUpdate(e.target.value);
  }
  const update = (e) => {
    e.preventDefault();
    let kh = {
      // colorCode,
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      phoneNumber,
      createDate,
      updateDate,
      // encryptedPassword,
    };
    Customer_Service.update(customerCode, kh).then((res) => {
      if (res.status === 200) {
        alert("Update khách hàng thành công!");
        window.location = `/customer`;
      }
    });
  }

  return (
    <>
      <Sidebar />
      <section id="content">
        {/* MAIN */}
        <main>
          <div>
            <div className="container">
              <h3 className="text-center">Detail CUSTOMER</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                      Firt Name
                      </label>
                      <input className="form-control" type="text" value={firstName}/>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Last Name
                      </label>
                      <input className="form-control" type="text" value={lastName} onChange={changeTen} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                      Email
                      </label>
                      <input className="form-control" type="text" value={email}/>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Phone
                      </label>
                      <input className="form-control" type="text" value={phoneNumber} onChange={changeTen} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                      Date of Birth
                      </label>
                      <input className="form-control" type="text" value={dateOfBirth}/>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Gender
                      </label>
                      <input className="form-control" type="text" value={gender} onChange={changeTen} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày tạo
                      </label>
                      <input className="form-control" type="date" value={createDate} onChange={changeNgayTao} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày cập nhật
                      </label>
                      <input className="form-control" type="date" value={updateDate} onChange={changeNgaySua} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <br />
                        <button type="submit" className="btn btn-success" onClick={update}>UpDate</button>
                      </div>
                      <div className="col-md-2">
                        <br />
                        <div className="col-md-2 padd2"><Link className="btn btn-danger" to="/customer">Back</Link></div>
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
  )
}