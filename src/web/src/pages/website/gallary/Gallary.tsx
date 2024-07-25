import GallaryPortfolio from "@app/components/website/gallaryPortfolio/GallaryPortfolio";
import React from "react";

const Gallary: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE BREADCRUMB */}
        <section className="page-breadcrumb wide">
          <div className="container-fluid">
            <div className="row justify-content-between align-content-center">
              <div className="col-md-auto">
                <h3>four columns Wide</h3>
              </div>
              <div className="col-md-auto">
                <ul className="au-breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Gallery Portfolio Lists</a>
                  </li>
                  <li>
                    <a href="#">Four Columns Wide</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div>
          <GallaryPortfolio />
        </div>
      </main>
    </>
  );
};

export default Gallary;
