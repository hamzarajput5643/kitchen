import OurStory from "@app/components/website/ourStory/OurStory";
import Partner from "@app/components/website/partner/Partner";
import Services from "@app/components/website/services/Services";
import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <>
      <div>
        <main>
          {/* PAGE INFO */}
          <section
            className="page-info-1 set-bg"
            data-image-src="/src/assets/images/page-info-bg.jpg"
          >
            <div className="section-header">
              <h1 className="text-white">About us</h1>
              <span>~ Our story ~</span>
            </div>
          </section>
          <div>
            <OurStory />
            <Services />
            <Partner/>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
