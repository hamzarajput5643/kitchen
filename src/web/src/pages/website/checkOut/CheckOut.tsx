import CheckOutContent from "@app/components/website/checkOutContent/CheckOutContent";
import React from "react";

const CheckOut: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE BREADCRUMB */}
        <section className="page-breadcrumb">
          <div className="container">
            <div className="row justify-content-between align-content-center">
              <div className="col-md-auto">
                <h3>CheckOut</h3>
              </div>
              <div className="col-md-auto">
                <ul className="au-breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">My Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div>
            <CheckOutContent/>  
        </div>
      </main>
    </>
  );
};

export default CheckOut;
