import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store"; 
import { fetchCategories } from "../../../store/reducers/MenuSlice";

const FoodMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.menu.categories);
  const status = useAppSelector((state) => state.menu.status);
  const error = useAppSelector((state) => state.menu.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return (
    <>
      {/* OUR MENU */}
      <section className="our-menu section-primary pb-113">
        <div className="container">
          <div className="section-header">
            <h2 className="text-white">Our Food Menu</h2>
            <span>~ See what we offer ~</span>
          </div>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" && categories && categories.length > 0 && (
            <div className="row justify-content-between">
              {categories.map((category) => (
                <div key={category.id} className="col-md-6">
                  <div className="our-menu-col">
                    <div className="heading">
                      <h3>{category.title}</h3>
                      <span className="icon">
                        <img src={category.image} alt={category.title} width={50}/>
                      </span>
                    </div>
                    <div className="body">
                      <p>{category.description}</p>
                      <div className="menu-item">
                        <h5>
                          <span className="dots" />
                          <span className="price">
                            <span>$</span>
                            {category.price.toFixed(2)}
                          </span>
                        </h5>
                        <ul>
                          <li>
                            <a href="#">{category.category}</a>
                          </li>
                          <li>
                            <a href="#">Rating: {category.rating.rate}</a>
                          </li>
                          <li>
                            <a href="#">Reviews: {category.rating.count}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Handle case where no categories are returned */}
          {status === "succeeded" && categories && categories.length === 0 && (
            <p>No categories found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
