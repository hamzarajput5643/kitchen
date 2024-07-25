import ShopSinglePageContent from "@app/components/website/shopSinglePageContent/ShopSinglePageContent";
import React from "react";

const ShopSinglePage: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE INFO */}
        <section
          className="page-info-8 set-bg"
          data-image-src="/src/assets/images/page-info-bg-5.jpg"
        >
          <div className="section-header">
            <h1 className="text-white">Shop single</h1>
            <span>~ Delicious food ~</span>
          </div>
        </section>
        <div>
            <ShopSinglePageContent/>
        </div>
      </main>
    </>
  );
};

export default ShopSinglePage;
