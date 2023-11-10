import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Category_Service from "../../../Api/Category_Service";

function Category_Add_Components() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [status, setStatus] = useState(0);

  const changeCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const changeCategoryCode = (e) => {
    setCategoryCode(e.target.value);
  };

  const changeCreateDate = (e) => {
    setCreateDate(e.target.value);
  };

  const changeUpdateDate = (e) => {
    setUpdateDate(e.target.value);
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  const save = (e) => {
    e.preventDefault();
    let category = {
      categoryName,
      categoryCode,
      status,
    };

    Category_Service.save(category).then((res) => {
      if (res.status === 200) {
        alert("Thêm thành công!");
        window.location = "/category";
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
              <h3 className="text-center">ADD Loại</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên Loại</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeCategoryName}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã Loại</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeCategoryCode}
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
                      <label className="form-label">Trạng Thái </label>
                      <input
                        type="text"
                        className="form-control"
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
                          onClick={save}
                        >
                          ADD
                        </button>
                      </div>
                      <div className="col-md-2">
                        <br />
                        <div className="col-md-2 padd2">
                          <Link className="btn btn-danger" to="/category">
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
export default Category_Add_Components;
