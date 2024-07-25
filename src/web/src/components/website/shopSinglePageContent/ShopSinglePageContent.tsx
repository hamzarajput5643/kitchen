import React from "react";

const ShopSinglePageContent: React.FC = () => {
  return (
    <>
      {/* SHOP SINGLE */}
      <section className="section-primary pt-150 pb-113 shop-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images">
                <figure className="woocommerce-product-gallery__wrapper">
                  <div className="woocommerce-product-gallery__image">
                    <img
                      id="zoom-image"
                      className="attachment-shop_single size-shop_single wp-post-image"
                      src="/src/assets/images/shop-single-medium-1.jpg"
                      data-zoom-image="images/shop-single-big-1.jpg"
                    />
                  </div>
                </figure>
                <div id="shop-single-thumb">
                  <a
                    href="#"
                    data-image="images/shop-single-medium-1.jpg"
                    data-zoom-image="images/shop-single-big-1.jpg"
                  >
                    <img src="/src/assets/images/shop-single-small-1.jpg" />
                  </a>
                  <a
                    href="#"
                    data-image="images/shop-single-medium-2.jpg"
                    data-zoom-image="images/shop-single-big-2.jpg"
                  >
                    <img src="/src/assets/images/shop-single-small-2.jpg" />
                  </a>
                  <a
                    href="#"
                    data-image="images/shop-single-medium-3.jpg"
                    data-zoom-image="images/shop-single-big-3.jpg"
                  >
                    <img src="/src/assets/images/shop-single-small-3.jpg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="summary entry-summary">
                <h3 className="product_title entry-title">
                  Colleen's Slow Cooker
                </h3>
                <div className="info">
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      39
                    </span>
                  </span>
                  <span className="star-rating">
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                    <i className="zmdi zmdi-star" />
                  </span>
                </div>
                <div className="woocommerce-product-details__short-description">
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure. To take a trivial example,
                    which of us ever undertakes laborious.
                  </p>
                </div>
                <form
                  className="cart"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="quantity">
                    <input
                      type="number"
                      className="input-text qty text"
                      step={1}
                      min={0}
                      name="cart[5934c1ec0cd31e12bd9084d106bc2e32][qty]"
                      defaultValue={1}
                      title="Qty"
                      size={4}
                      id="input-quantity"
                    />
                    <div className="icon">
                      <a href="#" className="number-button plus">
                        +
                      </a>
                      <a href="#" className="number-button minus">
                        -
                      </a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="add-to-cart"
                    className="single_add_to_cart_button button alt au-btn round has-bg au-btn--hover"
                  >
                    Add to cart
                  </button>
                </form>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">0036982</span>
                  </span>
                  <span className="posted_in">
                    Category:{" "}
                    <a href="#" rel="tag">
                      Other
                    </a>
                  </span>
                  <span className="tagged_as">
                    Tag:
                    <a href="#" rel="tag">
                      Bakery
                    </a>
                    ,
                    <a href="#" rel="tag">
                      Sea Food
                    </a>
                  </span>
                </div>
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
            </div>
          </div>
          {/* WOOCOMMERCE TABS */}
          <div className="woocommerce-tabs wc-tabs-wrapper">
            <div id="shop-single-tab">
              <ul className="tabs wc-tabs">
                <li className="description_tab">
                  <a href="#description">Description</a>
                </li>
                <li className="additional_information_tab">
                  <a href="#add-info">Additional Information</a>
                </li>
                <li className="reviews_tab">
                  <a href="#review">Reviews (0)</a>
                </li>
              </ul>
              <div
                className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                id="description"
              >
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.{" "}
                </p>
              </div>
              <div
                className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
                id="add-info"
              >
                <table className="shop_attributes">
                  <tbody>
                    <tr>
                      <th>Weight</th>
                      <td className="product_weight">2kg</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td className="product_dimensions">15 x 20 x 15 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="review" className="woocommerce-Reviews">
                <div id="comments">
                  <h6 className="woocommerce-noreviews">
                    BE THE FIRST TO REVIEW
                  </h6>
                </div>
                <div id="review_form_wrapper">
                  <div id="review_form">
                    <div id="respond" className="comment-respond">
                      <form
                        method="get"
                        id="comments-form"
                        className="comments-form"
                      >
                        <p className="comment-notes">
                          Your email address will not be published. Required
                          fields are marked.
                        </p>
                        <div className="comment-form-rating">
                          <label>Your rating</label>
                          <span className="star-rating">
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                          </span>
                        </div>
                        <p className="comment-form-comment">
                          <textarea
                            id="comment"
                            name="comment"
                            className="form-control"
                            required
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </p>
                        <p className="comment-form-author">
                          <input
                            id="author"
                            name="author"
                            type="text"
                            className="form-control"
                            aria-required="true"
                            required
                            placeholder="Your Name"
                          />
                        </p>
                        <p className="comment-form-email">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            aria-required="true"
                            required
                            placeholder="Your Mail"
                          />
                        </p>
                        <p className="form-submit">
                          <input
                            name="submit"
                            type="submit"
                            id="submit"
                            className="submit au-btn round has-bg"
                            defaultValue="Submit"
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RELATED PRODUCT */}
          <div className="related products">
            <h4>Related products</h4>
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="thumb">
                    <a
                      href="#"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img src="/src/assets/images/shop-list-4.jpg" />
                    </a>
                    <a
                      href="#"
                      className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="info">
                    <h5 className="woocommerce-loop-product__title">
                      <a href="#">Angela's Awesome</a>
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
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="thumb">
                    <a
                      href="#"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img src="/src/assets/images/shop-list-11.jpg" />
                    </a>
                    <a
                      href="#"
                      className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="info">
                    <h5 className="woocommerce-loop-product__title">
                      <a href="#">Fluffy Pancakes</a>
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
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="thumb">
                    <a
                      href="#"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img src="/src/assets/images/shop-list-6.jpg" />
                    </a>
                    <a
                      href="#"
                      className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="info">
                    <h5 className="woocommerce-loop-product__title">
                      <a href="#">Baked Teriyaki Chicken</a>
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
              <div className="col-md-4 col-lg-3">
                <div className="item mb-0">
                  <div className="thumb">
                    <a
                      href="#"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img src="/src/assets/images/shop-list-17.jpg" />
                    </a>
                    <a
                      href="#"
                      className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="info">
                    <h5 className="woocommerce-loop-product__title">
                      <a href="#">Best Brownies</a>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopSinglePageContent;
