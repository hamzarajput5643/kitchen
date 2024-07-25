import React from "react";
import { NavLink } from "react-router-dom";

const ShopList: React.FC = () => {
  return (
    <>
      {/* SHOP LIST */}
      <section className="section-primary pb-113 shop-list wide">
        <div className="container-fluid">
          <div className="row products">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-1.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Bacon coil baked</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star-outline" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      65
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-2.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Chantal's New York</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      12
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-3.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Mongolian Beef</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      23
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-13.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Fluffy Pancakes </NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      14
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-4.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Angela's Awesome</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star-outline" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      28
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-5.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Colleen's Slow Cooker</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      39
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-6.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Baked Teriyaki Chicken</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star-outline" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      24
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-14.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Best Brownies</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star-outline" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      14
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-7.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Sour Cream Bread</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      34
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-8.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Best Brownies</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      27
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-9.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Mom's Zucchini Bread</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      12
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-15.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Fried shrimp</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      27
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-10.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Too Much Chocolate</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      16
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-11.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Fluffy Pancakes</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star-outline" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      25
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-12.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Easter Breakfast</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      29
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item">
                <div className="thumb">
                  <NavLink
                    to="/shop-single"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img src="/src/assets/images/shop-list-16.jpg" />
                  </NavLink>
                  <NavLink
                    to="/shop-cart"
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                  >
                    Add to cart
                  </NavLink>
                </div>
                <div className="info">
                  <h5 className="woocommerce-loop-product__title">
                    <NavLink to="/shop-single">Salad of fish</NavLink>
                  </h5>
                  <div className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      30
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="woocommerce-pagination">
            <ul className="page-numbers">
              <li>
                <NavLink to="#" className="page-numbers prev">
                  <span className="lnr lnr-arrow-left" />
                </NavLink>
              </li>
              <li>
                <span className="page-numbers current">1</span>
              </li>
              <li>
                <NavLink to="#" className="page-numbers inactive">
                  2
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="page-numbers inactive">
                  3
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="page-numbers next">
                  <span className="lnr lnr-arrow-right" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopList;
