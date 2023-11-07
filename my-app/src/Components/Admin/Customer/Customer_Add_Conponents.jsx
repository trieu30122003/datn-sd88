import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Customer_Service from "../../../Api/Customer_Service";
import { Radio } from "antd";

function Customer_Add_Components() {
  const [customerCode, setMa] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setHo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGioiTinh] = useState("");
  const [dateOfBirth, setNgaySinh] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [createDate, setCreate] = useState("");
  const [updateDate, setUpdate] = useState("");
  const [encryptedPassword, setEncryptedPassword] = useState("");
  // const [status, setStatus] = useState(0);

  const changeTen = (e) => {
    setName(e.target.value);
  };
  const changeEncryptedPassword = (e) => {
    setEncryptedPassword(e.target.value);
  };
  const changeHo = (e) => {
    setHo(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeGioiTinh = (e) => {
    setGioiTinh(e.target.value);
  };
  const changeNgaySinh = (e) => {
    setNgaySinh(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeCreateDate = (e) => {
    setCreate(e.target.value);
  };
  const changeUpdateDate = (e) => {
    setUpdate(e.target.value);
  };


  const save = (e) => {
    e.preventDefault();
    let kh = {
      customerCode,
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      phoneNumber,
      createDate,
      updateDate,
      encryptedPassword,
      // status
    };
    Customer_Service.save(kh).then((res) => {
      if (res.status === 200) {
        alert("Thêm Khách hàng thành công!");
        window.location = "/customer";
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
              <h3 className="text-center">ADD CUSTOMER</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Firt Name
                      </label>
                      <input className="form-control" type="text" onChange={changeHo} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Last Name
                      </label>
                      <input className="form-control" type="text" onChange={changeTen} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Email
                      </label>
                      <input className="form-control" type="text" onChange={changeEmail} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Date of Birth
                      </label>
                      <input className="form-control" type="date" onChange={changeNgaySinh} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Phone
                      </label>
                      <input className="form-control" type="text" onChange={changePhone} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Gender
                      </label>
                      <Radio.Group >
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Nữ</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày tạo
                      </label>
                      <input className="form-control" type="date" onChange={changeCreateDate} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày cập nhật
                      </label>
                      <input className="form-control" type="date" onChange={changeUpdateDate} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Password
                      </label>
                      <input className="form-control" type="password" onChange={changeEncryptedPassword} />
                    </div>
                  </div>
                  {/* <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày cập nhật
                      </label>
                      <input className="form-control" type="date" onChange={changeUpdateDate} />
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <br />
                        <button type="submit" className="btn btn-success" onClick={save} >ADD</button>
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
  );
}
export default Customer_Add_Components;