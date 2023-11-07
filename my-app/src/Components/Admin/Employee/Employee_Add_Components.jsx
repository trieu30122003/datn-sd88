import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Employee_Service from "../../../Api/Employee_Service";

function Employee_Add_Components() {

  
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
  const [employeeCode, setEmployeeCode] = useState("");
  const [status, setStatus] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const changeDateOfBirth = (e) => {
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
  const changeCreateDate = (e) => {
    setCreateDate(e.target.value);
  };
  const changeUpdateDate = (e) => {
    setUpdateDate(e.target.value);
  };
  const changeImage = (e) => {
    setImage(e.target.value);
  };
  const changeEmployeeCode = (e) => {
    setEmployeeCode(e.target.value);
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  
  const save = (e) => {
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

    Employee_Service.save(employee).then((res) => {
      if (res.status === 200) {
        alert("Thêm nhân viên thành công!");
        window.location = "/employee";
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
              <h3 className="text-center">ADD Nhân Viên</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeFirstName}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Họ</label>
                      <input
                        className="form-control"
                        type="text"
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
                        onChange={changeDateOfBirth}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeEmail}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Số điện thoại</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changePhoneNumber}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mật khẩu </label>
                      <input
                        className="form-control"
                        type="text"
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
                        onChange={changeCreateDate}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ngày Sửa</label>
                      <input
                        className="form-control"
                        type="date" // Sử dụng type "date" để hiển thị date picker
                        value={updateDate} // Chuyển đổi ngày thành dạng YYYY-MM-DD
                        onChange={changeUpdateDate}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ảnh </label>
                      <input
                        className="form-control"
                        type="file" // Sử dụng type là "file" để cho phép chọn tệp
                        accept="image/*" // Đặt chấp nhận chỉ cho phép tệp ảnh
                        onChange={changeImage}
                      />
                    </div>
                    {image && (
                      <div className="row">
                        <img src={image} alt="Ảnh đã chọn" />
                      </div>
                    )}
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã nhân viên </label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeEmployeeCode}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Trạng Thái </label>
                      <select
                        className="form-control"
                        value={status} // Đặt giá trị của combobox bằng giá trị trạng thái
                        onChange={changeStatus}
                      >
                        <option value="">Chọn trạng thái</option>{" "}
                        {/* Tùy chọn mặc định */}
                        <option value="nghiViec">Làm việc </option>
                        <option value="lamViec">Nghỉ việc</option>
                      </select>
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
                          onClick={save}
                        >
                          ADD
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
export default Employee_Add_Components;
