import "./ManageOrder.scss";
import { SlEnvolope } from "react-icons/sl";
import img from "../../../src/assets/Admin/Images/Fog and Knief.png"

const ManageOrder = () => {
  return (
    <>
      <div>
        <div className="ManageOrder-box">
          <div className="ManageOrder-header">
            <h4>Manage Order</h4>
          </div>
          <div className="ManageOrder-body">
            <div className="row">
              <div className="col-2">
                <img src={img} alt="" width="100%" />
              </div>
              <div className="col-10">
                <p className="fw-bold m-0 my-2 mt-3">
                  Beef Stew with Salad and Homemade Biscuits
                </p>
                <p className="m-0 my-2">
                  Order Cutoff Time: Mon Oct 09 05:00 PM - 01 jan 09:30 PM
                </p>
                <p className="m-0 my-2">
                  Order Available Time: Mon Oct 09 05:00 PM - 01 jan 09:30 PM
                </p>
                <p className="m-0 my-2">
                  Quantity Available: 10 - Quantity Sold: 0{" "}
                </p>
                <p className="m-0 my-2">Item Total Sales Amount: </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-4">
                <h5>Order details</h5>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <p className="my-1 pt-1">User Name</p>
              </div>
              <div className="col-2">
                <p className="my-1 pt-1">Menu Buyer 1</p>
              </div>
              <div className="col-8">
                <button className="btn-CutomBuy">
                  <SlEnvolope className="me-1 mb-1" /> Custom Buyer
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <p className="my-1 pt-1">Qty Desc</p>
              </div>
              <div className="col-10">
                <p className="my-1 pt-1">Large portion of stew with a side salad and  2 home made biscuits</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <p className="my-1 pt-1">Item Price</p>
              </div>
              <div className="col-10">
                <p className="my-1 pt-1">$8,00</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <p className="my-1 pt-1">Order Quantity</p>
              </div>
              <div className="col-10">
                <p className="my-1 pt-1">2</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <p className="my-1 pt-1">Order Price</p>
              </div>
              <div className="col-10">
                <p className="my-1 pt-1">$16.00</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <p className="my-1 pt-1">Order Status</p>
              </div>
              <div className="col-10">
                <p className="my-1 pt-1">Accepted</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
              </div>
              <div className="col-10">
                <button className="btn-snd-order">$ Send Order Invoice</button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
              </div>
              <div className="col-10">
                <button className="btn-cncl-order" >Cancel Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrder;
