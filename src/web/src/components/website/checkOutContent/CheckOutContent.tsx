import React from "react";

const CheckOutContent: React.FC = () => {
  return (
    <>
      {/* SHOPPING CHECKOUT */}
      <section className="checkout-page section-primary pt-120">
        <div className="container">
          <div className="woocommerce">
            <div className="woocommerce-info-wrapper">
              <div id="accordion">
                <div className="woocommerce-info">
                  <img src="/src/assets/images/returning-customer.png" />
                  Returning customer?
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    id="headingOne"
                  >
                    {" "}
                    Click here to login
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <form
                    method="get"
                    className="woocommerce-form woocommerce-form-login login"
                  >
                    <div className="form-holder">
                      <label htmlFor="username">
                        Username or email address{" "}
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        name="username"
                        id="username"
                      />
                    </div>
                    <div className="form-holder">
                      <label htmlFor="password">
                        Password <span className="required">*</span>
                      </label>
                      <input
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        type="password"
                        name="password"
                        id="password"
                      />
                    </div>
                    <div className="form-holder last">
                      <input
                        type="submit"
                        className="woocommerce-Button button au-btn round has-bg"
                        name="login"
                        defaultValue="Login"
                      />
                      <label className="woocommerce-form__label woocommerce-form__label-for-checkbox inline">
                        <input
                          className="woocommerce-form__input woocommerce-form__input-checkbox"
                          name="rememberme"
                          type="checkbox"
                          id="rememberme"
                          defaultValue="forever"
                        />
                        Remember me
                        <span className="checkmark" />
                      </label>
                    </div>
                    <p className="woocommerce-LostPassword lost_password">
                      <a href="#">Lost your password?</a>
                    </p>
                  </form>
                </div>
                <div className="woocommerce-info">
                  <img src="/src/assets/images/have-a-coupon.png" />
                  Have a coupon?
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    id="headingTwo"
                  >
                    {" "}
                    Click here to enter your code
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <form className="checkout_coupon" method="post">
                    <p className="form-row form-row-first">
                      <input
                        type="text"
                        name="coupon_code"
                        className="form-control"
                        placeholder="Coupon code"
                        id="coupon_code"
                      />
                    </p>
                    <p className="form-row form-row-last">
                      <input
                        type="submit"
                        className="button au-btn has-bg round"
                        name="apply_coupon"
                        defaultValue="Apply coupon"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <form method="get" className="checkout woocommerce-checkout">
              <div className="row">
                <div className="col-md-6">
                  <div className="woocommerce-billing-fields">
                    <h5>Billing Details</h5>
                    <div className="woocommerce-billing-fields__field-wrapper">
                      <div className="row">
                        <div className="col-md-6">
                          <p
                            className="form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                            id="billing_first_name_field"
                          >
                            <label htmlFor="billing_first_name">
                              First Name
                              <span className="required" title="required">
                                *
                              </span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="billing_first_name"
                              id="billing_first_name"
                            />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p
                            className="form-row form-row-last validate-required"
                            id="billing_last_name_field"
                          >
                            <label htmlFor="billing_last_name">
                              Last Name
                              <span className="required" title="required">
                                *
                              </span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="billing_last_name"
                              id="billing_last_name"
                            />
                          </p>
                        </div>
                      </div>
                      <p
                        className="form-row form-row-wide"
                        id="billing_company_field"
                      >
                        <label htmlFor="billing_company">Company name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_company"
                          id="billing_company"
                          autoComplete="organization"
                        />
                      </p>
                      <p
                        className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                        id="billing_country_field"
                      >
                        <label htmlFor="billing_country">
                          Country
                          <span className="required" title="required">
                            *
                          </span>
                        </label>
                        <select
                          className="form-control country_to_state country_select select2-hidden-accessible"
                          id="billing_country"
                          name="billing_country"
                          aria-hidden="true"
                          tabIndex={-1}
                          autoComplete="country"
                        >
                          <option value="">Vietnam</option>
                          <option value="">United States (US)</option>
                          <option value="">England</option>
                        </select>
                      </p>
                      <p
                        className="form-row form-row-wide address-field validate-required"
                        id="billing_address_1_field"
                        data-priority={50}
                      >
                        <label htmlFor="billing_address_1">
                          Address
                          <span className="required" title="required">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_address_1"
                          id="billing_address_1"
                          placeholder="Street Address"
                          autoComplete="address-line1"
                        />
                        <input
                          type="text"
                          className="form-control"
                          name="billing_address_2"
                          id="billing_address_2"
                          placeholder="Apartment, suite, unit etc. (optional)"
                          autoComplete="address-line1"
                        />
                      </p>
                      <p
                        className="form-row form-row-wide address-field validate-required"
                        id="billing_city_field"
                        data-priority={70}
                        data-o_class="form-row form-row-wide address-field validate-required"
                      >
                        <label htmlFor="billing_city">
                          Town / City
                          <span className="required" title="required">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_city"
                          id="billing_city"
                          autoComplete="address-level2"
                        />
                      </p>
                      <p
                        className="form-row form-row-wide address-field validate-postcode"
                        id="billing_postcode_field"
                        data-priority={65}
                        data-o_class="form-row form-row-wide address-field validate-postcode"
                      >
                        <label htmlFor="billing_postcode">
                          Postcode / ZIP
                          <span className="required" title="required">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_postcode"
                          id="billing_postcode"
                          autoComplete="postal-code"
                        />
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <p
                            className="form-row form-row-first validate-required validate-phone"
                            id="billing_phone_field"
                            data-priority={100}
                          >
                            <label htmlFor="billing_phone">
                              Phone
                              <span className="required" title="required">
                                *
                              </span>
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              name="billing_phone"
                              id="billing_phone"
                              autoComplete="tel"
                            />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p
                            className="form-row form-row-last validate-required validate-email"
                            id="billing_email_field"
                            data-priority={110}
                          >
                            <label htmlFor="billing_email">
                              Email address
                              <span className="required" title="required">
                                *
                              </span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="billing_email"
                              id="billing_email"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="woocommerce-account-fields">
                        <p className="form-row form-row-wide create-account woocommerce-validated">
                          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                            <input
                              className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                              id="createaccount"
                              type="checkbox"
                              name="createaccount"
                              defaultValue={1}
                            />
                            <span>Create an account?</span>
                            <span className="checkmark" />
                          </label>
                        </p>
                      </div>
                      <div className="woocommerce-additional-fields">
                        <h5>Additional information</h5>
                        <div className="woocommerce-additional-fields__field-wrapper">
                          <p
                            className="form-row notes"
                            id="order_comments_field"
                            data-priority
                          >
                            <label htmlFor="order_comments">Order notes</label>
                            <textarea
                              name="order_comments"
                              className="form-control"
                              id="order_comments"
                              placeholder="Notes about your order, e.g. special notes for delivery."
                              defaultValue={""}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="woocommerce-checkout-review-order-wrap">
                    <h5 id="order_review_heading">Your order</h5>
                    <div
                      id="order_review"
                      className="woocommerce-checkout-review-order"
                    >
                      <table className="shop_table woocommerce-checkout-review-order-table">
                        <tbody>
                          <tr className="cart_item">
                            <td className="product-name">
                              <img src="/src/assets/images/check-out-1.jpg" />
                              <div className="review-wrap">
                                <span className="rv-titel">Best Brownies</span>
                                <span className="product-quantity">x1</span>
                              </div>
                            </td>
                            <td className="product-total">
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                18
                              </span>
                            </td>
                          </tr>
                          <tr className="cart_item">
                            <td className="product-name">
                              <img src="/src/assets/images/check-out-2.jpg" />
                              <div className="review-wrap">
                                <span className="rv-titel">
                                  Angela's Awesome
                                </span>
                                <span className="product-quantity">x3</span>
                              </div>
                            </td>
                            <td className="product-total">
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                84
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="cart-total">
                        <div className="cart-subtotal">
                          <p>
                            <span className="title">Subtotal</span>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              102
                            </span>
                          </p>
                        </div>
                        <div className="shipping">
                          <p>
                            <span className="title">Shipping</span>
                            there are no shipping methods available. please
                            double check your address, or contact us if you need
                            any help.
                          </p>
                        </div>
                        <div className="order-total">
                          <p>
                            <span className="title">Total</span>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              102
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        id="payment"
                        className="woocommerce-checkout-payment"
                      >
                        <ul
                          className="wc_payment_methods payment_methods methods"
                          id="accordion-1"
                        >
                          <li className="wc_payment_method payment_method_cheque">
                            <label
                              htmlFor="payment_method_cheque"
                              data-toggle="collapse"
                              data-target="#collapseOne-1"
                              id="headingOne-1"
                            >
                              <input
                                id="payment_method_cheque"
                                type="radio"
                                className="input-radio"
                                name="payment_method"
                                defaultValue="cheque"
                                data-order_button_text
                                defaultChecked
                              />
                              Check payments
                              <span className="checkmark" />
                            </label>
                            <div
                              id="collapseOne-1"
                              className="collapse show"
                              data-parent="#accordion-1"
                            >
                              <div className="payment_box payment_method_cheque">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="wc_payment_method payment_method_cod">
                            <div className="paypal">
                              <label
                                htmlFor="payment_method_cod"
                                data-toggle="collapse"
                                data-target="#collapseTwo-1"
                                id="headingTwo-1"
                              >
                                <input
                                  id="payment_method_cod"
                                  type="radio"
                                  className="input-radio"
                                  name="payment_method"
                                  defaultValue="cod"
                                  data-order_button_text
                                />
                                Paypal
                                <span className="checkmark" />
                              </label>
                              <div className="payment_box payment_method_cod">
                                <img src="/src/assets/images/paypal.png" />
                                <a href="#">What is paypal?</a>
                              </div>
                            </div>
                            <div
                              id="collapseTwo-1"
                              className="collapse"
                              data-parent="#accordion-1"
                            >
                              <p>
                                Pay via PayPal; you can pay with your credit
                                card if you don’t have a PayPal account.
                              </p>
                            </div>
                          </li>
                        </ul>
                        <div className="form-row place-order">
                          <input
                            type="submit"
                            className="button alt au-btn round has-bg"
                            name="woocommerce_checkout_place_order"
                            id="place_order"
                            defaultValue="Poceed to paypal"
                            data-value="Place order"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutContent;
