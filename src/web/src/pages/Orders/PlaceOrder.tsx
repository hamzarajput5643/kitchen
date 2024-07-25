import React from "react";
import "./PlaceOrder.scss";

const PlaceOrder = () => {
  return (
    <>
      <div className="PlaceOrder-box">
        <div className="PlaceOrder-header">
          <h4>Place Order</h4>
        </div>
        <div className="PlaceOrder-body">
          <div className="row">
            <div className="col-6">
              <label className="lable-2">
                Describe the portion you are selling
              </label>
              <input type="text" className="input-feild-2" />
            </div>
            <div className="col-6">
              <label className="lable-2">
                number of portion available for Purchases
              </label>
              <input type="text" className="input-feild-2" />
            </div>
            <div className="col-12">
              <p className="my-2 text-secondary">
                e.g. A resturant size portion of meatloaf with 2 sides
              </p>
            </div>
            <div className="col-12">
              <label className="lable-2">Price per portion</label>
              <div className="d-flex">
                <button className="border-secondary text-dark border-1 px-3">
                  $
                </button>
                <input type="text" className="input-feild-2" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="my-3">Date and Time of Availability</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <label className="lable-2">Available date/Time</label>
            </div>
            <div className="col-12 col-md-3">
              <label className="lable-2">Available Date</label>
              <input type="text" className="input-feild-2" />
            </div>
            <div className="col-12 col-md-3">
              <label className="lable-2">Start Time</label>
              <input type="text" className="input-feild-2" />
            </div>
            <div className="col-12 col-md-3">
              <label className="lable-2">End Time</label>
              <input type="text" className="input-feild-2" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <label className="lable-2">Order Cutoff date/Time</label>
            </div>
            <div className="col-6 col-md-3">
              <label className="lable-2">Cutoff Date</label>
              <input type="text" className="input-feild-2" />
            </div>
            <div className="col-6 col-md-3">
              <label className="lable-2">Cutoff Time</label>
              <input type="text" className="input-feild-2" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="my-3">Delivery / Pickup Options</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <label className="lable-2">Available For Delivery</label>
            </div>
            <div className="col-12 col-md-3">
              <input type="checkbox" />
            </div>
            <div className="col-12 col-md-3">
              <label className="lable-2">Max Delivery Distane</label>
              <input type="text" className="input-feild-2" />
            </div>
            <div className="col-12 col-md-3">
              <label className="lable-2">Delivery Fee</label>
              <div className="d-flex">
                <button className="border-secondary text-dark border-1 px-3">
                  $
                </button>
                <input type="text" className="input-feild-2" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <label className="lable-2">Available For Pickup</label>
            </div>
            <div className="col-12 col-md-3">
              <input type="checkbox" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="my-3">Pickup and Delivery Notes</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="lable-2">Notes</label>
              <input type="text" className="input-feild-2" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn-post-sale">Post For Sale</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
