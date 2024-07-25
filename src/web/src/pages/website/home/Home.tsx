import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "@app/layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "@app/layouts/Footer";

const Home: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
};

export default Home;
