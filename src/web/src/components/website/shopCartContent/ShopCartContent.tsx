import React from "react";

const ShopCartContent: React.FC = () => {
  return (
    <>
      {/* SHOP CART */}
      <div className="section-primary shop-cart pt-120 pb-101">
        <div className="container">
          <div className="woocommerce">
            <form action="#" className="woocommerce-cart-form">
              <table
                className="table-cart shop_table shop_table_responsive cart woocommerce-cart-form__contents table"
                id="shop_table"
              >
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="woocommerce-cart-form__cart-item cart_item">
                    <td className="product-remove">
                      <a
                        href="#"
                        className="remove"
                        aria-label="Remove this item"
                      >
                        <span className="lnr lnr-cross-circle" />
                      </a>
                    </td>
                    <td className="product-thumbnail">
                      <a href="#">
                        <img
                          src="/src/assets/images/shop-cart-1.jpg"
                          className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                        />
                      </a>
                    </td>
                    <td className="product-name" data-title="Product">
                      <a href="shop-single.html">Best Brownies</a>
                    </td>
                    <td className="product-price" data-title="Price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        18
                      </span>
                    </td>
                    <td className="product-quantity" data-title="Quantity">
                      <div className="quantity">
                        <input
                          type="number"
                          className="input-text qty text input-quantity"
                          step={1}
                          min={0}
                          name="cart[5934c1ec0cd31e12bd9084d106bc2e32][qty]"
                          defaultValue={1}
                          title="Qty"
                          size={4}
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
                    </td>
                    <td className="product-subtotal" data-title="Total">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        18
                      </span>
                    </td>
                  </tr>
                  <tr className="woocommerce-cart-form__cart-item cart_item">
                    <td className="product-remove">
                      <a
                        href="#"
                        className="remove"
                        aria-label="Remove this item"
                      >
                        <span className="lnr lnr-cross-circle" />
                      </a>
                    </td>
                    <td className="product-thumbnail">
                      <a href="shop-single.html">
                        <img
                          src="/src/assets/images/shop-cart-2.jpg"
                          className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                        />
                      </a>
                    </td>
                    <td className="product-name" data-title="Product">
                      <a href="shop-single.html">Angela's Awesome</a>
                    </td>
                    <td className="product-price" data-title="Price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        28
                      </span>
                    </td>
                    <td className="product-quantity" data-title="Quantity">
                      <div className="quantity">
                        <input
                          type="number"
                          className="input-text qty text input-quantity"
                          step={1}
                          min={0}
                          name="cart[5934c1ec0cd31e12bd9084d106bc2e32][qty]"
                          defaultValue={1}
                          title="Qty"
                          size={4}
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
                    </td>
                    <td className="product-subtotal" data-title="Total">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        28
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-remove none">&nbsp;</td>
                    <td colSpan={3} className="actions">
                      <div className="coupon">
                        <input
                          type="text"
                          name="coupon_code"
                          className="input-text form-control"
                          id="coupon_code"
                          placeholder="coupon code"
                        />
                        <input
                          type="submit"
                          className="button au-btn"
                          name="apply_coupon"
                          defaultValue="Apply"
                        />
                      </div>
                      <input
                        type="hidden"
                        id="_wpnonce"
                        name="_wpnonce"
                        defaultValue="54045be64c"
                      />
                    </td>
                    <td colSpan={2} className="cart-subtotal">
                      <label>Subtotal:</label>
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        102
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="bottom">
                <input
                  type="submit"
                  className="button au-btn update-btn has-bd bd-999 round"
                  name="update_cart"
                  defaultValue="Update cart"
                />
                <a
                  href="shop-list.html"
                  className=" au-btn go-shopping round has-bg au-btn--hover"
                >
                  Go shopping
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCartContent;
