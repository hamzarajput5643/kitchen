import React from "react";
import "./SendOrderInvoice.scss";

const SendOrderInvoice = () => {
  return (
    <>
      <div>
        <div className="SendOrderInvoice-box">
          <div className="SendOrderInvoice-header">
            <h4>Send Order Invoice</h4>
          </div>
          <div className="SendOrderInvoice-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <label className="SendOrderInvoice-lable">Order Quantity</label>
                <input className="SendOrderInvoice-input" type="number" />
              </div>
              <div className="col-12 col-md-6">
                <label className="SendOrderInvoice-lable"> X 8.00 =</label>
                <div className="d-flex">
                  <button className="SendOrderInvoice-btn">$</button>
                  <input className="SendOrderInvoice-input" type="number" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label className="SendOrderInvoice-lable">
                  Additional Fees
                </label>
                <div className="d-flex">
                  <button className="SendOrderInvoice-btn">$</button>
                  <input className="SendOrderInvoice-input" type="number" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label className="SendOrderInvoice-lable"> Description</label>
                <input className="SendOrderInvoice-input" type="number" />
              </div>
              <div className="col-12 col-md-6">
                <label className="SendOrderInvoice-lable">Sales Tax Rate</label>
                <div className="d-flex">
                  <input className="SendOrderInvoice-input" type="number" />
                  <button className="SendOrderInvoice-btn">%</button>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label className="SendOrderInvoice-lable">
                  Sales Tax Amount
                </label>
                <div className="d-flex">
                  <button className="SendOrderInvoice-btn">$</button>
                  <input className="SendOrderInvoice-input" type="number" />
                </div>
              </div>
              <div className="col-12">
                <label className="SendOrderInvoice-lable">Order Total</label>
                <div className="d-flex">
                  <button className="SendOrderInvoice-btn">$</button>
                  <input className="SendOrderInvoice-input" type="number" />
                </div>
              </div>
              <div className="col-12">
                <label className="SendOrderInvoice-lable">
                  Buyer Paypal Addres
                </label>
                <input className="SendOrderInvoice-input" type="text" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <button className="btn-Send">Send invoice</button>
                <button className="btn-cncl">Cancel </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOrderInvoice;
