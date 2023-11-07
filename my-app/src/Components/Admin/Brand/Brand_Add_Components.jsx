import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Brand_Service from "../../../Api/Brand_Service";

function Brand_Add_Components() {
  const [brandCode, setMa] = useState("");
  const [brandName, setName] = useState("");
  const [createDate, setCreate] = useState("");
  const [updateDate, setUpdate] = useState("");
  const [status, setStatus] = useState(0);

  const changeMa = (e) => {
    setMa(e.target.value);
  };
  const changeTen = (e) => {
    setName(e.target.value);
  };
  const changeCreateDate = (e) => {
    setCreate(e.target.value);
  };
  const changeUpdateDate = (e) => {
    setUpdate(e.target.value);
  };


  const save = (e) => {
    e.preventDefault();
    let brand = {
      brandCode,
      brandName,
      createDate,
      updateDate,
      status
    };
    Brand_Service.save(brand).then((res) => {
      if (res.status === 200) {
        alert("Thêm hãng thành công!");
        window.location = "/brand";
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
              <h3 className="text-center">ADD Brand</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Mã
                      </label>
                      <input className="form-control" type="text" disabled />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Tên
                      </label>
                      <input className="form-control" type="text" onChange={changeTen} />
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
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <br />
                        <button type="submit" className="btn btn-success" onClick={save} >ADD</button>
                      </div>
                      <div className="col-md-2">
                        <br />
                        <div className="col-md-2 padd2"><Link className="btn btn-danger" to="/brand">Back</Link></div>
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
export default Brand_Add_Components;