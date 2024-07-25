import ShopList from "@app/components/website/shopList/ShopList";
import React from "react";

const Shop: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE INFO */}
        <section
          className="page-info-8 set-bg"
          data-image-src="/src/assets/images/page-info-bg-5.jpg"
        >
          <div className="section-header">
            <h1 className="text-white">Four columns wide</h1>
            <span>~ Delicious food ~</span>
          </div>
        </section>
        <div>
            <ShopList/>
        </div>
      </main>
    </>
  );
};

export default Shop;
