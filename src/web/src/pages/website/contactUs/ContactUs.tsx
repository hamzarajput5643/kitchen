import Office from "@app/components/website/office/Office";
import Footer from "@app/layouts/Footer";
import React from "react";
import Map from "@app/components/website/map/Map"
import { NavLink } from "react-router-dom";

const ContactUs: React.FC = () => {
  return (
    <>
      <main id="contact-us-page">
        {/* PAGE INFO */}
        <section
          className="page-info-2 set-bg"
          data-image-src="/src/assets/images/page-info-bg-1.jpg"
        >
          <div className="section-header">
            <h1 className="text-white">Contact us</h1>
            <span>~ More than you know ~</span>
          </div>
        </section>
        <div>
          <Office/>
          <Map/>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
