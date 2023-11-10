import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import { Link, useParams } from "react-router-dom";
import Collar_Service from "../../../Api/Collar_Service";

export default function Collar_Detail_Components() {
  const { collarCode } = useParams();
  console.log(collarCode);
  const [collarName, setCollarName] = useState("");

  useEffect(() => {
    Collar_Service.getById(collarCode).then((res) => {
      let collar = res.data;
      setCollarName(collar.collarName);
    });
  }, [collarCode]);

  const changeCollarName = (e) => {
    setCollarName(e.target.value);
  };
  const update = (e) => {
    e.preventDefault();
    let collar = {
     
      collarName,
    };
    Collar_Service.update(collarCode, collar).then((res) => {
      if (res.status === 200) {
        alert("Update thành công!");
        window.location = `/collar`;
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
              <h3 className="text-center">Detail Cúc áo</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã Cúc áo</label>
                      <input
                        className="form-control"
                        type="text"
                        value={collarCode}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên Cúc Áo</label>
                      <input
                        className="form-control"
                        type="text"
                        value={collarName}
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
                          onClick={update}
                        >
                          UpDate
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
