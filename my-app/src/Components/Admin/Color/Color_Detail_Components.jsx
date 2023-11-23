import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import { Link, useParams } from "react-router-dom";
import Color_Service from "../../../Api/Color_Service";

export default function Color_Detail_Components() {
  const { colorCode } = useParams();
  const [colorName, setTenMau] = useState("");

  useEffect(() => {
    Color_Service.getById(colorCode).then((res) => {
      let color = res.data;
      setTenMau(color.colorName);
    });
  }, [colorCode]);
  const changeColorCode = (e) => {
    colorCode(e.target.value);
  };
  const changeTenMau = (e) => {
    setTenMau(e.target.value);
  };
  const update = (e) => {
    e.preventDefault();
    let color = {
      // colorCode,
      colorName,
    };
    Color_Service.update(colorCode, color).then((res) => {
      if (res.status === 200) {
        alert("Update màu sắc thành công!");
        window.location = `/color`;
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
              <h3 className="text-center">Detail Color</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã màu</label>
                      <input
                        className="form-control"
                        type="text"
                        value={colorCode}
                        onChange={changeColorCode}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên màu</label>
                      <input
                        className="form-control"
                        type="text"
                        value={colorName}
                        onChange={changeTenMau}
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
                          <Link className="btn btn-danger" to="/color">
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
