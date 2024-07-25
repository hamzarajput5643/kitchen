import React from "react";

const Feature: React.FC = () => {
  return (
    <>
      {/* FEATURE */}
      <section className="section-primary pt-150 pb-120 feature">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/src/assets/images/feature.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="feature-content">
                <div className="heading">
                  <h3>
                    <a href="shop-single.html">Beef steak with green</a>
                  </h3>
                  <span className="price">
                    <span>$</span>45
                  </span>
                </div>
                <div className="body">
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure. To take a trivial example,
                    which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has any
                    right to find fault with a man who chooses to enjoy a
                    pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure
                  </p>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  {/* OWL-CAROUSEL */}
                  <div className="feature-slider">
                    <div
                      className="owl-carousel owl-theme style"
                      id="feature-carousel"
                    >
                      <div className="item">
                        <div className="feature-small">
                          <a href="shop-single.html">
                            <img
                              src="/src/assets/images/feature-small-1.png"
                              alt=""
                            />
                          </a>
                          <div className="item-info">
                            <h6>
                              <a href="shop-single.html">Salat banana flower</a>
                            </h6>
                            <span className="price">
                              <span>$</span>40
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="feature-small">
                          <a href="shop-single.html">
                            <img
                              src="/src/assets/images/feature-small-2.png"
                              alt=""
                            />
                          </a>
                          <div className="item-info">
                            <h6>
                              <a href="shop-single.html">Beef steak with red</a>
                            </h6>
                            <span className="price">
                              <span>$</span>56
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="feature-small">
                          <a href="shop-single.html">
                            <img
                              src="/src/assets/images/feature-small-3.png"
                              alt=""
                            />
                          </a>
                          <div className="item-info">
                            <h6>
                              <a href="shop-single.html">
                                Classic Linguini Fini
                              </a>
                            </h6>
                            <span className="price">
                              <span>$</span>37
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="feature-small">
                          <a href="shop-single.html">
                            <img
                              src="/src/assets/images/feature-small-4.png"
                              alt=""
                            />
                          </a>
                          <div className="item-info">
                            <h6>
                              <a href="shop-single.html">Salat banana flower</a>
                            </h6>
                            <span className="price">
                              <span>$</span>50
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* NAVIGATION BUTTON */}
                    <span className="lnr lnr-chevron-left" id="feature-prev" />
                    <span className="lnr lnr-chevron-right" id="feature-next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
