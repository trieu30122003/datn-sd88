import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Product_Service from "../../../Api/Product_Service";

function Product_Add_Components() {
  const [productName, setProductName] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState(null);
  const [updateDate, setUpdateDate] = useState(null);
  const [status, setStatus] = useState("");
  const [productCode, setProductCode] = useState("");

  const changeProductName = (e) => {
    setProductName(e.target.value);
  };
  const changeMainImage = (e) => {
    setMainImage(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeCreateDate = (e) => {
    setCreateDate(e.target.value)
  };
  const changeUpdateDate = (e) => {
    setUpdateDate(e.target.value)
  };
  const changeStatus = (e) => {
    setStatus(e.target.value)
  };
  const changeProductCode = (e) => {
    setProductCode(e.target.value)
  };



  const save = (e) => {
    e.preventDefault();
    let product = {
      productName,
      mainImage,
      description,
      createDate,
      updateDate,
      status,
      productCode,

    };
    Product_Service.save(product).then((res) => {
      if (res.status === 200) {
        alert("Thêm sản phẩm thành công!");
        window.location = "/product";
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
              <h3 className="text-center">ADD Product</h3>
              <br />
              <form className="col-md-12" id="myForm">
                <div className="row">

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Sản phẩm</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={changeProductName}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Ảnh</label>
                      <input
                        className="form-control"
                        type="text"
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
                        onChange={changeCreateDate}
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
                        onChange={changeUpdateDate}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="row">
                      <label className="form-label">Trạng Thái</label>
                      <input
                        className="form-control"
                        type="text"
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
                          <Link className="btn btn-danger" to="/product">
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
export default Product_Add_Components;
