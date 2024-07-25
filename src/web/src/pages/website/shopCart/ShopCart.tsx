import ShopCartContent from "@app/components/website/shopCartContent/ShopCartContent";
import React from "react";

const ShopCart: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE BREADCRUMB */}
        <section className="page-breadcrumb">
          <div className="container">
            <div className="row justify-content-between align-content-center">
              <div className="col-md-auto">
                <h3>Cart</h3>
              </div>
              <div className="col-md-auto">
                <ul className="au-breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div>
            <ShopCartContent/>
        </div>
      </main>
    </>
  );
};

export default ShopCart;
