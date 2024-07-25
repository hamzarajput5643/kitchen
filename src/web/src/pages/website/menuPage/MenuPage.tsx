import DesertsMenu from "@app/components/website/desertsMenu/DesertsMenu";
import DrinksMenu from "@app/components/website/drinksMenu/DrinksMenu";
import MainMenu from "@app/components/website/mainMenu/MainMenu";
import SoupSaladMenu from "@app/components/website/soupSaladMenu/SoupSaladMenu";
import Footer from "@app/layouts/Footer";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuPage: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE INFO */}
        <section
          className="page-info-3 set-bg"
          data-image-src="/src/assets/images/page-info-bg-3.jpg"
        >
          <div className="section-header">
            <h1 className="text-white">Our menu</h1>
            <span>~ See what we offe ~</span>
          </div>
        </section>
        <div>
          <MainMenu/>
          <SoupSaladMenu/>
          <DrinksMenu/>
          <DesertsMenu/>
        </div>
      </main>
    </>
  );
};

export default MenuPage;
