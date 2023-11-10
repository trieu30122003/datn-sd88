import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Category_Service from "../../../Api/Category_Service";

export default function Category_Detail_Components() {
  const { categoryCode } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(() => {
    Category_Service.getById(categoryCode).then((res) => {
      let category = res.data;
      const NgayTao = new Date(category.createDate);
      const formattedDate = NgayTao.toISOString().split("T")[0];
      const NgaySua = new Date(category.updateDate);
      const formattedNgaySua = NgaySua.toISOString().split("T")[0];
      setCategoryName(category.categoryName);
      setStatus(category.status);
      setCreateDate(formattedDate);
      setUpdateDate(formattedNgaySua);
    });
  }, [categoryCode]);
  console.log(createDate);

  const changeCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const changeNgayTao = (e) => {
    setCreateDate(e.target.value);
  };

  const changeNgaySua = (e) => {
    setUpdateDate(e.target.value);
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  const update = (e) => {
    e.preventDefault();
    let category = {
      categoryName,
      categoryCode,
      createDate,
      updateDate,
      status,
    };
    Category_Service.update(categoryCode, category).then((res) => {
      if (res.status === 200) {
        alert("Update thành công!");
        window.location = `/category`;
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
              <h3 className="text-center">Detail Loại</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên Loại</label>
                      <input
                        className="form-control"
                        type="text"
                        value={categoryName}
                        onChange={changeCategoryName}
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
                        type="date" // Sử dụng type "date" để hiển thị date picker
                        value={updateDate} // Chuyển đổi ngày thành dạng YYYY-MM-DD
                        onChange={changeNgaySua}
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
                          onClick={update}
                        >
                          Update
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
