import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import { Link, useParams } from "react-router-dom";
import Product_Service from "../../../Api/Product_Service";

export default function Product_Detail_Components() {
  const { productCode } = useParams();
  const [productName, setProductName] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [status, setStatus] = useState("");



  useEffect(() => {
    Product_Service.getById(productCode).then((res) => {
      debugger
      let pr = res.data;
      const NgayTao = new Date(pr.createDate);
      const formattedDate = NgayTao.toISOString().split("T")[0];
      const NgaySua = new Date(pr.updateDate);
      const formattedNgaySua = NgaySua.toISOString().split("T")[0];
      setProductName(pr.productName);
      setMainImage(pr.mainImage);
      setDescription(pr.description);
      setStatus(pr.status);
      setCreateDate(formattedDate);
      setUpdateDate(formattedNgaySua);
    });
  }, [productCode])

  const changeProductName = (e) => {
    setProductName(e.target.value);
  };
  const changeNgayTao = (e) => {
    setCreateDate(e.target.value);
  }
  const changeNgaySua = (e) => {
    setUpdateDate(e.target.value);
  }
  const changeMainImage = (e) => {
    setMainImage(e.target.value);
  }
  const changeDescription = (e) => {
    setDescription(e.target.value);
  }
  const changeProductCode = (e) => {
    productCode(e.target.value);
  }
  const changeStatus = (e) => {
    setStatus(e.target.value);
  }

  const update = (e) => {
    e.preventDefault();
    let pr = {
      productName,
      mainImage,
      description,
      createDate,
      updateDate,
      status,
      productCode,
    };


    Product_Service.update(productCode, pr).then((res) => {
      if (res.status === 200) {
        alert("Update sản phẩm thành công!");
        window.location = `/product`;
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
              <h3 className="text-center">Detail Sản Phẩm</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Tên Sản phẩm</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productName}
                        onChange={changeProductName}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ảnh Sản Phẩm</label>
                      <input
                        className="form-control"
                        type="text"
                        value={mainImage}
                        onChange={changeMainImage}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mô tả</label>
                      <input
                        className="form-control"
                        type="text"
                        value={description}
                        onChange={changeDescription}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ngày Tạo</label>
                      <input
                        className="form-control"
                        type="date"
                        value={createDate}
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
                      <label className="form-label">Trạng Thái</label>
                      <input
                        className="form-control"
                        type="text"
                        value={status}
                        onChange={changeStatus}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Mã sản phẩm</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productCode}
                        onChange={changeProductCode}
                      />
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
                        <div className="col-md-2 padd2"><Link className="btn btn-danger" to="/product">Back</Link></div>
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