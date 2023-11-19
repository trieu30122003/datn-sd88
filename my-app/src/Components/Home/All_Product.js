import { useEffect, useState } from "react";
import Product_Service from "../../Api/Product_Service";
import Header from "./Layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, Col, Row, Slider } from "antd";
export default function All_Product() {
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await Product_Service.getAllColor();
      const data = response.data;
      setPageData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };
  return (
    <>
      <Header />
      <div className="container p-0 mb-2">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner container-fulid">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="https://pubcdn.ivymoda.com/files/news/2023/10/03/6ec1f0523de6ac27cba6eff1b574f1ec.jpg"
                  alt="Image"
                />
              </div>
              <div className="carousel-item container-fulid">
                <img
                  className="w-100"
                  src="https://pubcdn.ivymoda.com/files/news/2023/08/31/128520ad10f51e58c7494d2acf551aa5.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      <section className="section_danhmuc">
        <div className="container">
          <h3 class="title-index">
            <a class="title-name" href="/all-product" title="NEW ARRIVAL">
              NEW ARRIVAL
            </a>
            <img width="202" height="20" class="lazyload loaded" src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" data-src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" alt="title" data-was-processed="true" />
          </h3>
          <div style={{ textAlign: 'right', marginBottom: '10px' }}>
            {/* <p>sắp xếp: </p> */}
            <select>
              <option value="">Sắp xếp <FontAwesomeIcon icon={faFilter} /></option>
              <option value="0">Mới nhất</option>
              <option value="1">Giá từ thấp đến cao</option>
              <option value="2">Giá từ cao đến thấp</option>
            </select>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="filter">
                <h3>Bộ lọc</h3>
                <ul>
                  <li>
                    <a href="#" title="Bộ lọc">
                      Theo giá:
                    </a>
                    <ul>
                      <li>
                        <Slider
                          range
                          step={10}
                          defaultValue={[0, 10]}
                          onChange={onChange}
                          onAfterChange={onAfterChange}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" title="Bộ lọc">
                      Theo hãng
                    </a>
                    <Checkbox.Group
                      style={{
                        width: '100%',
                      }}
                      onChange={onChange}
                    >
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">B</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">C</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">D</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">E</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-9"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}
            >
              {pageData.list && pageData.list.map((product, index) => (
                <div key={index}>
                  <div className="thumb">
                    <picture>
                      <img
                        width="300"
                        height="300"
                        src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                        alt="Cardigan Jacket MS 77E4105"
                      />
                    </picture>
                  </div>
                  <h4>
                    {product.productName}
                    <a
                      href={`/product-detail-page/${product.id}`}
                      title="Cardigan Jacket MS 77E4105"
                    >
                      Xem ngay
                    </a>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>

  );
}