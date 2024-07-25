import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchCategories } from "../../../store/reducers/MenuSlice";

const DesertsMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, status, error } = useAppSelector((state) => state.menu);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      {/* MAIN COURSE */}
      <section
        className="menu-block-bg-3 set-bg"
        data-image-src="/src/assets/images/menu-block-bg.jpg"
      >
        <div className="section-header">
          <h2 className="text-white">Deserts</h2>
          <span>~ Clean vegetables ~</span>
        </div>
      </section>
      <section className="section-primary menu-page pb-120">
        <div className="container">
          <div className="row">
            {categories.map((item, index) => (
              <div
                key={item.id}
                className={`col-md-6 menu-holder ${index % 2 === 0 ? "left" : "right"} ${index === categories.length - 1 && index % 2 === 0 ? "mb-md-0" : ""} ${index === categories.length - 1 && index % 2 !== 0 ? "mb-0" : ""}`}
              >
                <a href="shop-single.html" className="menu-thumb">
                  <img src={item.image} alt={item.title} width={100} />
                </a>
                <div className="menu-item">
                  <h5 className="bold-color">
                    <a href="shop-single.html">{item.title}</a>
                    <span className="dots" />
                    <span className="price">
                      <span>$</span>
                      {item.price}
                    </span>
                  </h5>
                  <ul>
                    {/* Assuming categories can have multiple tags */}
                    <li>
                      <a href="#">Tag example</a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesertsMenu;
