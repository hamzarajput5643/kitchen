import React from "react";

const Partner: React.FC = () => {
  return (
    <>
      {/* PARTNER */}
      <div className="container">
        <div className="partner has-bd">
          <div className="row justify-content-between">
            <div className="col-6 col-lg-auto text-center">
              <a href="#" className="image-holder">
                <img
                  src="/src/assets/images/partner-2.png"
                  className="wow zoomIn"
                  data-wow-delay="0.3s"
                />
              </a>
            </div>
            <div className="col-6 col-lg-auto text-center">
              <a href="#" className="image-holder">
                <img
                  src="/src/assets/images/partner-3.png"
                  className="wow zoomIn"
                  data-wow-delay="0.5s"
                />
              </a>
            </div>
            <div className="col-6 col-lg-auto text-center">
              <a href="#" className="image-holder">
                <img
                  src="/src/assets/images/partner-4.png"
                  className="wow zoomIn"
                  data-wow-delay="0.7s"
                />
              </a>
            </div>
            <div className="col-6 col-lg-auto text-center">
              <a href="#" className="image-holder">
                <img
                  src="/src/assets/images/partner-5.png"
                  className="wow zoomIn"
                  data-wow-delay="0.9s"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
