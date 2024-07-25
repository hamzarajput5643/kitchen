import React from "react";
import { NavLink } from "react-router-dom";

const Quality: React.FC = () => {
  return (
    <>
      {/* WELCOME TO ROYATE */}
      <section className="welcome section-primary">
        <div className="container">
          <div className="section-header">
            <h2>Welcome to royate</h2>
            <span>~ Luxury &amp; Quality ~</span>
          </div>
          <div className="row text-center">
            <div className="col-md-6 col-lg-4">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-1.jpg" alt="" />
                  </NavLink>
                </div>
                <div className="post-body">
                  <h5>
                    <NavLink to="/blog-single">Professional level</NavLink>
                  </h5>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-2.jpg" alt="" />
                  </NavLink>
                </div>
                <div className="post-body">
                  <h5>
                    <NavLink to="/blog-single">Fresh food guaranteed</NavLink>
                  </h5>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="post mb-0">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-3.jpg" alt="" />
                  </NavLink>
                </div>
                <div className="post-body pb-0">
                  <h5>
                    <NavLink to="/blog-single">The menu is plentiful</NavLink>
                  </h5>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Quality;
