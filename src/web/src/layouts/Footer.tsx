import React from "react";
import { Helmet } from "react-helmet-async";

const Footer: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <footer>
            {/* FOOTER TOP */}
            <div className="ft-top">
              <div className="container">
                <div className="ft-top-wrapper">
                  <div className="ft-logo">
                    <a href="index.html">
                      <img src="/src/assets/Admin/Images/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="row justify-content-between justify-content-xl-start">
                    <div className="col-md-3  ft-col">
                      <h6>About Us</h6>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusan-tium doloremque laudantium, totam rem
                        aperiam,
                      </p>
                    </div>
                    <div className="col-md-5  col-xl-4 offset-xl-1 ft-col">
                      <h6>Get news &amp; offers</h6>
                      <form method="get">
                        <div className="form-inner">
                          <input type="text" placeholder="Enter your mail" />
                          <button>
                            <span className="lnr lnr-envelope" />
                          </button>
                        </div>
                      </form>
                      <div className="social">
                        <a href="#">
                          <i className="zmdi zmdi-twitter" />
                        </a>
                        <a href="#">
                          <i className="zmdi zmdi-facebook-box" />
                        </a>
                        <a href="#">
                          <i className="zmdi zmdi-linkedin" />
                        </a>
                        <a href="#">
                          <i className="zmdi zmdi-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-xl-2  ml-xl-auto ft-col">
                      <h6>Contact Us</h6>
                      <p>No 40 Baria Sreet 133/2</p>
                      <p>+ (156) 1800-366-6666</p>
                      <p>Eric-82@example.com</p>
                      <p>www.royate.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ft-bot">
              <div className="container">
                @ 2018 DesignGalaxy8. Get The Theme
              </div>
            </div>
          </footer>
          {/* CLICK TO TOP */}
          <div className="click-to-top">
            <span className="lnr lnr-arrow-up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
