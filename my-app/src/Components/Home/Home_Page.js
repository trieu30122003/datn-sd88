import "../../index.css";
import "../../style/css/bootstrap-4-3-min-index.css";
import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import swiper from "../../style/js/swiper";
export default function Home_Page() {
  var swiperdanhmuc = new swiper(".danhmuc-slider", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    autoplay: false,
    navigation: {
      nextEl: ".section_danhmuc .section-next",
      prevEl: ".section_danhmuc .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  return (
    (
      <>
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
      </>
    ),
    (
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
        {/* Carousel End */}


        <section className="section_danhmuc">
        <div className="container">
        <h3 class="title-index">
				<a class="title-name" href="banh-dang-giam-gia" title="NEW ARRIVAL">
        NEW ARRIVAL
				</a>
				<img width="202" height="20" class="lazyload loaded" src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" data-src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" alt="title" data-was-processed="true" />
			</h3>
          <div
            className="danhmuc-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            style={{cursor: "grab"}}
          >
            <div
              className="swiper-wrapper"
              style={{transform: "translate3d(0px, 0px, 0px)"}}
            >
              <div
                className="swiper-slide swiper-slide-active"
                style={{width: "262px", marginRight: "20px"}}
              >
                <div className="thumb">
                  <picture>
                    <img
                      width="320"
                      height="400"
                      src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                      alt="Cardigan Jacket MS 77E4105"
                    />
                  </picture>
                </div>
                <h3>
                Cardigan Jacket MS 77E4105
                  <a
                    href=""
                    title="Cardigan Jacket MS 77E4105"
                  >
                    Xem ngay
                  </a>
                </h3>
              </div>

              <div
                className="swiper-slide swiper-slide-active"
                style={{width: "262px", marginRight: "20px"}}
              >
                <div className="thumb">
                  <picture>
                    <img
                      width="320"
                      height="400"
                      src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                      alt="Cardigan Jacket MS 77E4105"
                    />
                  </picture>
                </div>
                <h3>
                Cardigan Jacket MS 77E4105
                  <a
                    href=""
                    title="Cardigan Jacket MS 77E4105"
                  >
                    Xem ngay
                  </a>
                </h3>
              </div>

              <div
                className="swiper-slide swiper-slide-active"
                style={{width: "262px", marginRight: "20px"}}
              >
                <div className="thumb">
                  <picture>
                    <img
                      width="320"
                      height="400"
                      src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                      alt="Cardigan Jacket MS 77E4105"
                    />
                  </picture>
                </div>
                <h3>
                Cardigan Jacket MS 77E4105
                  <a
                    href=""
                    title="Cardigan Jacket MS 77E4105"
                  >
                    Xem ngay
                  </a>
                </h3>
              </div>

              <div
                className="swiper-slide swiper-slide-active"
                style={{width: "262px", marginRight: "20px"}}
              >
                <div className="thumb">
                  <picture>
                    <img
                      width="320"
                      height="400"
                      src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                      alt="Cardigan Jacket MS 77E4105"
                    />
                  </picture>
                </div>
                <h3>
                Cardigan Jacket MS 77E4105
                  <a
                    href=""
                    title="Cardigan Jacket MS 77E4105"
                  >
                    Xem ngay
                  </a>
                </h3>
              </div>

              <div
                className="swiper-slide swiper-slide-active"
                style={{width: "262px", marginRight: "20px"}}
              >
                <div className="thumb">
                  <picture>
                    <img
                      width="320"
                      height="400"
                      src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                      alt="Cardigan Jacket MS 77E4105"
                    />
                  </picture>
                </div>
                <h3>
                Cardigan Jacket MS 77E4105
                  <a
                    href=""
                    title="Cardigan Jacket MS 77E4105"
                  >
                    Xem ngay
                  </a>
                </h3>
              </div>

              <div
                className="swiper-slide swiper-slide-active"
                style={{width: "262px", marginRight: "20px"}}
              >
                <div className="thumb">
                  <picture>
                    <img
                      width="320"
                      height="400"
                      src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/27/fff98232012bbb4e0554de70c0696570.JPG"
                      alt="Cardigan Jacket MS 77E4105"
                    />
                  </picture>
                </div>
                <h3>
                Cardigan Jacket MS 77E4105
                  <a
                    href=""
                    title="Cardigan Jacket MS 77E4105"
                  >
                    Xem ngay
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
        <Footer />
      </>
    )
  );
}
