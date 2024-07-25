import React from "react";
import Slider from "../Slider/Slider";
import Quality from "../quality/Quality";
import FoodMenu from "../foodManu/FoodMenu";
import Feature from "../feature/Feature";
import News from "../news/News";

const MainComp: React.FC = () => {
  return (
    <>
      <main>
        {/* SLIDE SHOW */}
        <div>
          <Slider />
          <Quality />
          <FoodMenu />
          <Feature />
          <News />
        </div>
      </main>
    </>
  );
};

export default MainComp;
