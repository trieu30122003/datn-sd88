import "../../../index.css";
import React from "react";
export default function Footer() {
  return (
    <>
      <footer class="footer">
      <div class="mid-footer" style={{marginBottom: "50px"}}>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-4 ft-info col-footer">
              <a
                href=""
                class="logo-ft"
                title="Logo"
              >
                <img
                  style={{maxHeight: "100px", width: "auto", borderRadius: "50%",marginTop: "20px"}}
                  width="270"
                  height="256"
                  src="data:image/jpeg;base64,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"
                  alt="YoungBoy"
                />
              </a>
              <h4 class="title-menu">Hình thức thanh toán</h4>
              <ul class="thanhtoan">
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 1"
                    src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_3.png?1694745247263"
                  />
                </li>
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 2"
                    src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_1.png?1694745247263"
                  />
                </li>
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 3"
                    src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_2.png?1694745247263"
                  />
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6 col-lg-2 link-list col-footer">
              <h4 class="title-menu title-menu2">Chính sách</h4>
              <ul class="list-menu">
                <li>
                  <a
                    href=""
                    title="Chính sách thành viên"
                    >Chính sách thành viên</a>
                </li>

                <li>
                  <a
                    href=""
                    title="Chính sách thanh toán"
                    >Chính sách thanh toán</a>
                </li>

                <li>
                  <a
                    href=""
                    title="Hướng dẫn mua hàng"
                    >Hướng dẫn mua hàng</a>
                </li>

                <li>
                  <a
                    href=""
                    title="Quà tặng tri ân"
                    >Quà tặng tri ân</a>
                </li>

                <li>
                  <a
                    href=""
                    title="Bảo mật thông tin cá nhân"
                    >Bảo mật thông tin cá nhân</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 link-list col-footer">
              <h4 class="title-menu title-menu2">Thông tin chung</h4>
              <div class="group-address">
                <ul>
                  <li>
                    <b>Địa chỉ: </b><span> .... </span>
                  </li>
                  <li>
                    <b>Điện thoại: </b><a title="" href=""></a>
                  </li>
                  <li>
                    <b>Email: </b><a title="vuchitrieu2003@gmail.com" href="mailto:vuchitrieu2003@gmail.com"
                      >vuchitrieu2003@gmail.com</a>
                  </li>
                </ul>
              </div>
              <h4 class="title-menu">Liên kết sàn</h4>
              <ul class="social">
                <li>
                  <a href="" title="Shopee"
                    ><img
                      width="32"
                      height="32"
                      title="Shopee"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1694745247263"
                  /></a>
                </li>

                <li>
                  <a href="" title="Lazada"
                    ><img
                      width="32"
                      height="32"
                      title="Lazada"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1694745247263"
                  /></a>
                </li>

                <li>
                  <a href="" title="Tiki"
                    ><img
                      width="32"
                      height="32"
                      title="Tiki"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1694745247263"
                  /></a>
                </li>

                <li>
                  <a href="" title="Sendo"
                    ><img
                      width="32"
                      height="32"
                      title="Sendo"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1694745247263"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-12 col-lg-3">
              <h4 class="title-menu">Hỗ trợ</h4>
              <ul class="call-footer">
                <li>
                  <span class="title">MUA ONLINE (08:00 - 21:00 mỗi ngày)</span>
                  <a href="tel:19006750" title="19006750">19006750</a>
                  <span class="content"
                    >Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
                </li>
              </ul>

              <h4 class="title-menu">Mạng xã hội</h4>

              <ul class="social">
                <li>
                  <a href="" title="Zalo"
                    ><img
                      width="32"
                      height="32"
                      title="Zalo"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                  /></a>
                </li>

                <li>
                  <a href="" title="Facebook"
                    ><img
                      width="32"
                      height="32"
                      title="Facebook"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                  /></a>
                </li>

                <li>
                  <a href="" title="Youtube"
                    ><img
                      width="32"
                      height="32"
                      title="Youtube"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                  /></a>
                </li>

                <li>
                  <a href="" title="Google"
                    ><img
                      width="32"
                      height="32"
                      title="Google"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <span class="copy-right"
                >Bản quyền thuộc về <b>Yongboy</b>.</span>
              <span class="opacity1">
                Cung cấp bởi
                <a
                  href=""
                  rel="noopener"
                  title="SD88"
                  target="_blank"
                  >SD88</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
