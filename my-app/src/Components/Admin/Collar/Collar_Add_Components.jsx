import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Collar_Service from "../../../Api/Collar_Service";

function Collar_Add_Components() {
  const [collarCode, setCollarCode] = useState("");
  const [collarName, setCollarName] = useState("");

  const changeColarrCode = (e) => {
    setCollarCode(e.target.value);
  };
  const changeCollarName = (e) => {
    setCollarName(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();
    let collar = {
      collarCode,
      collarName,
    };

    Collar_Service.save(collar).then((res) => {
      if (res.status === 200) {
        alert("Thêm cúc áo thành công!");
        window.location = "/collar";
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
              <h3 className="text-center">ADD Cúc Áo</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã cúc áo</label>
                      <input className="form-control" type="text" disabled onChange={changeColarrCode} />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên cúc áo</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeCollarName}
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
                          <Link className="btn btn-danger" to="/collar">
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
export default Collar_Add_Components;
