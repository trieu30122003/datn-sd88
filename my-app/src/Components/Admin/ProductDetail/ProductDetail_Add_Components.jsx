import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Product_Detail_Service from "../../../Api/Product_Detail_Service";

function ProductDetail_Add_Components() {
    const [defaultPrice, setDefaultPrice] = useState("");
    const [price, setPrice] = useState("");
    const [createDate, setCreateDate] = useState("");
    const [updateDate, setUpdateDate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");

    const changeDefaultPrice = (e) => {
        setDefaultPrice(e.target.value)
    };
    const changeCreateDate = (e) => {
        setCreateDate(e.target.value)
    };
    const changeQuantity = (e) => {
        setQuantity(e.target.value)
    };
    const changeUpdateDate = (e) => {
        setUpdateDate(e.target.value)
    };
    const changeStatus = (e) => {
        setStatus(e.target.value)
    };
    const changePrice = (e) => {
        setPrice(e.target.value)
    };


    const save = (e) => {
        e.preventDefault();
        let productDetail = {
            defaultPrice,
            price,
            quantity,
            createDate,
            updateDate,
            status,
        };
        Product_Detail_Service.save(productDetail).then((res) => {
            if (res.status === 200) {
                alert("Thêm sản phẩm thành công!");
                window.location = "/product-detail";
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
                            <h3 className="text-center">ADD Product Chi tiết</h3>
                            <br />
                            <form className="col-md-12" id="myForm">
                                <div className="row">

                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">Giá gốc</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={changeDefaultPrice}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="row">
                                            <label className="form-label">Giá</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={changePrice}
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
                                            <label className="form-label">Số lượng</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={changeQuantity}
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
                                                    <Link className="btn btn-danger" to="/product-detail">
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
export default ProductDetail_Add_Components;
