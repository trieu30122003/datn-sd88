import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import { Link, useParams } from "react-router-dom";
import Brand_Service from "../../../Api/Brand_Service";

export default function Brand_Detail_Components() {
  const { brandCode } = useParams();
  
  const [brandName, setTen] = useState("");
  const [createDate, setCreate] = useState("");
  const [updateDate, setUpdate] = useState("");
  const [status, setStatus] = useState(0);


  useEffect(() => {
    Brand_Service.getById(brandCode).then((res) => {
      let brand = res.data;
      const NgayTao = new Date(brand.createDate);
      const formattedDate = NgayTao.toISOString().split("T")[0];
      const NgaySua = new Date(brand.updateDate);
      const formattedNgaySua = NgaySua.toISOString().split("T")[0];
      setTen(brand.brandName);
      setStatus(brand.status);
      setCreate(formattedDate);
      setUpdate(formattedNgaySua);

    })
  }, [brandCode])
  console.log(createDate);
  const changeTen = (e) => {
    setTen(e.target.value);
  }
  const changeNgayTao = (e) => {
    setCreate(e.target.value);
  }
  const changeNgaySua = (e) => {
    setUpdate(e.target.value);
  }
  const changeStatus = (e) => {
    setStatus(e.target.value);
  }
  const changeMa = (e) => {
  brandCode(e.target.value);
  }
  const update = (e) => {
    e.preventDefault();
    let brand = {
      brandCode,
      brandName,
      createDate,
      updateDate,
      status
    };
    Brand_Service.update(brandCode, brand).then((res) => {
      if (res.status === 200) {
        alert("Update hãng thành công!");
        window.location = `/brand`;
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
              <h3 className="text-center">Detail Brand</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Mã hãng
                      </label>
                      <input className="form-control" type="text" value={brandCode} onChange={changeMa} disabled/>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Tên hãng
                      </label>
                      <input className="form-control" type="text" value={brandName} onChange={changeTen} />
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Trạng thái
                      </label>
                      <input className="form-control" type="text" value={status} onChange={changeStatus} />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày tạo
                      </label>
                      <input className="form-control" type="date" value={createDate} onChange={changeNgayTao} />
                    </div>
                  
                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">
                        Ngày cập nhật
                      </label>
                      <input className="form-control" type="date" value={updateDate} onChange={changeNgaySua} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <br />
                        <button type="submit" className="btn btn-success" onClick={update}>UpDate</button>
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
  )
}