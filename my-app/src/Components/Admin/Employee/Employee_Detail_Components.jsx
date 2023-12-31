import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import { Link, useParams } from "react-router-dom";
import Employee_Service from "../../../Api/Employee_Service";

export default function Employee_Detail_Components() {
  const { employeeCode } = useParams();
  // const [colorCode, setMaMau] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    Employee_Service.getById(employeeCode).then((res) => {
      let employee = res.data;
      const NgayTao = new Date(employee.createDate);
      const formattedDate = NgayTao.toISOString().split("T")[0];
      const NgaySua = new Date(employee.updateDate);
      const formattedNgaySua = NgaySua.toISOString().split("T")[0];
      const NgaySinh = new Date(employee.dateOfBirth);
      const formattedNgaySinh = NgaySinh.toISOString().split("T")[0];
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setGender(employee.gender);
      setEmail(employee.email);
      setPhoneNumber(employee.phoneNumber);
      setEncryptedPassword(employee.encryptedPassword);
      setCreateDate(formattedDate);
      setUpdateDate(formattedNgaySua);
      setDateOfBirth(formattedNgaySinh);
      setImage(employee.image);
      setStatus(employee.status);
    });
  }, [employeeCode]);

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const changeNgaySinh = (e) => {
    setDateOfBirth(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const changeEncryptedPassword = (e) => {
    setEncryptedPassword(e.target.value);
  };
  const changeNgayTao = (e) => {
    setCreateDate(e.target.value);
  };
  const changeNgaySua = (e) => {
    setUpdateDate(e.target.value);
  };
  const changeImage = (e) => {
    setImage(e.target.value);
  };
  const changeEmployeeCode = (e) => {
    employeeCode(e.target.value);
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  const update = (e) => {
    e.preventDefault();
    let employee = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      encryptedPassword,
      updateDate,
      image,
      employeeCode,
      status,
    };
    Employee_Service.update(employeeCode, employee).then((res) => {
      if (res.status === 200) {
        alert("Update mã nhân viên thành công!");
        window.location = `/employee`;
      }
    });
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        {/* MAIN */}
        <main>
          <div>
            <div className="container">
              <h3 className="text-center">Detail Nhân Viên</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Họ tên</label>
                      <input
                        className="form-control"
                        type="text"
                        value={firstName}
                        onChange={changeFirstName}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label"> Tên đệm</label>
                      <input
                        className="form-control"
                        type="text"
                        value={lastName}
                        onChange={changeLastName}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Giới tính</label>
                      <div>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={gender === "male"}
                          onChange={changeGender}
                        />
                        <label htmlFor="male">Nam</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          checked={gender === "female"}
                          onChange={changeGender}
                        />
                        <label htmlFor="female">Nữ</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ngày tháng năm sinh</label>
                      <input
                        className="form-control"
                        type="date"
                        value={dateOfBirth}
                        onChange={changeNgaySinh}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label"> Email</label>
                      <input
                        className="form-control"
                        type="text"
                        value={email}
                        onChange={changeEmail}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label"> Số điện thoại</label>
                      <input
                        className="form-control"
                        type="text"
                        value={phoneNumber}
                        onChange={changePhoneNumber}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label"> Mật khẩu</label>
                      <input
                        className="form-control"
                        type="password"
                        value={encryptedPassword}
                        onChange={changeEncryptedPassword}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ngày Tạo</label>
                      <input
                        className="form-control"
                        type="date" // Sử dụng type "date" để hiển thị date picker
                        value={createDate} // Chuyển đổi ngày thành dạng YYYY-MM-DD
                        onChange={changeNgayTao}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ngày Sửa</label>
                      <input
                        className="form-control"
                        type="date"
                        value={updateDate}
                        onChange={changeNgaySua}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ảnh </label>
                      <input
                        className="form-control"
                        type="text"
                        value={image}
                        onChange={changeImage}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã nhân viên </label>
                      <input
                        className="form-control"
                        type="text"
                        value={employeeCode}
                        onChange={changeEmployeeCode}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Trạng Thái </label>
                      <input
                        className="form-control"
                        type="text"
                        value={status}
                        onChange={changeStatus}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <br />
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={update}
                        >
                          UpDate
                        </button>
                      </div>
                      <div className="col-md-2">
                        <br />
                        <div className="col-md-2 padd2">
                          <Link className="btn btn-danger" to="/employee">
                            Back
                          </Link>
                        </div>
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
