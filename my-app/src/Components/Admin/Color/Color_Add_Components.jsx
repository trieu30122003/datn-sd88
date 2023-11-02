import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Color_Service from "../../../Api/Color_Service";

function Color_Add_Components() {
  const [colorCode, setMaMau] = useState("");
  const [colorName, setTenMau] = useState("");

  const changeMaMau = (e) => {
    setMaMau(e.target.value);
  };
  const changeTenMau = (e) => {
    setTenMau(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();
    let color = {
      colorCode,
      colorName,
    };
    Color_Service.save(color).then((res) => {
      if (res.status === 200) {
        alert("Thêm màu sắc thành công!");
        window.location = "/color";
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
              <h3 className="text-center">ADD Color</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Mã màu
                      </label>
                      <input className="form-control" type="text" onChange={changeMaMau} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Tên màu
                      </label>
                      <input className="form-control" type="text" onChange={changeTenMau} />
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
                        <div className="col-md-2 padd2"><Link className="btn btn-danger" to="/color">Back</Link></div>
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
export default Color_Add_Components;