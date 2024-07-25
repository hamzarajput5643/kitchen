import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import MobileNav from "./navbar/MobileNav";
import MainNav from "./navbar/MainNav";

const Header: React.FC = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/src/assets/fonts/linearicons/style.css" />
        <link rel="stylesheet" href="/src/assets/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css" />
        <link rel="stylesheet" href="/src/assets/vendor/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/src/assets/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="/src/assets/vendor/revolution-slider/css/layers.css" />
        <link rel="stylesheet" type="text/css" href="/src/assets/vendor/revolution-slider/css/navigation.css" />
        <link rel="stylesheet" type="text/css" href="/src/assets/vendor/revolution-slider/css/settings.css" />
        <link rel="shortcut icon" href="/src/assets/favicon.png" />
        <link rel="stylesheet" href="/src/assets/css/style.css" />
      </Helmet>

      {/* <div className="images-preloader">
            <div id="preloader" className="rectangle-bounce">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div> */}
      <header>
        <MainNav />
        <MobileNav />
      </header>
    </>
  );
};

export default Header;